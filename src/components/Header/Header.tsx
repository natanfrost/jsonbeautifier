import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { AppBar, Box, Container, Toolbar, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        height: "50px",
        justifyContent: "center",
        backgroundColor: "#2F6690",
      }}
    >
      <Container fixed>
        <Toolbar disableGutters>
          <Box style={{ flex: 1 }}>
            <img
              src="/img/logo2.png"
              alt="JSON Beautifier"
              style={{ cursor: "pointer", marginTop: "5px" }}
            />
          </Box>
          <Box>
            <Button
              role="github-link"
              href="https://github.com/natanfrost/"
              target="_blank"
              startIcon={<FontAwesomeIcon icon={faGithub} />}
              key={"GitHub"}
              sx={{ color: "white" }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
