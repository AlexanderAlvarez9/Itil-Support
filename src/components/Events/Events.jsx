import React, { useState, useEffect } from 'react';
import CreateEvent from '../CreateEvent';
import './Events.scss'
import { db } from '../../firebase';
import { toast } from 'react-toastify';

const Events = () => {

  const [events, setEvents] = useState([]);
  const [currentId, setCurrentId] = useState('');

  const addOrEditEvent = async (event) => {
    try {
      if (currentId === '') {
        await db.collection('events').doc().set(event)
        toast('Nuevo Evento Agregado', {
          type: 'success',
          autoClose: 2000
        });
      } else {
        await db.collection('events').doc(currentId).update(event)
        toast('Evento Actualizado', {
          type: 'info',
          autoClose: 2000
        });
      }
      setCurrentId('')
    } catch (error) {
      console.error(error);
    }
    console.log(event);
  }

  const handleDelete = async (id) => {
    if (window.confirm('Esta seguro?')) {
      toast('Evento Borrado', {
        type: 'error',
        autoClose: 2000
      });
      await db.collection('events').doc(id).delete();
    }
  }

  const getEvents = () => {
    db.collection('events').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach(item => {
        docs.push({ ...item.data(), id: item.id })
      })
      setEvents(docs);
    });
  }

  useEffect(() => {
    getEvents()
  }, []);

  return (
    <React.Fragment>
      <CreateEvent {...{ addOrEditEvent, currentId, events }} />

      <div className="Events">
        <h2>Mis Casos Creados</h2>

        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Caso</th>
              <th>Categoria</th>
              <th>SubCategoria</th>
              <th>Descripcion</th>
              <th>Editar</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id}>
                <th>{event.id.slice(-4)}</th>
                <th>{event.eventName}</th>
                <td>{event.eventType}</td>
                <td>{event.eventSub}</td>
                <td>{event.eventDesc}</td>
                <th><i className="material-icons text-danger" onClick={() => {
                  setCurrentId(event.id)
                }}>create</i></th>
                <th><i className="material-icons text-danger" onClick={() => {
                  handleDelete(event.id)
                }}>close</i></th>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </React.Fragment>
  )
}
export default Events;