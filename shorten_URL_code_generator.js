function generatorCode() {
  const letters = 'abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789'

  let collection = ''
  for (let i = 0; i < 5; i++) {
    collection += letters[Math.floor(Math.random() * letters.length)]
  }
  return collection
}

module.exports = generatorCode