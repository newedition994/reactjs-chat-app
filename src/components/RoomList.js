import React from 'react'

class RoomList extends React.Component {
    render() {

        return (
            <div className="room-list">
                <ul>
                    <h3>Your rooms:</h3>
                    {this.props.rooms.map(room => {
                        return (
                            <li key={room.id} className="room">
                                <a href="Room"> {room.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default RoomList