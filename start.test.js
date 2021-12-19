
const suma = (n1, n2) => {
  return parseInt(n1) + parseInte(n2)
}

test('La suma entre 1 y 2 debería ser 3 ', () => {
    expect(suma(1,2)).toBe(3)
})
