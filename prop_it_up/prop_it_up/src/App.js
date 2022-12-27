import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <>
    <div className="App">
      <PersonCard lastName={"Doe"} firstName={"Jane"} age={45} hairColor={"Black"}/>
    </div>
    <div className="App">
      <PersonCard lastName={"Smith"} firstName={"Jon"} age={88} hairColor={"Brown"}/>
    </div>
    <div className="App">
      <PersonCard lastName={"Fillmore"} firstName={"Millard"} age={50} hairColor={"Brown"}/>
    </div>
    <div className="App">
      <PersonCard lastName={"Smith"} firstName={"Maria"} age={62} hairColor={"Brown"}/>
    </div>
    </>
  );
}

export default App;
