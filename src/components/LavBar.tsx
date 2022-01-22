import { AppBar, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";

function LavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Box>
          <Link to="/boards">Boards</Link>
        </Box>
      </Container>
    </AppBar>
  );
}

export default LavBar;
