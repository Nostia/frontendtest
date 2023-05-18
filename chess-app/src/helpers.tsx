export function generateSquaresIds(): string[] {
  const boardSize = 8
  const squares: string[] = []

  for (let row = boardSize; row > 0; row--) {
    for (let col = 1; col <= boardSize; col++) {
      const colChar = String.fromCharCode('a'.charCodeAt(0) + col - 1)
      squares.push(`${colChar}${row}`)
    }
  }

  return squares
}
