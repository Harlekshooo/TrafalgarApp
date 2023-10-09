import './App.css';
import Home from "./Pages/Home/Home"
import Contact from "./Pages/Contacts/Contact"
import {Switch, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
