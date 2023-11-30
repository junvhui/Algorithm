/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
 
var countPoints = function (points, queries) {
  var arr = []
  for (let i = 0; i < queries.length; i++) {
    let count = 0
    for (let j = 0; j < points.length; j++) {
      let x = Math.pow(points[j][0] - queries[i][0], 2)
      let y = Math.pow(points[j][1] - queries[i][1], 2)
      let radius = Math.pow(queries[i][2], 2)
      if (x + y <= radius) {
        count++
      }
    }
    arr.push(count)
  }
  return arr
}