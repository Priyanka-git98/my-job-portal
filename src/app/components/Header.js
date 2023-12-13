import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const Header = () => {
  return (
    <AppBar position="static" style={{ background: '#2CE2A2' }}>
      <Toolbar>
        <Typography variant="h6" component="div">
          <Link href="/" legacyBehavior>
            <a style={{ color: 'black', textDecoration: 'none' }}>
              Hirect

              
            </a>
          </Link>
        </Typography>
        <div style={{ marginLeft: 'auto' }}>
          {/* <Link href="/findjobs" legacyBehavior>
            <a style={{ color: 'black', marginLeft: 20, textDecoration: "none" }}>Find Jobs</a>
          </Link> */}
          <Link href="/recruiterRegister/signup" legacyBehavior>
            <a style={{ color: 'black', marginLeft: 20, textDecoration: "none" }}>Employers</a>
          </Link>
          <Link href="/register/signup" legacyBehavior>
            <a style={{ color: 'black', marginLeft: 20, textDecoration: "none" }}>Register</a>
          </Link>
          <Link href="/register/login" legacyBehavior>
            <a style={{ color: 'black', marginLeft: 20, textDecoration: "none" }}>Login</a>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
