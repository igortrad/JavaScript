let valor
console.log(valor)

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toSrting()) erro

const produto = {}
console.log(produto.preco)
console.log(produto)


produto.preco = 3.50
console.log(produto)


produto.preco = undefined //evite atribuir underfined 
console.log(!!produto.preco)