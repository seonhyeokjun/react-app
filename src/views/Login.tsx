import { useNavigate } from "react-router-dom";
import { Container, Box } from "@mui/material";
import { GoogleLogin } from "react-google-login";

function Login() {
  const history = useNavigate();

  function successLogin(res: any) {
    history("/boards");
  }

  function failLogin(error: any) {
    console.log(error);
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

        <GoogleLogin
          clientId={
            "794794019843-a66l7m21e0k1f1en1jcs5pod0qbjrm6v.apps.googleusercontent.com"
          }
          onSuccess={successLogin}
          onFailure={failLogin}
        ></GoogleLogin>
      </Box>
    </Container>
  );
}

export default Login;
