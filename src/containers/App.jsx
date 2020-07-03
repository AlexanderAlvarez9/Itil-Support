import React from 'react';
import '../assets/styles/containers/App.scss'
import Layout from '../containers/Layout'
import HelloWorld from '../components/HelloWorld';
import Login from '../components/Login';
import RollUpUser from '../components/RollUpUser';
import RollUpService from '../components/RollUpService';
import CreateEvent from '../components/CreateEvent';
import EventList from '../components/EventList';
import DetailsEvent from '../components/DetailsEvent';

function App() {
  const initialState = [
    {
      'id': 1,
      'image': '../assets/imgs/cerveza.png',
      'title': 'Carne de res',
      'price': 10234,
      'categorie': 'Carnes'
    },
    {
      'id': 2,
      'image': '../assets/imgs/img.png',
      'title': 'Zanahoria',
      'price': 10678,
      'categorie': 'Verdura'
    },
    {
      'id': 4,
      'image': '../assets/imgs/img.png',
      'title': 'Zapato',
      'price': 3452,
      'categorie': 'Chancla'
    },
    {
      'id': 3,
      'image': '../assets/imgs/img.png',
      'title': 'Leche de cabra',
      'price': 5678,
      'categorie': 'lacteos'
    }
  ];

  return (
    <React.Fragment>
      <Layout>
        <DetailsEvent />
      </Layout>
    </React.Fragment>
  )
}

export default App;