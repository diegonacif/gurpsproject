import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Router from './Router'
import Navbarra from './pages/navbar'


function App() {
  return (
    <div className="App">
      <header className="App-header">      
        <BrowserRouter>
          <Navbarra />         
          <Router />          
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
