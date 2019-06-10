import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import Message from './Message'

const DUMMY_DATA = [
    {
        senderId: 'nancydrw89',
        text: 'Hey, how was your day?'
    },
    {
        senderId: 'marrkymark78',
        text: 'the absolute worse. Hbu?'
    },
    {
        senderId: 'nancydrw89',
        text: 'thats too bad my was good actually'
    }
]

class MessageList extends Component {
    render() {
        return (
            <div classname="message-list">
                {DUMMY_DATA.map((message, index) => {
                    return (
                        <div>{message.text}</div>
                    )
                })}
            </div>
        )
    }
}

export default MessageList;