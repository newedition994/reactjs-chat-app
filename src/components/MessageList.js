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
            <div className="message-list">
                {DUMMY_DATA.map((message, index) => {
                    return (
                        <div key={index} className="message">
                            <div className="message-username">{message.senderId}</div>
                            <div className="message-text">{message.text}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MessageList;