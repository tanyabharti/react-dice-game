import React ,{useState} from 'react'
import styles from './styles/App.module.css'
import {  Stack,Flex,Image,Heading,Box,Text,Button, List, ListItem } from '@chakra-ui/react'


const App = () => {
   const numbers=[1,2,3,4,5,6]; 
   const[gameStarted,setGameStarted] =useState(false);
   const[selectedNumber,setselectedNumber] =useState();
   const [diceValue,setdiceValue] = useState(1);
   const [error,setError]=useState(null);
   const [score,setScore]=useState(0);
   
   const startGameHandler = ()=>{
     if(!gameStarted){
    setGameStarted(true) ;
     } else{
    setGameStarted(false) ;
     }
   }
   const OnClickedNumber = (values) =>{
       setselectedNumber(values);
       setError(null);
   };
  //  console.log(selectedNumber);

   const genRandomNum = ()=>{
    if(selectedNumber){
     const generatedNum =Math.ceil(Math.random()*6);
     setdiceValue(generatedNum);
     
      if(selectedNumber===generatedNum){
        setScore((prev)=>prev+generatedNum);
      }else{
        setScore((prev)=>prev-2);
      }
    }
     else{
       setError("Please Select the Number ");
     }
   };
  return (
     <>
      {gameStarted ? 
        
        <>
        
        <Stack justify="center" align={"center"}  maxW="1300px" mx="auto" h="100vh">
        <Button w="150px" h="150px" margin="28px 25px" mb="0" bg="black" color="white" p="8px" alignSelf="flex-end" _hover={{ bg: "grey" }} onClick={()=> setGameStarted(false)}>Go Back</Button>
        <Heading as="h1" fontSize="6xl" mb="10px" color= {error ? "red" : "green"}> {error ? error : " Select the Number"}</Heading>
       
    
        <Flex  pb="10px">
        {numbers.map((value)=>(
          <Flex
          justify="center" 
          align="center" 
          height='50px' 
          width='50px' 
          bg={selectedNumber === value ? "green" :"black" }
          color="white" 
          fontSize="2xl"
          key={value}
          mr="4"
          borderRadius="4"
          onClick={()=>OnClickedNumber(value)}
          > {value}
          </Flex>
          ))}
          </Flex>
          <Box h="150px" w="150px" onClick={genRandomNum}>
          {" "}
          <Image src={`../images/dice${diceValue}.png`} />
         </Box>
         <Text as="p" fontSize="xl" fontWeight="medium"> Click on the dice to roll it</Text>
         <Text color ={score < 0 ? "red": "green"}fontSize="7xl" fontWeight={"bold"}>{score}</Text>
         <Text fontSize="4xl" fontWeight={"bold"}>Total Score </Text>
         <Button w="150px" h="200px" bg="black" color="white"  p="10px" _hover={{ bg: "grey" }} onClick={()=>{setScore(0)}} >Reset Score</Button>
         </Stack>
         
         <Stack maxW="900px" mx="auto" p="10px">
           <Heading as="h2" f>Game Rules :-</Heading>
           <List fontSize="medium">
             <ListItem>Select any one number</ListItem>
             <ListItem>Click the Dice Image to roll it</ListItem>
             <ListItem>Dice Number will become equal to the Selected Number </ListItem>
             <ListItem>If the number selected is equal to dice number then your score will be incremented by 1 otherwise decremented by 2</ListItem>
           </List>
         </Stack>
        
       </>

    : 
      
      <div className={styles.container}>
      <div className={styles.image}>
      <img src="../images/dices.png" alt="dice" />
      </div>
      <div className ={styles.innerContainer}>
      <h1 className={styles.heading}> The Dice Game</h1>
      <button className={styles.button} onClick={startGameHandler}>Start Game</button>
      </div>
     </div>
        
    
  
  }
     
   
  </> 
  );
}

export default App
