import {Route, Switch} from 'react-router-dom'
import Books from './pages/books/Books';
import Tools from './pages/tools/Tools';
import Main from './pages/Main/Main';

const Router = () => {
  return (
    
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/Books" component={Books}/>
      <Route path="/Tools" component={Tools}/>
    </Switch>
    
  );
};

export default Router;
