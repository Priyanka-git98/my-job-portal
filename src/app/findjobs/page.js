import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';

const FindJob = () => {
    return (
        <>
            <AppBar position="sticky" style={{ background: "#2CE2A2" }}>
                <Toolbar>
                    <Link href="/" legacyBehavior>
                        <a style={{ color: 'black', textDecoration: 'none' }}>
                            Hirect
                        </a>
                    </Link>
                    <Link href="/employeeSignin" legacyBehavior>
                        <a style={{ color: 'black', textDecoration: 'none', marginLeft: 'auto' }}>
                            Signin
                        </a>
                    </Link>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md" style={{ marginTop: 40 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Find Jobs
                </Typography>
                <Typography variant="body1" paragraph>
                    Explore thousands of job opportunities. Search for positions, read company reviews, and apply for your next dream job!
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="Job Title, Keywords, or Company"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="outlined-basic"
                    label="Location"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" style={{ backgroundColor: '#2CE2A2', color: "black" }}>
                    Find Jobs
                </Button>
            </Container>
        </>
    );
};

export default FindJob;
