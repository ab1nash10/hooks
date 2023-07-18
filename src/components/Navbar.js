// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(Nav.Link)`
text-decoration: none;
  color: #9e9e9e;

&:hover{
    text-decoration: overline;
    color: white;
  }
`;

const StyledBrand = styled(Navbar.Brand)`
text-decoration: none;
color: grey;

&:hover{
  color:white;

}
`;

function NavScrollExample() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        Navbar
        bg="dark"
        data-bs-theme="dark"
      >
        <Container fluid>
          <StyledBrand onClick={() => handleNavigate('/')}>Navbar</StyledBrand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <StyledLink onClick={() => handleNavigate('/')}> Home</StyledLink>
              <StyledLink onClick={() => handleNavigate('/post/postId')}>
                {' '}
                PostDetail
              </StyledLink>
              <StyledLink onClick={() => handleNavigate('/create-post')}>
                {' '}
                CreatePost{' '}
              </StyledLink>

              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}

              {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScrollExample;

