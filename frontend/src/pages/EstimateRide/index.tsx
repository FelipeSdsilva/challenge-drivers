import axios from "axios";
import { useNavigate } from "react-router";
import { ChangeEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { BASE_URL_LOCAl } from "../../utils/sistem";
import './style.css';


export default function EstimateForm() {

    const navigate = useNavigate();
    const [estimateBody, setEstimateBody] = useState({
        customer_id: '',
        origin: '',
        destination: ''
    })

    const handleEstimate = async () => {
        try {
            const response = await axios.post(`${BASE_URL_LOCAl}/ride/estimate`, estimateBody);
            navigate('/confirm-travel', {
                state: {
                    ...response.data,
                    customer_id: estimateBody.customer_id,
                    origin_name: estimateBody.origin,
                    destination_name: estimateBody.destination
                },
            });
        } catch (error) {
            console.error('Error fetching estimate:', error);
        }
    };


    function updateEstateBody(e: ChangeEvent<HTMLInputElement>): void {
        setEstimateBody({
            ...estimateBody,
            [e.target.name]: e.target.value,
        }
        );
        console.log(estimateBody);
    }

    return (
        <>
            <Typography variant="h4" gutterBottom>
                Solicitação de viagem
            </Typography>
            <form onSubmit={(e) => e.preventDefault()}>
                <TextField
                    className="inpt-estimate"
                    type="text"
                    variant="filled"
                    label="ID usuario"
                    name="customer_id"
                    value={estimateBody.customer_id}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateEstateBody(e)} />
                <br />
                <br />
                <TextField className="inpt-estimate"
                    type="text"
                    name="origin"
                    variant="filled"
                    label="Endereço de origem"
                    value={estimateBody.origin}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateEstateBody(e)} />
                <br />
                <br />
                <TextField className="inpt-estimate"
                    type="text"
                    variant="filled"
                    name="destination"
                    label="Endereço de destino"
                    value={estimateBody.destination}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateEstateBody(e)} />
                <br />
                <br />
                <Button className="inpt-estimate" variant="contained" type="submit" onClick={handleEstimate}>ESTIMAR VALOR</Button>
            </form>
        </>
    );
}