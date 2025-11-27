import { nodes } from "../graph/nodes.js";
import { edges } from "../graph/edges.js";
import { gameState } from "../game/state.js"
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

export function drawBoard() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw edges (lines)
  edges.forEach(edge => {
    const start = nodes.find(n => n.id === edge.start);
    const end = nodes.find(n => n.id === edge.end);

    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "gray";
    ctx.stroke();
  });

  // Draw nodes (intersection points)
  nodes.forEach(node => {
    ctx.beginPath();
    ctx.arc(node.x, node.y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "lightblue";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
  });

  // Draw players
  gameState.players.forEach(player => {
    const node = find(n => n.id === player.position);
    ctx.beginPath();
    ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
  });
  /*
  //Draw computer players
  compState.players.forEach(element => {
    const nd = nodes.find(n => n.id === element.position);
     ctx.beginPath();
    ctx.arc(nd.x, nd.y, 8, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill(); 
    
  });
  */
}

