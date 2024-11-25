import axios from 'axios';

const fetchRouteFromGoogleMaps = async (origin: string, destination: string, next: Function) => {
    try {
        const requestData = {
            origin: { address: origin },
            destination: { address: destination },
            travelMode: "DRIVE",
        }

        const response = await axios.post(
            `${process.env.GOOGLE_API_URL}`, requestData,
            {
                headers: {
                    "Content-Type": "application/json",
                    "X-Goog-Api-Key": `${process.env.GOOGLE_API_KEY}`,
                    "X-Goog-FieldMask": "routes.duration,routes.distanceMeters,routes.legs.startLocation,routes.legs.endLocation",
                },
            }
        );

        const route = response.data.routes[0];
        const leg = route.legs[0];
        return {
            origin: {
                lat: leg.startLocation.latLng.latitude,
                lng: leg.startLocation.latLng.longitude,
            },
            destination: {
                lat: leg.endLocation.latLng.latitude,
                lng: leg.endLocation.latLng.longitude,
            },
            distance: route.distanceMeters / 1000,  
            duration: route.duration,
            routeResponse: response.data,
        };
    } catch (error) {
        next('Unable to fetch route from Google Maps.');  
    }
};

export { fetchRouteFromGoogleMaps };
