import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { Iconcart } from './Iconcart';


export function BasicExample() {
  return (
    <Navbar expand="lg" className=" nav bg-body-tertiary">
      
      <Container>
      <Iconcart />
        <Navbar.Toggle className='buttonNav' aria-controls=" basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" navContainer me-auto">
          
            <Link className="nav-link" id="RouterNavLink"  to="/">Home</Link>
          
            <NavDropdown title="Plantas" id="basic-nav-dropdown">

            <Link className=" categoriaPlanta nav-link" id="RouterNavLink"  to='/categoria/exterior'>Exterior</Link>

            <Link className=" categoriaPlanta nav-link" id="RouterNavLink"  to='/categoria/interior'>Interior</Link>


            </NavDropdown>


            <Link className="nav-link" id="RouterNavLink"  to="/contacto">Contacto</Link>

          </Nav>
          
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>

  )
}

