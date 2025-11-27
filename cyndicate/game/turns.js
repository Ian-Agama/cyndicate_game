import { gameState } from "./state.js";
import {computerMove} from "./compMovement.js";

export function switchTurn(){
  const players = gameState.players;
  const currentIndex = players.findIndex(p=> p.id === gameState.id);
  const nextPlayer = players[(currentIndex +1) % players.length];
  gameState.id = nextPlayer.id; 
  
  console.log(`${nextPlayer.name} turn `);


  if(nextPlayer.isComputer){
    setTimeout(()=>{
      computerMove(nextPlayer, gameState);
    },100)
  }
}
