import React from 'react'

 function ListofPlayers(props) {
    const listOfPlayers= props.players.map((item)=>
    {
        return <li>{item.name} {item.score}</li>
    })
    return (
        <div>
            <ul>{listOfPlayers}</ul>
            
        </div>
    )
}
export {ListofPlayers}