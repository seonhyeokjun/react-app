// import { useHistory } from "react-router-dom";
import { Container, Box, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

function Login() {
  function loginGoogle(): void {
    // useHistory.push("/home");
  }

  return (
    <Container component={"main"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <h2>LogIn</h2>

        <Button
          variant="outlined"
          startIcon={<GoogleIcon />}
          onClick={loginGoogle}
        >
          Log with Google
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
