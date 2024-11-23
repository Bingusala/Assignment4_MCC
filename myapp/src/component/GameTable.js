import React, { useEffect, useState } from 'react'
import '../assets/css/main.css'
import {animals} from '../assets/data/data.js'

const GameTable = () => {
    {/* State to store name of random animal and store game status */}
    const [animalName,setAnimalName] = useState('');
    const [gameStatus,setGameStatus] = useState("");

    {/* useEffect hook to render current random animal */}
    useEffect(() => {
        randomAnimalName()
      }, [])

      {/* function to generate random animal and store it into animal array index */}
    const randomAnimalName=(()=>{
        const rand=  Math.floor(Math.random() * 10) + 1;
        setAnimalName(animals[rand]);
        setGameStatus('');
      })

      {/* function to check if user input matches the random animal */}
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
