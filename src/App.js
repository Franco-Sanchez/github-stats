import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/favorites" component={Favorites} />
          <Route path="/search" component={Search} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
