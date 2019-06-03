import React, { Component } from 'react';
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <RoomList />
        <MessageList />
        <NewRoomForm />
        <SendMessageForm />

      </div>
    )
  }
}
export default App;
