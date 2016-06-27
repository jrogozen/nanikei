import csvjson from 'csvjson'

export const parseCsv = function(file) {
  const csvArray = csvjson.toArray(file).output
  let headers = csvArray.shift()
  let data = csvArray

  return {
    headers,
    data
  }
}