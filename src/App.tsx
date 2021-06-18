import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Navbarra from './pages/navbar'
import Router from './Router'


function App() {
  return (
    <div className="App">
      <header className="App-header">      
        <BrowserRouter>
        <Router />
        <Navbarra />
        </BrowserRouter>     
      </header>
    </div>
  );
}

export default App;
