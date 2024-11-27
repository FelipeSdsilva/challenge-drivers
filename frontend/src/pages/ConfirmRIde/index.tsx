import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Box, Typography, Card, CardContent, CardActions, Button, Grid } from "@mui/material";
import './style.css';
import { BASE_URL_LOCAl } from "../../utils/sistem";
import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import L, { LatLngBoundsExpression, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css"; // Importa o CSS do Leaflet
import { DriverOption } from "../../models/driveOption.model";
import { Leg } from "../../models/leg.model";
import { LocationState } from "../../models/locationState.model";

const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

export default function ConfirmRide() {
    const location = useLocation();
    const navigate = useNavigate();
    const { customer_id, origin, destination, options, routeResponse } = (location.state || {}) as LocationState;
    const [bounds, setBounds] = useState<LatLngBoundsExpression | undefined>(undefined);

    const routePoints: LatLngTuple[] = useMemo(() => {
        if (!routeResponse?.routes) return [];
        return routeResponse.routes[0].legs
            .map((leg: Leg) => [
                [leg.startLocation.latLng.latitude, leg.startLocation.latLng.longitude] as LatLngTuple,
                [leg.endLocation.latLng.latitude, leg.endLocation.latLng.longitude] as LatLngTuple,
            ])
            .flat();
    }, [routeResponse]);

    useEffect(() => {
        if (routePoints.length > 0) {
            const latLngBounds = L.latLngBounds(routePoints);
            setBounds((prevBounds) => {
                if (!prevBounds || !latLngBounds.equals(prevBounds)) {
                    return latLngBounds;
                }
                return prevBounds;
            });
        }
    }, [routePoints]);

    const handleConfirm = async (selectedDriver: DriverOption) => {
        try {
            const confirmBody = {
                customer_id: customer_id,
                origin: location.state?.origin_name || "Origem Desconhecida",
                destination: location.state?.destination_name || "Destino Desconhecido",
                distance: location.state.distance,
                duration: routeResponse.routes[0].duration,
                driver: {
                    id: selectedDriver.id,
                    name: selectedDriver.name,
                },
                value: selectedDriver.value,
            };
            console.log(location.state);


            console.log(confirmBody);

            await axios.patch(`${BASE_URL_LOCAl}/ride/confirm`, confirmBody);
            navigate('/travel-historic');
        } catch (error) {
            console.error('Erro ao confirmar viagem:', error);
        }
    };


    if (!origin || !destination || !options || !routeResponse) {
        return <div>Carregando informações da viagem...</div>;
    }

    return (
        <>
            <Box sx={{ padding: 2 }}>
                <Typography variant="h4" gutterBottom>
                    Opções de Viagem
                </Typography>

                <Box sx={{ marginBottom: 4, height: 400, width: "100%" }}>
                    <MapContainer
                        center={[origin.latitude, origin.longitude]}
                        zoom={13}
                        style={{ height: "100%", width: "100%" }}
                        bounds={bounds}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                        />
                        <Polyline positions={routePoints} color="blue" />
                        <Marker position={[origin.latitude, origin.longitude]} icon={customIcon}>
                            <Popup>Ponto A: Origem</Popup>
                        </Marker>
                        <Marker position={[destination.latitude, destination.longitude]} icon={customIcon}>
                            <Popup>Ponto B: Destino</Popup>
                        </Marker>
                    </MapContainer>
                </Box>

                <Grid container spacing={3}>
                    {options.map((driver: DriverOption) => (
                        <Grid item xs={12} sm={6} md={4} key={driver.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">{driver.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {driver.description}
                                    </Typography>
                                    <Typography variant="body2">Veículo: {driver.vehicle}</Typography>
                                    <Typography variant="body2">Avaliação: {driver.review.rating} estrelas</Typography>
                                    <Typography variant="body2">Comentário: {driver.review.comment}</Typography>
                                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                        Valor: R$ {driver.value.toFixed(2)}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        onClick={() => handleConfirm(driver)}
                                    >
                                        Escolher
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}