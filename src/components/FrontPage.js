import React ,{useState} from 'react'
import styles from './styles/App.module.css'


const  FrontPage = () => {
  const[gameStarted,setGameStarted] =useState(false);

   const startGameHandler = ()=>{
     if(!gameStarted){
    setGameStarted(true) ;
     } else{
    setGameStarted(false) ;
     }
   }
  return (
   <div className={styles.container}>
       <div className={styles.image}>
      <img src="../images/dices.png" alt="dice" />
      </div>
      <div className ={styles.innerContainer}>
      <h1 className={styles.heading}> The Dice Game</h1>
      <button className={styles.button} onClick={startGameHandler}>Start Game</button>
      </div>
    </div>
  )
}

export default FrontPage
