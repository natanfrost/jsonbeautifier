import { AppBar, Box, Container, Toolbar, Typography, Button, MenuItem } from "@mui/material";

const pages = ['About', 'Github'];

const Header = () => {

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        window.open('https://github.com/natanfrost/');
    };


    return (
        <AppBar position="sticky" sx={{backgroundColor: '#5D737E'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        {pages.map((page) => (
                            <MenuItem key={page}>
                                <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleClick}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;