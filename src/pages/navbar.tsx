import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navbarra = () => {
  return (
    <div>
      <ReactBootstrap.Navbar className="justify-content-center"fixed="top" bg="dark" variant="dark">
        <ReactBootstrap.Nav.Link>
          <Link className="text-link" to="/">Raíz</Link>
        </ReactBootstrap.Nav.Link>          
        <ReactBootstrap.Nav.Link>
          <Link className="text-link" to="/Books">Livros</Link>
        </ReactBootstrap.Nav.Link>
        <ReactBootstrap.Nav.Link>
          <Link className="text-link" to="/Tools">Ferramentas</Link>
        </ReactBootstrap.Nav.Link>            
      </ReactBootstrap.Navbar>
    </div>
  );
};

export default Navbarra