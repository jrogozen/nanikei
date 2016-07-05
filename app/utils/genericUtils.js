const getRandomFromArray = (arr) => {
  let maxLength = arr.length -1

  return Math.floor(Math.random() * (maxLength - 0 + 1))
}

export const array = {
  getRandom: getRandomFromArray
}