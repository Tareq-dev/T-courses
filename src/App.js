
import './App.css';
import Nav from './Components/Nav/Nav';
import Courses from './Components/Courses/Courses';
import Card from './Components/Card/Card';
import Slide from './Components/Slide/Slide';
import Learn from './Components/Learn/Learn';
import From from './Components/Form/From';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Slide />
      <br />
      <Card />
      <br />
      <Learn />
      <br />
      <hr></hr>
      <Cart />
      <hr></hr>
      <br />
      
      <Footer />
    </div>
  );
}

export default App;
