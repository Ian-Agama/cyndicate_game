//import{gameState} from "./state.js"
import {nodes} from "../graph/nodes.js";
//const pl1 = gameState.find(m => m.id == 1);
//const pl2 = gameState.find(m => m.id == 2);
//const pl3 = gameState.find(m => m.id == 3);
const collineality = (pl1 , pl2 , pl3 ) =>{

  return (pl1.y - pl2.y) * (pl3.x-pl2.x) === (pl3.y - pl2.y) * (pl2.x - pl1.x);

}

export function checkWin(player, gameState){
  const pNodes = gameState.players.filter(p => p.id == player.id)
  .map(p => nodes.find(n=> n.id === p.position));
  if(pNodes.length < 3 ) {
    return false; 
  }

  for (let i = 0; i < pNodes.length - 2; i++) {
    for (let j = i + 1; j < pNodes.length - 1; j++) {
      for (let k = j + 1; k < pNodes.length; k++) {
          if(collineality(pNodes[i],pNodes[j],pNodes[k])){
            console.log(`Player ${player.faction} wins!`)
            return true;
         }
      }
    }
  }
  return false;
}