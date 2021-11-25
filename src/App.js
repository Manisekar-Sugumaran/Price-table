import './App.css';
import Card from './Components/Card';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Stuff from './Components/Stuff';


function App() {
  return (
    <div className="App">
   <Navbar />
   <Content />
   <Card />
   <Stuff />
   <Footer />
    </div>
  );
}

export default App;
