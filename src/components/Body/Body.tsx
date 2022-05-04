import { Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import Header from "../Header/Header";

const Body = () => {
    const [json, setJson] = useState('');
    const [formatedJson, setFormatedJson] = useState('');
    const resultRef = useRef<HTMLElement>(null);

    const format = () => {
        const jsonObj = JSON.parse(json);
        setFormatedJson(JSON.stringify(jsonObj, null, '\t'));
        console.log(JSON.stringify(json, null, '\t'));        
        resultRef.current!.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <Header />
            <Container fixed>
                <Paper elevation={3} sx={{ height: '90vh', padding: '20px' }} square>
                    <Typography variant="subtitle1" align="center">
                        Paste your JSON below
                    </Typography>
                    <Grid container spacing={2} >
                        <Grid item xs={2}></Grid>
                        <Grid item xs={8}>
                            <Typography variant="h1">
                                <TextField fullWidth variant="outlined" multiline minRows={20} placeholder="{}" margin="dense" onChange={(e) => setJson(e.target.value)} />
                            </Typography>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                    <Container fixed>
                        <Grid container justifyContent={'center'}>
                            <Button variant="contained" onClick={() => format()}>Process</Button>
                        </Grid>
                    </Container>
                </Paper>
            </Container>
            <Container fixed id='result'>
                <Paper elevation={0} sx={{ height: '80vh', padding: '20px' }} square>
                    <Typography variant="subtitle1" align="center">
                        Result
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={8}>
                            <Typography variant="subtitle1">
                                {/* {formatedJson} */}
                                <TextField inputRef={resultRef} value={formatedJson} fullWidth variant="outlined" multiline minRows={20} placeholder="{}" margin="dense" />
                            </Typography>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    )
}

export default Body;