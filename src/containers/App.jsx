import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../assets/styles/containers/App.scss'
import Layout from '../containers/Layout'
import Error404 from '../components/Error404';
import Login from '../components/Login';
import CreateEvent from '../components/CreateEvent';
import EventList from '../components/EventList';
import DetailsEvent from '../components/DetailsEvent';
import Index from '../components/Index';
import Users from '../components/Users/Users';
import Services from '../components/Services/Services';
import Events from '../components/Events/Events';

const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/Itil-Support" component={Index} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/my-events" component={Events} /> */}
          <Route exact path="/new-user" component={Users} />
          <Route exact path="/new-service" component={Services} />
          <Route exact path="/new-issue" component={Events} />
          <Route exact path="/issues" component={EventList} />
          <Route exact path="/issues-details" component={DetailsEvent} />
          <Route component={Index} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;