import React from 'react'

import { useState } from 'react'

export default ({handleAdd,add,newPlayer}) => {

    
console.log(newPlayer)

   
  return (
        <div class="input">
            <input type="text" className='player' placeholder="ENTER A PLAYER NAME" onChange={handleAdd}></input>
            <button class="btn playerAdd" onClick={() =>{
              add(newPlayer)}
            }>Add player</button>
        </div>
  )
}
