import {compState } from "./comp.js"
export const gameState = {
  phase: "peace", // or "combat"
  unlocks: [], // which locked edges are open
  events: [],
  players: [
    { id: 1, name: "Player 1", faction: "alpha", position: 1, isComputer: false },
    { id: 2, name: "Player 2", faction: "alpha", position: 2,isComputer: false },
    { id: 3, name: "Player 3", faction: "alpha", position: 3 ,isComputer: false},

    { id: 4, name: "Comp 1", faction: "beta", position: 7 ,isComputer: true },
    { id: 5, name: "Comp 2", faction: "beta", position: 8 ,isComputer: true },
    { id: 6, name: "Comp 3", faction: "beta", position: 9 ,isComputer: true }
  ],
  activeFaction: "alpha",
  activePlayerId: 1

  
};

