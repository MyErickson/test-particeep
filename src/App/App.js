/* eslint-disable react/react-in-jsx-scope */
import { Route, Switch } from 'react-router-dom';
import ContainerMovie   from './containers/Movie'
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ContainerMovie} />
        <Route render={() => <h1>404 Not found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
