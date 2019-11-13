import * as React from 'react';
import { withRouter} from 'react-router-dom';
import {
    Navbar,
    Nav
} from 'react-bootstrap';

function Header(props: any) {
    const {history} = props;
    return(
        <>
          
            <Navbar bg="primary" variant="dark">
                <div className="container">

                <Navbar.Brand onClick={()=>history.push("/")}>Cquirozipi</Navbar.Brand>
                <Nav >
                    <Nav.Link onClick={()=>history.push("/projects")}>projects</Nav.Link>
                    <Nav.Link onClick={()=>history.push("/technologies")}>technologies</Nav.Link>
                    <Nav.Link href="https://mangopp.com" target="_blank">Blog</Nav.Link>
                </Nav>
                
                </div>
            </Navbar>

           
        </>
    )
}

export default withRouter(Header);