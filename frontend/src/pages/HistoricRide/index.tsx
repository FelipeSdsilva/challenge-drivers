
import { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";
import { BASE_URL_LOCAl } from "../../utils/sistem";
import axios from "axios";

export default function HistoricRider() {

    const [userId, setUserId] = useState<string>("");
    const [selectedDriver, setSelectedDriver] = useState<string>("all");
    const [rides, setRides] = useState<Ride[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchRides = async () => {
        if (!userId) {
            alert("Por favor, informe o ID do usuário.");
            return;
        }

        setLoading(true);
        try {

            const url = `${BASE_URL_LOCAl}/ride/${userId}${selectedDriver !== "all" ? `?driver_id=${selectedDriver}` : ""}`;
            const response = await axios.get(url);

            setRides(response.data.rides);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
            alert("Erro ao carregar os dados. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    // Formatar duração de segundos para minutos e horas
    const formatDuration = (duration: string) => {
        const seconds = parseInt(duration, 10);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        return `${minutes}m ${remainingSeconds}s`;
    };

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>
                Histórico de Viagens
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    marginBottom: 3,
                    alignItems: "center",
                }}
            >
                <TextField
                    label="ID do Usuário"
                    variant="outlined"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    sx={{ width: 200 }}
                />

                <FormControl sx={{ minWidth: 200 }}>
                    <InputLabel>Motorista</InputLabel>
                    <Select
                        value={selectedDriver}
                        onChange={(e) => setSelectedDriver(e.target.value)}
                        label="Motorista"
                    >
                        <MenuItem value="all">Todos</MenuItem>
                        <MenuItem value="1">Homer Simpson</MenuItem>
                        <MenuItem value="2">Dominic Toretto</MenuItem>
                        <MenuItem value="3">James Bond</MenuItem>
                    </Select>
                </FormControl>

                <Button variant="contained" onClick={fetchRides} disabled={loading}>
                    {loading ? "Carregando..." : "Aplicar Filtro"}
                </Button>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Data e Hora</TableCell>
                            <TableCell>Motorista</TableCell>
                            <TableCell>Origem</TableCell>
                            <TableCell>Destino</TableCell>
                            <TableCell>Distância (km)</TableCell>
                            <TableCell>Tempo</TableCell>
                            <TableCell>Valor (R$)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rides.map((ride) => (
                            <TableRow key={ride.id}>
                                <TableCell>
                                    {new Date(ride.date).toLocaleString("pt-BR")}
                                </TableCell>
                                <TableCell>{ride.driver.name}</TableCell>
                                <TableCell>{ride.origin}</TableCell>
                                <TableCell>{ride.destination}</TableCell>
                                <TableCell>{ride.distance.toFixed(2)}</TableCell>
                                <TableCell>{formatDuration(ride.duration)}</TableCell>
                                <TableCell>{ride.value.toFixed(2)}</TableCell>
                            </TableRow>
                        ))}
                        {rides.length === 0 && !loading && (
                            <TableRow>
                                <TableCell colSpan={7} align="center">
                                    Nenhuma viagem encontrada.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};


