import { Container, Paper, Typography, Grid } from "@mui/material";
import { createRef, useEffect, useState } from "react";
import JsonRow from "../Json/JsonRow";

interface JsonFormattedProps {
    id: string,
    json: string
}

const JsonFormatted = (props: JsonFormattedProps) => {
    const refElem = createRef<any>();
    const [splitedJson, setSplitedJson] = useState<string[]>([]);

    useEffect(() => {
        const { json } = { ...props };

        const split = json.split('\n');
        setSplitedJson(split)
    }, [props])

    return (
        <Container id={props.id} fixed>
            <div ref={refElem}></div>
            <Paper elevation={0} sx={{ padding: '20px', backgroundColor: '#F0EFF4' }} square>
                <Typography fontFamily={'monospace'} variant="h6" align="center" sx={{paddingTop: '20px', paddingBottom: '20px'}}>
                    Beautified JSON
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <Paper elevation={3} sx={{ padding: '1em' }}>
                            {
                                splitedJson.map((el) => {
                                    return <Paper square elevation={0}>
                                        <JsonRow json={el} />
                                    </Paper>
                                })
                            }
                        </Paper>
                        {/* <Typography variant="subtitle1">
                            <TextField value={props.json} fullWidth variant="outlined" multiline minRows={20} placeholder="{}" margin="dense" sx={{backgroundColor: 'white'}}/>
                        </Typography> */}

                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default JsonFormatted;