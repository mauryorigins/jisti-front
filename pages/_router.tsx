import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './dashboard';
import Services from './services';

import Home from './index';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/services" component={Services} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
