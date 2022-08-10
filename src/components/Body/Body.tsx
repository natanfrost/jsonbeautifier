import {
  Alert,
  AlertTitle,
  Button,
  Container,
  Grid,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import Header from "../Header/Header";
import JsonFormatted from "../JsonFormatted/JsonFormatted";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const Body = () => {
  const [json, setJson] = useState<string[]>([]);
  const [textField, setTextField] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const inputFile = useRef<HTMLInputElement>(null);

  const handleChange = (e: string) => {
    setTextField(e);
  };

  const addNewJson = () => {
    try {
      const jsonObj = JSON.parse(textField);
      const formatted = JSON.stringify(jsonObj, null, "\t");
      setJson((prev) => [formatted, ...prev]);

      setTimeout(() => {
        const element = document.getElementById("json-result");
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      if (error instanceof Error) {
        setShowAlert(true);
        setAlertMessage(error.message);
      }
    }
  };

  const clearText = () => {
    setTextField("");
    if (inputFile) {
      inputFile.current!.value = "";
    }
  };

  const openFile = () => {
    inputFile!.current!.click();
  };

  const readFile = () => {
    console.log(inputFile);

    const reader = new FileReader();
    if (inputFile.current !== null) {
      if (inputFile.current.files !== null) {
        reader.readAsText(inputFile.current.files[0], "UTF-8");
        reader.onload = (evt: ProgressEvent<FileReader>) => {
          if (evt.target) {
            console.log(evt.target.result!.toString());
            setTextField(evt.target.result!.toString());
          }
        };
        reader.onerror = (evt: ProgressEvent<FileReader>) => {
          setShowAlert(true);
          setAlertMessage(evt.target!.error!.message);
        };
      }
    }
  };

  return (
    <>
      <>
        <Header />
        <Container fixed>
          <Paper
            elevation={3}
            sx={{ padding: "20px", backgroundColor: "#F0EFF4" }}
            square
          >
            <Typography fontFamily={"monospace"} variant="h6" align="center">
              Paste your JSON below
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={1}></Grid>
              <Grid item xs={10}>
                <Stack direction={"row"} justifyContent={"flex-end"}>
                  <FontAwesomeIcon
                    onClick={clearText}
                    style={{
                      color: "#131200",
                      cursor: "pointer",
                      position: "absolute",
                      zIndex: "1",
                      paddingTop: "15px",
                      paddingRight: "40px",
                    }}
                    icon={faTrashCan}
                  />
                  <FontAwesomeIcon
                    onClick={openFile}
                    style={{
                      color: "#131200",
                      cursor: "pointer",
                      position: "absolute",
                      zIndex: "1",
                      paddingTop: "15px",
                      paddingRight: "10px",
                    }}
                    icon={faFolderOpen}
                  />
                  <input
                    ref={inputFile}
                    onChange={readFile}
                    type="file"
                    hidden
                  />
                </Stack>
                <Typography component={"span"} sx={{ borderRadius: "5px" }}>
                  <TextField
                    role={"input-json"}
                    fullWidth
                    variant="outlined"
                    multiline
                    rows={20}
                    placeholder="{}"
                    margin="dense"
                    onChange={(e) => handleChange(e.target.value)}
                    sx={{ backgroundColor: "white" }}
                    value={textField}
                  />
                </Typography>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
            <Container fixed>
              <Grid container justifyContent={"center"} marginTop={2}>
                <Button
                  variant="contained"
                  onClick={() => addNewJson()}
                  role="add-new"
                  size="large"
                >
                  Process
                </Button>
              </Grid>
            </Container>
            <div id="json-result"></div>
          </Paper>
        </Container>
      </>
      {json.length > 0
        ? json.map((el, index) => {
            return (
              <JsonFormatted id={index.toString()} key={index} json={el} />
            );
          })
        : null}
      <Snackbar
        role={"toast"}
        open={showAlert}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={() => setShowAlert(false)}
      >
        <Alert severity="error" onClose={() => setShowAlert(false)}>
          <AlertTitle>Error</AlertTitle>
          {alertMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Body;
