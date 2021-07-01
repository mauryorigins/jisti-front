import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Dashboard from './dashboard';
import Login from './login';
import Services from './services';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {/* System Routes */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/services" component={Services} />
        {/* Default Route */}
        <Route render={() => <Redirect to="/login" />} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
