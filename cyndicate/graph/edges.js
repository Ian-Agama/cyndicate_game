export const edges = [
  // 🔹 Top row
  { id: 1, start: 1, end: 2, type: "border" },
  { id: 2, start: 2, end: 3, type: "border" },

  // 🔹 Middle row
  { id: 3, start: 4, end: 5, type: "border" },
  { id: 4, start: 5, end: 6, type: "border" },

  // 🔹 Bottom row
  { id: 5, start: 7, end: 8, type: "border" },
  { id: 6, start: 8, end: 9, type: "border" },

  // 🔹 Left column
  { id: 7, start: 1, end: 4, type: "border" },
  { id: 8, start: 4, end: 7, type: "border" },

  // 🔹 Middle column
  { id: 9, start: 2, end: 5, type: "cross" },
  { id: 10, start: 5, end: 8, type: "cross" },

  // 🔹 Right column
  { id: 11, start: 3, end: 6, type: "border" },
  { id: 12, start: 6, end: 9, type: "border" },

  // 🔹 Diagonals (split into steps)
  { id: 13, start: 1, end: 5, type: "diagonal" },
  { id: 14, start: 5, end: 9, type: "diagonal" },
  { id: 15, start: 7, end: 5, type: "diagonal" },
  { id: 16, start: 5, end: 3, type: "diagonal" }
];
