import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting'
import Welcome from './Welcome';
import Counter_Usestate from './Counter_Usestate';
import LoginStatus from './LoginStatus';
import Mapping_List from './Mapping_List';
import LiveForm from './LiveForm';
import UseEffect_Basic from './UseEffect_Basic';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting/>
        <Welcome name="Akhila"/>
        <Counter_Usestate/>
        <LoginStatus/>
        <Mapping_List/>
        <LiveForm/>
        <UseEffect_Basic/>
      </header>
    </div>
  );
}

export default App;
