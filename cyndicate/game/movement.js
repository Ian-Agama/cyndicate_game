/*import { edges } from "../graph/edges.js";
import { nodes } from "../graph/nodes.js";

/**
 * Attempts to move a player along an edge from one node to another.
 * Checks edge conditions dynamically instead of using hard-coded paths.
 */

/*export function movePlayer(player, fromNodeId, toNodeId, gameState) {
  const edge = edges.find(
    e =>
      (e.start === fromNodeId && e.end === toNodeId) ||
      (e.start === toNodeId && e.end === fromNodeId)
  );

  if (!edge) {
    console.log("No connecting edge found.");
    return false;
  }

  // Perform all 4 checks
  if (!isPathClear(edge, gameState)) return false;
  //if (!ruleAllows(edge, gameState)) return false;
  if (!objectFree(edge, gameState)) return false;
 

  // ✅ Movement is valid — update player position
  player.position = toNodeId;
  console.log(`Player moved to Node ${toNodeId}`);
  return true;
}

/* -------------------------------------------------------------
   1️⃣ Path / Position Check
------------------------------------------------------------- */
/*function isPathClear(edge, gameState) {
  const obstacle = gameState.players.find(
    o => o.location && o.isComputer === edge.id
  );
  if (obstacle) {
    console.log("Movement blocked: obstacle on edge.");
    return false;
  }
  return true;
}



/* -------------------------------------------------------------
   3️⃣ Object-Based Check
------------------------------------------------------------- */
/*function objectFree(edge, gameState) {
  const occupied = gameState.players.find(
    p => p.position === edge.end && p.faction !== gameState.activeFaction
  );
  if (occupied) {
    console.log("Movement blocked: destination occupied by hostile player.");
    return false;
  }
  return true;
}


*/

import { edges } from "../graph/edges.js";
import { nodes } from "../graph/nodes.js";
import { gameState } from "./state.js"


//is moves the player if the move is valid

export function movePlayer(player, fromNode , toNode , gameState){
  const edge = edges.find(
    e => 
    (e.start === fromNode  && e.end === toNode) ||
    (e.start === toNode && e.end === fromNode)
  );
  if(!edge){
    console.log(" no connecting edge found.");
    return false;
  }
  if(isvalidMove(fromNode, toNode, gameState)){
    player.position = toNode; 
    console.log(`${player.name }is shown`)
    console.log(`played to Node ${toNode}`)
    return true; 
  }
  return false; 
  //player.position = toNode;
  //console.log(`u`);


}


export function compValid(){
  const comps = gameState.players.find( comp => comp.position === comp.isComputer);

  return 

}

function getNeighbors(nodeId){
  return edges.filter(edge => edge.from === nodeId || edge.to === nodeId)
  .map(edge => (edge.from === nodeId ? edge.to : edge.from));
}

function isNodeFree(nodeId, gameState){
  return !gameState.players.some(player => player.position ===  nodeId);
}

//
function isvalidMove( fromNode, toNode, gameState){
  const neighbours = getNeighbors(fromNode);
  const free = isNodeFree(toNode, gameState);
  const isConnected = neighbours.includes(toNode);
   
  return isConnected && free; 
}
