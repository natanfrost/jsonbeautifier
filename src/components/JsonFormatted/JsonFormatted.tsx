import { Container, Paper, Typography, Grid, TextField } from "@mui/material";
import { createRef, useEffect, useRef } from "react";


interface JsonFormattedProps {
    id: string,
    json: string
}

const JsonFormatted = (props: JsonFormattedProps) => {
    const refElem = createRef<any>();

    // useEffect(() => {   
    //     setTimeout(() => {
    //         const doc = document.getElementById(`${props.id}`)
    //         refElem.current?.scrollIntoView({behavior: 'smooth'});                     
    //     }, 1);        
    // }, [refElem])

    return (
        <Container id={props.id} fixed>
            <div ref={refElem}></div>
            <Paper elevation={0} sx={{ padding: '20px' }} square>
                <Typography variant="subtitle1" align="center">
                    Result
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <Typography variant="subtitle1">
                            <TextField value={props.json} fullWidth variant="outlined" multiline minRows={20} placeholder="{}" margin="dense"/>
                        </Typography>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default JsonFormatted;