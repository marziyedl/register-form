import "./App.css";
import { Container } from "reactstrap";
import NavBar from "components/common/NavBar";
import AppRoutes from "routes/AppRoutes";
function App() {
  return (
    <Container>
      <NavBar />
      <AppRoutes />
    </Container>
  );
}

export default App;
