import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Followers from './pages/Followers';
import Followings from './pages/Followings';
import Repos from './pages/Repos';
import { Global, css } from '@emotion/react';

function App() {
  return (
    <Router>
      <div className="App">
        <Global 
          styles={css`
            @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap');

            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: Source Code Pro;
              font-style: normal;
              font-weight: normal;
            }

            body {
              max-width: 1440px;
              margin: 0 auto;
            }

            li {
              list-style: none;
            }
          `}  
        />
        <Switch>
          <Route path="/users/:username/repos" component={Repos} />
          <Route path="/users/:username/followings" component={Followings} />
          <Route path="/users/:username/followers" component={Followers} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/search" component={Search} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
