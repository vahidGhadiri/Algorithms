type Matrix<T = number> = Array<Array<T>>

const testGrid: Matrix = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1],
    [1, 1, 1, 0, 1]
]

function traverseMatrix(grid: Matrix) {
    const visited = [
        [true],
        [],
        [],
        [],
        [],
    ]
    return can(grid, 0, 0, visited)
}

function can(grid: Matrix, y: number, x: number, visited: Matrix<boolean>, path = []): {result: boolean, path: Array<string>} {
    const base = grid[0][0]
    if (y === grid.length - 1 && x === grid[0].length - 1) {
        return {
            result: base === grid[grid.length - 1][grid[0].length - 1],
            path
        }
    }

    // Top
    if (grid[y - 1]?.[x] === base && !visited[y - 1]?.[x]) {
        visited[y - 1][x] = true
        path.push("top")
        if (can(grid, y - 1, x, visited, path).result) {
            return {result: true, path}
        } else {
            path.pop()
        }
    }

    // Right
    if (grid[y][x + 1] === base && !visited[y][x + 1]) {
        visited[y][x + 1] = true
        path.push("right")
        if (can(grid, y, x + 1, visited, path).result) {
            return {result: true, path}
        } else {
            path.pop()
        }
    }

    //left
    if (grid[y][x - 1] && !visited[y][x - 1]) {
        visited[y][x - 1] = true
        path.push("left")
        if (can(grid, y, x - 1, visited, path).result) {
            return {result: true, path}
        } else {
            path.pop()
        }
    }

    //bottom
    if (grid[y + 1]?.[x] === base && !visited[y + 1]?.[x]) {
        visited[y + 1][x] = true
        path.push("bottom")
        if (can(grid, y + 1, x, visited, path).result) {
            return {result: true, path}
        } else {
            path.pop()
        }
    }
    return {result: false, path}
}

console.log(traverseMatrix(testGrid))
