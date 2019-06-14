import React from 'react';
import Chatkit from '@pusher/chatkit'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'
import './App.css';

import { tokenUrl, instanceLocator } from './config'

class App extends React.Component {

  componentDidMount() {
    const ChatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'nancydrw89',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })

    ChatManager.connect()
      .then(currentUser => {
        currentUser.subscribeToRoom({
          roomId: 19887298,
          hooks: {
            onNewMessage: message => {
              console.log('message.text', message.text);
            }
          }
        })
      })
  }

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
