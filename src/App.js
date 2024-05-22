import './';
import './skeleton.css';
import './App.css';
import EventsBoard from './components/EventsBoard';
import Form from './components/Form';
import EventParticipants from './components/EventParticipants';
function App() {
  return (
    <div className='App container'>
      <EventsBoard />
      <Form />
      <EventParticipants />
    </div>
  );
}

export default App;
