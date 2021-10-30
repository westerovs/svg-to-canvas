const canvas = document.getElementById('canvas')
const ctx = canvas.getContext(`2d`)
const canvasWidth = canvas.offsetWidth
const canvasHeight = canvas.offsetHeight
const svgPath = document.getElementById('my-path').getAttribute('d')

ctx.strokeStyle = 'red'
ctx.lineWidth = 2

// получить координаты D
const commands = svgPath.split(/(?=[LMC])/) // 43 length

// получить массив
const pointsArrays = commands.map(directPath => {
    const pointsArray = directPath.slice(1, directPath.length).split(' ')
    let pairsArray = []

    for (let i = 0; i < pointsArray.length; i += 2) {
        pairsArray.push([+pointsArray[i], +pointsArray[i + 1]])
    }

    return pairsArray
})

// ctx.beginPath()

pointsArrays.forEach((point, index) => {
    setTimeout(() => {
        if (commands[index].indexOf('M') === 0) {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight)
            ctx.moveTo(point[0][0], point[0][1])
            ctx.stroke()
        } else if (commands[index].indexOf('C') === 0) {
            ctx.bezierCurveTo(
              point[0][0], // Координата первой контрольной точки по оси x.
              point[0][1], // Координата первой контрольной точки по оси y.
              point[1][0], // Координата второй контрольной точки по оси x.
              point[1][1], // Координата второй контрольной точки по оси y.
              point[2][0], // Координата конечной точки по оси x.
              point[2][1]  // Координата конечной точки по оси y.
            )
        }
        
        ctx.clearRect(0, 0, canvasWidth, canvasHeight)
        ctx.stroke()
    }, 100 * index)
})




