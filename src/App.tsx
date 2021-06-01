import React from 'react';
import Router from './Router'
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Books from './pages/books/Books'
import Tools from './pages/tools/Tools'
import Main from './pages/Main/Main'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Raíz</Link>
            </li>
            <li>
              <Link to="/Books">Livros</Link>
            </li>
            <li>
              <Link to="/Tools">Ferramentis</Link>
            </li>
          </ul>
        </nav>
        </div>
        <Switch>
          <Route exact path="/"component={Main} />
          <Route exact path="/Books"component={Books} />
          <Route exact path="/Tools"component={Tools} />
        <Books />
        </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
