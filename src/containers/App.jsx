import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../assets/styles/containers/App.scss'
import Layout from '../containers/Layout'
import Error404 from '../components/Error404';
import Login from '../components/Login';
import RollUpUser from '../components/RollUpUser';
import RollUpService from '../components/RollUpService';
import CreateEvent from '../components/CreateEvent';
import EventList from '../components/EventList';
import DetailsEvent from '../components/DetailsEvent';
import Index from '../components/Index';

function App() {
  const initialState = [
    {
      'id': 1,
      'image': '../assets/imgs/cerveza.png',
      'title': 'Carne de res',
      'price': 10234,
      'categorie': 'Carnes'
    },
  ];

  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/Itil-Support/" component={Index} />
            <Route exact path="/login/" component={Login} />
            <Route exact path="/new/user" component={RollUpUser} />
            <Route exact path="/new/service" component={RollUpService} />
            <Route exact path="/new/issue" component={CreateEvent} />
            <Route exact path="/issues" component={EventList} />
            <Route exact path="/issues/details" component={DetailsEvent} />
            <Route component={Error404} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;