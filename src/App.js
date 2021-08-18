
import './App.css';
import Nav from './Components/Nav/Nav';
import Courses from './Components/Courses/Courses';
import Card from './Components/Card/Card';
import Slide from './Components/Slide/Slide';
import Learn from './Components/Learn/Learn';
import From from './Components/Form/From';

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
      <From />
      <br />
    </div>
  );
}

export default App;
