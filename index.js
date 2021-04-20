function npmDemo (argument) {
  const name = 'finit'
  const f1 = function f (arg) { console.log(arg) }
  return {
    name: name,
    f1: f1
  }
}
module.exports = npmDemo()
