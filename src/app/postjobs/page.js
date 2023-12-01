import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';

const PostJob = () => {
    return (
        <>
            <AppBar position="sticky" style={{ background: "#2CE2A2" }}>
                <Toolbar>
                    <Link href="/" legacyBehavior>
                        <a style={{ color: 'black', textDecoration: 'none' }}>
                            Hirect
                        </a>
                    </Link>
                    <Link href="/recruiterSignin" legacyBehavior>
                        <a style={{ color: 'black', textDecoration: 'none', marginLeft: 'auto' }}>
                            Signin
                        </a>
                    </Link>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md" style={{ marginTop: 40 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Post Jobs
                </Typography>
                <Typography variant="body1" paragraph>
                    You haven't posted a job before, so you'll need to create an employer account.
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="Your company's name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="outlined-basic"
                    label="Your company's number of employees"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                 <TextField
                    id="outlined-basic"
                    label="Your first and last name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                 <TextField
                    id="outlined-basic"
                    label="Your phone number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" style={{ backgroundColor: '#2CE2A2', color: "black" }}>
                    Post Jobs
                </Button>
            </Container>
        </>
    );
};

export default PostJob;
