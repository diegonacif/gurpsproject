import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Books from './pages/books/Books';
import Tools from './pages/tools/Tools';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>

          <ReactBootstrap.Navbar className="justify-content-center"fixed="top" bg="dark" variant="dark">
            <ReactBootstrap.Nav.Link><Link className="text-link" to="/">Raíz</Link></ReactBootstrap.Nav.Link>          
            <ReactBootstrap.Nav.Link><Link className="text-link" to="/Books">Livros</Link></ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link><Link className="text-link" to="/Tools">Ferramentas</Link></ReactBootstrap.Nav.Link>            
          </ReactBootstrap.Navbar>        

          <Switch>
            <Route exact path="/"component={Main} />
            <Route exact path="/Books"component={Books} />
            <Route exact path="/Tools"component={Tools} />          
          </Switch>
          
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
