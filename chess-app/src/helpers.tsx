export function generateSquaresIds(): string[] {
  const boardSize = 8
  const squares: string[] = []
  for (let row = boardSize; row > 0; row--) {
    for (let col = 1; col <= boardSize; col++) {
      squares.push(`${String.fromCharCode(96 + col)}${row}`)
    }
  }
  return squares
}
