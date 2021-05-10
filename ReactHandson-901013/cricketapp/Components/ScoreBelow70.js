import React from 'react'

function ScoreBelow70(props) {
    //const players=props.players
    const playersBelow70=props.players.map((item)=>{
        if(item.score<=70){
            return <li>{item.name} {item.score}</li>
        }
    })
    return (
        <div>
            <ul>{playersBelow70}</ul>
           
        </div>
    )
}
export {ScoreBelow70}