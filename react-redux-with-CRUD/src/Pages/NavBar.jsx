import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Nav fill variant="tabs mb-3 bg-light" >
            <Nav.Item >
                <Link className='text-decoration-none fs-3' to='/'>Home</Link>
            </Nav.Item>
            <Nav.Item>
                <Link className='text-decoration-none fs-3' to='/show-books'>show Books</Link>
            </Nav.Item>
            <Nav.Item>
                <Link className='text-decoration-none fs-3' to='/add-books'>add Books</Link>
            </Nav.Item>
        </Nav>
    );
};

export default NavBar;