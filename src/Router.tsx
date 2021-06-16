import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Books from './pages/books/Books';
import Tools from './pages/tools/Tools';
import Main from './pages/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Main}/>
      <Route exact={true} path="/Books" component={Books}/>
      <Route exact={true} path="/Tools" component={Tools}/>
    </Switch>
    </BrowserRouter>
  );
};

export default Router;
