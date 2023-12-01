import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

const Page = () => {
    return (
        <Container maxWidth="xs">
            <Typography variant='h4'>Create your account</Typography>

            <Grid container spacing={4}>
                <Grid item xs={10}>
                    <TextField
                        id="outlined-basic"
                        label="Your name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                </Grid>

                <Grid item xs={10}>
                    <TextField
                        id="outlined-basic"
                        label="Your email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={10}>
                    <TextField
                        id="outlined-basic"
                        label="Your mobile number"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={10}>
                    <TextField
                        id="outlined-basic"
                        label="Your password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={10}>
                    <TextField
                        id="outlined-basic"
                        label="Upload your resume here"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                </Grid>
                <Grid>
                    <Button variant="contained" style={{ backgroundColor: '#2CE2A2', color: "black" }}>
                        Sign up
                    </Button>
                </Grid>
            </Grid>
            <Typography>
                Already have an account?<Link href="/register/login" legacyBehavior>
                    Login
                </Link>
            </Typography>
        </Container>

    )
}

export default Page;