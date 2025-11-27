import { nodes } from "../graph/nodes.js";
import { gameState } from "../game/state.js";
import { movePlayer } from "../game/movement.js";
import { drawBoard } from "./canvas.js";
import { checkWin} from "../game/logic.js";
import {compState} from "../game/comp.js";
//import { switchTurn } from "../game/turns.js";  
const canvas = document.getElementById("gameCanvas");
let selecectedPlayer = null;


canvas.addEventListener("click", event => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Find clicked node
  const clickedNode = nodes.find(
    n => Math.hypot(mouseX - n.x, mouseY - n.y) < 20
  );

  if (!clickedNode) return;
// clicked player
  const clickedPlayer = gameState.players.find( 
  p => p.position === clickedNode.id);

  if (clickedPlayer){
    selecectedPlayer = clickedPlayer;
    gameState.id = clickedPlayer.id;
    console.log(`${clickedPlayer.name} selected...`);
    return;

  }
//checking uf selected and attempt to move 
  if(selecectedPlayer){// && !selecectedPlayer.isComputer){
    const moved = movePlayer(
      selecectedPlayer,
      selecectedPlayer.position,
      clickedNode.id,
      gameState
    );
   //check if the click is done 
    //if(click is true )
    //place that and return th 789e switchTurn(0 )
    //
  
    if(moved){
      console.log(`${selecectedPlayer.name} moved to node ${clickedNode.id}`);
      drawBoard();

      if(checkWin(selecectedPlayer, gameState)){
        console.log(`${selecectedPlayer.name} has won`)
        return;;
      
      }
      selecectedPlayer = null;
        //drawBoard();
        
        //switchTurn();
      
    }
  }
});

