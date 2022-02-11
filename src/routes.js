import { Button, Container } from "react-bootstrap";
import {
  Routes,
  Route,
  BrowserRouter,
  Link,
  Navigate,
  Outlet,
  useNavigate
} from "react-router-dom";
import Home from "./Pages/home";
import Login from "./Pages/login";
import SignUp from "./Pages/signUp";

export default function RouterConfig() {
  return (
    <BrowserRouter>
      <Container>
        <MyMenu />
        <Routes>
          <Route path="/" element={<PrivateOutlet />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

function PrivateOutlet() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}


function useAuth() {
  if (localStorage.getItem('loggedIn')) {
    return true
  }
  return false
}

function MyMenu() {
  const auth = useAuth();
  const history = useNavigate();

  return (
    <nav>

      <Link to="/">Home</Link>
      {" | "}
      {
        auth ?
          <Button onClick={() => { localStorage.removeItem("loggedIn"); history('/login') }}>Logout</Button>
          :
          <Link to="/signup">SingUp</Link>
      }

    </nav>
  );
}
