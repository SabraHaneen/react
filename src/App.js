import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Productes from './components/productes/Productes.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <div className='container'>
    <Navbar/>
<Productes/>
<Footer/>
    </div>
  


  );
}

export default App;
