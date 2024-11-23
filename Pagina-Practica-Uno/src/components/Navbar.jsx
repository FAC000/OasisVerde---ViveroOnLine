import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { Iconcart } from './Iconcart';



export function BasicExample() {

  const esconder = () => {
    collapse.Toggle(".collapse:not(.show)")

  }



  return (
    <Navbar expand="lg" className=" nav bg-body-tertiary">

      <Container>
        <Iconcart />
        <Navbar.Toggle className='buttonNav' aria-controls=" basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" navContainer me-auto">

            <Link to={'/'}   onClick={esconder}>
              <li className="nav-link" id="RouterNavLink" onClick={esconder}>Home</li>
            </Link>


            <NavDropdown title="Plantas" id="basic-nav-dropdown">

              <Link to={'/categoria/exterior' }   onClick={esconder}>
                <li className=" categoriaPlanta nav-link" id="RouterNavLink"> Exterior</li>
              </Link>

              <Link to={'/categoria/interior'} onClick={esconder}>
              <li className=" categoriaPlanta nav-link" id="RouterNavLink" >Interior</li>
              </Link>

            </NavDropdown>

            <Link to={'/contacto'} onClick={esconder}>
            <li className="nav-link" id="RouterNavLink" >Contacto</li>
            </Link>

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>

  )
}

