import { Routes } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import {Route} from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContexts';
import NavBar from './component/NavBar';

function App() {


  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/favorites" element = {<Favorites />} />
        </Routes>
      </main> 
    </MovieProvider>
  );
}

export default App;
