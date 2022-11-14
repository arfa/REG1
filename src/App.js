
import './App.css';
import Navbar from './components/Navbar';
import Acceuil from './components/Acceuil';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
import Footer from './components/Footer';

function App() {
  return (
  <div className=''>
    <div className="  sticky top-0"><Navbar/></div>
    <div className="">
       <Acceuil/>
       <Services/>
       <ServiceDetails/>
       <Footer/>
        </div>
    
  </div>
    
  );
}

export default App;
