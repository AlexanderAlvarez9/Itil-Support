import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../assets/styles/containers/App.scss'
import Layout from '../containers/Layout'
import Error404 from '../components/Error404';
import Login from '../components/Login';
import EventList from '../components/EventList';
import DetailsEvent from '../components/DetailsEvent';
import Index from '../components/Index';
import Users from '../components/Users/Users';
import Services from '../components/Services/Services';
import Events from '../components/Events/Events';
import { useFirebaseApp } from 'reactfire';
import Technicians from '../components/Technicians/Technicians';
import AdminEvents from '../components/AdminEvents/AdminEvents';

const App = () => {
  const firebase = useFirebaseApp();
  // console.log(firebase);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/my-events" component={Events} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/technicians" component={Technicians} />
          <Route exact path="/new-service" component={Services} />
          <Route exact path="/new-issue" component={Events} />
          <Route exact path="/events" component={AdminEvents} />
          <Route exact path="/issues-details" component={DetailsEvent} />
          <Route component={Index} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;