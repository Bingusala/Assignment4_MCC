import React, { useEffect, useState } from 'react'
import '../assets/css/main.css'
import {animals} from '../assets/data/data.js'

const GameTable = () => {
    
    const [animalName,setAnimalName] = useState('');
    const [gameStatus,setGameStatus] = useState("");

    
    

      
    

      
    const handleClick=((e)=>{
        if(e === animalName.name){
            setGameStatus('WIN')
            setTimeout(() => {
                randomAnimalName()
            }, 2000);
          
        }else{
            setGameStatus('LOSS')
        }
    })
  return (
    <>
    <div className='container'>
         {/* Table for the game  */}
        <table>
            {/* Table header */}
            <thead>
                <tr >
                    <th colSpan={3}>ANIMAL MATCHING GAME</th>
                </tr>
                <tr >
                    <th>Result</th>
                    <th>Animal Name</th>
                    <th>Selecte the animal</th>
                </tr>
            </thead>
            {/* Table body */}
            <tbody>
                <tr>
                    {/* Display game status */}
                <td className='names' style={gameStatus==='WIN'? {color:'#67de49'}:{color:'red'} }>{gameStatus}</td>
                {/* Display random animal */}
                <td>{animalName.name}</td>
                {/* Image for user to select animal */}
                    <td><div>
                         <div className='imgtags'>{animals.map(animal=>
                        <div  onClick={()=>handleClick(animal.name)}>
                            <img src={require(`../assets/images/${animal.img}`)} alt='img' className='imgCard' />
                            </div>
                        
                    )}</div></div></td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default GameTable
