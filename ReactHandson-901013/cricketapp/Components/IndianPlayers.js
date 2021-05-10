import React from 'react'

function IndianPlayers() {
    const t20Players=['First Player','Second Player','Third Player']
    const RanjiTrophyPlayers=['Fourth Player','Fifth Player','Sixth Player']
    const merged= [...t20Players,...RanjiTrophyPlayers]
    const map = merged.map((item)=>{
        return <li>Mr.{item}</li>
    })
    return (
        
        <div>
            <ul>{map}</ul>
        </div>
    )
}
export {IndianPlayers}