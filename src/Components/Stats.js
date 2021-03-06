import React from 'react'

export default ({players}) => {

    const totalPlayers= players.length
    const totalScore= players.reduce( (total,player)=>{
        return total + player.score
    },0)

    
  return (
    <div class="score">
            <p>Total players:{totalPlayers}</p>
            <p>Total points: {totalScore}</p>
        </div>

  )
}
