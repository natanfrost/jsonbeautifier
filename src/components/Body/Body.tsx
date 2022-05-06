import { Alert, AlertTitle, Button, Container, Grid, Paper, Snackbar, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Header from "../Header/Header";
import JsonFormatted from "../JsonFormatted/JsonFormatted";

const Body = () => {
    const [json, setJson] = useState<string[]>([]);
    const [textField, setTextField] = useState('');


    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleChange = (e: string) => {
        setTextField(e);
    }


    const addNewJson = () => {

        try {
            const jsonObj = JSON.parse(textField);
            const formatted = JSON.stringify(jsonObj, null, '\t');
            setJson(prev => [formatted, ...prev]);

            setTimeout(() => {
                const element = document.getElementById('json-result');
                element?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } catch (error) {
            if (error instanceof Error) {
                setShowAlert(true);
                setAlertMessage(error.message);
            }            
        }
    }

    return (
        <>
            <>
                <Header />
                <Container fixed >
                    <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#F0EFF4' }} square >
                        <Typography fontFamily={'monospace'} variant="h6" align="center">
                            Paste your JSON below
                        </Typography>
                        <Grid container spacing={2} >
                            <Grid item xs={2}></Grid>
                            <Grid item xs={8}>
                                <Typography variant="h1" sx={{borderRadius: '5px'}}>
                                    <TextField 
                                        fullWidth 
                                        variant="outlined" 
                                        multiline 
                                        minRows={20} 
                                        placeholder="{}" 
                                        margin="dense" 
                                        onChange={(e) => handleChange(e.target.value)} 
                                        sx={ {backgroundColor: 'white'}}
                                    />                                        
                                </Typography>
                            </Grid>
                            <Grid item xs={2}></Grid>
                        </Grid>
                        <Container fixed>
                            <Grid container justifyContent={'center'} marginTop={2}>
                                <Button variant="contained" onClick={() => addNewJson()}>Process</Button>
                            </Grid>
                        </Container>
                        <div id="json-result"></div>
                    </Paper>                    
                </Container>
            </>
            {
                json.length > 0 ?
                    json.map((el, index) => {
                         return <JsonFormatted id={index.toString()} key={index} json={el} />
                    })
                    :
                    null
            }
            <Snackbar open={showAlert} autoHideDuration={6000} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
                <Alert severity="error" onClose={() => setShowAlert(false)}>
                    <AlertTitle>Error</AlertTitle>
                    {alertMessage}
                </Alert>
            </Snackbar>

        </>
    )
}

export default Body;