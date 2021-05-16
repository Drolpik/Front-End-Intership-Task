import './App.scss';
import EditIntern from './components/EditIntern/EditIntern';
import InternList from './components/InternList/InternList';
import {Switch, Route} from 'react-router-dom';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="App">
      <img className="Logo" src={logo} alt="logo" />
       <Switch>          
          <Route path="/interns/:id" exact>
            <EditIntern />
          </Route>
          <Route path="/">
            <InternList />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
