import { Container, Paper, Typography, Grid } from "@mui/material";
import { createRef, useEffect, useState } from "react";
import JsonRow from "../Json/JsonRow";

interface JsonFormattedProps {
  id: string;
  json: string;
}

const JsonFormatted = (props: JsonFormattedProps) => {
  const refElem = createRef<any>();
  const [splitedJson, setSplitedJson] = useState<string[]>([]);

  useEffect(() => {
    console.log("a");
    const { json } = { ...props };

    const split = json.split("\n");
    setSplitedJson(split);
  }, [props]);

  return (
    <Container id={props.id} fixed>
      <div ref={refElem}></div>
      <Paper
        elevation={0}
        sx={{ padding: "20px", backgroundColor: "#F0EFF4" }}
        square
      >
        <Typography
          role={"header-text"}
          fontFamily={"monospace"}
          variant="h6"
          align="center"
          sx={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          Beautified JSON
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Paper elevation={3} sx={{ padding: "1em" }}>
              {splitedJson.map((el, index) => {
                return (
                  <Paper
                    style={{ overflowWrap: "break-word" }}
                    elevation={0}
                    key={index}
                  >
                    <JsonRow json={el} />
                  </Paper>
                );
              })}
            </Paper>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default JsonFormatted;
