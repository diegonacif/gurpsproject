import Router from './Router';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Books from './pages/books/Books';
import Tools from './pages/tools/Tools';
import Main from './pages/Main/Main';
import {Dropdown, DropdownButton, ButtonGroup} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        {/* Dropdown Menu */}
        <Dropdown>

        <DropdownButton title="Navegador">
          <Dropdown.Item as="button"><Link to="/">Raíz</Link></Dropdown.Item>
          <Dropdown.Item as="button"><Link to="/Books">Livros</Link></Dropdown.Item>
          <Dropdown.Item as="button"><Link to="/Tools">Ferramentis</Link></Dropdown.Item>
        </DropdownButton>       
          
        </Dropdown>

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
