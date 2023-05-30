import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" style={{ flexGrow: "1" }}>
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                        Snowfall Review ❄️❄️
                    </Link>
                </Typography>
                <Button color="inherit">
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                        Retour
                    </Link>
                </Button>
                <Button color="inherit">
                    <Link to="/questions" style={{ textDecoration: "none", color: "black" }}>
                        Questions
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

