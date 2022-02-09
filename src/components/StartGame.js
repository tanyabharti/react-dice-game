import React from 'react'
import {  Stack,Flex,Image,Heading,Box,Text,Button, List, ListItem } from '@chakra-ui/react'

const StartGame = () => {
 const numbers=[1,2,3,4,5,6];
  return (
      <>
        <Stack justify="center" align="center">
        <Heading>Select the Number </Heading>
        <Flex>
        {numbers.map((value)=>(
          <Flex 
          justify="center" 
          align="center" 
          height='50px' 
          width='50px' 
          bg="black" 
          color="white" 
          fontSize="2xl"
          key={value}
          mr="4"
          borderRadius="4"
          > {value}
          </Flex>
          ))}
          </Flex>
          <Box>
          {" "}
          <Image src="../images/dice1.png" />
         </Box>
         <Text as="p"> Click on dice to roll</Text>
         <Text>0</Text>
         <Text>Total Score :</Text>
         <Button>Reset Score</Button>
         
         </Stack>
         
         <Stack>
           <Heading as="h2">Game Rules :-</Heading>
           <List>
             <ListItem>Select any one number</ListItem>
             <ListItem>Click the Dice Image to roll it</ListItem>
             <ListItem>Dice Number will become equal to the Selected Number </ListItem>
             <ListItem>Select any one number</ListItem>
           </List>
         </Stack>
       </>

  
  )
}

export default StartGame
