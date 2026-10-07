// Page components rendered by the route table.
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';

// Bootstrap UI and React Router primitives used by the app shell.
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Read } from './components/Read';
import { Create } from './components/Create';
import Movies from './components/Movies';
import MovieItem from './components/MovieItem';
function App() {
  // BrowserRouter provides routing context for navigation and page selection.
  // Routes below map each page URL to the component displayed for that URL.
  return (
    // The fragment groups the app markup without adding another DOM element.
    // BrowserRouter wraps both the navigation bar and the routed page content.
    <>
      <div>
        <BrowserRouter>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/footer">Footer</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <Routes>
            <Route path="/" element={<Content></Content>}></Route>
            <Route path="/read" element={<Read></Read>}></Route>
            <Route path="/footer" element={<Footer></Footer>}></Route>
            <Route path="/create" element={<Create></Create>}></Route>
          </Routes>

          {/* <Footer></Footer>
          <Header></Header>
          <Content></Content> */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App; 
