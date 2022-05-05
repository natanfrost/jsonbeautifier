import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, Box, Container, Toolbar, Button } from "@mui/material";
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Header = () => {

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        window.open('https://github.com/natanfrost/');
    };


    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#2F6690' }}>
            <Container fixed>
                <Toolbar disableGutters>
                    <Box style={{flex: 1}}>
                        <img src="/img/logo.png" alt="JSON Beautifier" style={{cursor: 'pointer'}} />
                    </Box>
                    <Box >
                        <Button startIcon={<FontAwesomeIcon icon={faGithub} />} key={'GitHub'} onClick={handleClick} sx={{color: 'white'}} />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;