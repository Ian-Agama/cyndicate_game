import { nodes } from "../graph/nodes.js";
import { movePlayer } from "./movement.js";
import { checkWin } from "./logic.js";
import { drawBoard } from "../ui/canvas.js";
import { switchTurn } from "./turns.js";
import { edges } from "../graph/edges.js";

export function computerMove(computer, gameState) {

  const possibleMoves = getAllValidMoves(computer, gameState);
  if (possibleMoves.length === 0) {
    console.log("Computer has no moves.");
    switchTurn();
    return;
  }

  const bestMove = chooseBestMove(possibleMoves, gameState, computer);

  movePlayer(computer, computer.position, bestMove, gameState);
  //drawBoard();

  if (checkWin(computer, gameState)) {
    alert(`${computer.name} has won!`);
  } else {
    switchTurn();
  }
}

function getAllValidMoves(player, gameState) {
  const occupied = gameState.players.map(p => p.position);

  const neighbors = edges
    .filter(e => e.from === player.position || e.to === player.position)
    .map(e => (e.from === player.position ? e.to : e.from));

  return neighbors.filter(n => !occupied.includes(n));
}

function chooseBestMove(moves, gameState, computer) {
  const human = gameState.players.find(p => !p.isComputer);
  const humanNode = nodes.find(n => n.id === human.position);

  return moves
    .map(moveNode => {
      const movePos = nodes.find(n => n.id === moveNode);
      const distance = Math.hypot(movePos.x - humanNode.x, movePos.y - humanNode.y);
      return { moveNode, score: -distance }; // smaller distance = higher score
    })
    .sort((a, b) => b.score - a.score)[0].moveNode;
}
