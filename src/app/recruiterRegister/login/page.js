import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { Field, reduxForm } from 'redux-form';

const Page = () => {
    return (
        <Container maxWidth="xs">
            <Typography variant='h4'>Login to your account</Typography>

            <Grid container spacing={4}>
                <Grid item xs={10}>
                    <Field
                        id="outlined-basic"
                        label="Your official email"
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
                        Login
                    </Button>
                </Grid>
            </Grid>
            <Typography>
                Don't have an account?<Link href="/recruiterRegister/signup" legacyBehavior>
                    Sign up here
                </Link>
            </Typography>
        </Container>

    )
}

export default reduxForm({
    form:"recruiterLoginForm"
})(Page);