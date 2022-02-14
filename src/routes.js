import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
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
  const userDetails = JSON.parse(localStorage.getItem("loggedIn"))

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Link style={{ color: "white" }} to="/">Home</Link>
          {" "}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <p style={{ color: "white" }}>{userDetails?.email}</p>
              {
                auth ?
                  <Button onClick={() => { localStorage.removeItem("loggedIn"); history('/login') }}>Logout</Button>
                  :
                  <Link style={{ color: "white" }} to="/signup">SingUp</Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    // <nav>
    //   <Link to="/">Home</Link>
    //   {" | "}
    //   {
    //     auth ?
    //       <Button onClick={() => { localStorage.removeItem("loggedIn"); history('/login') }}>Logout</Button>
    //       :
    //       <Link to="/signup">SingUp</Link>
    //   }
    //   {userDetails && (
    //     <h4>{userDetails.email}</h4>
    //   )}
    // </nav>
  );
}
