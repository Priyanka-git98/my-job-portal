import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import {Field, reduxform} from 'react-router-dom'

const Page = () => {
    return (
        <Container maxWidth="xs">
            <Typography variant='h4'>Create your account</Typography>

            <Grid container spacing={4}>
                <Grid item xs={10}>
                    <Field
                        id="outlined-basic"
                        label="Your name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                </Grid>

                <Grid item xs={10}>
                    <Field
                        id="outlined-basic"
                        label="Your email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={10}>
                    <Field
                        id="outlined-basic"
                        label="Your password"
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

export default reduxform({
    form:'signUpForm'
})(Page);