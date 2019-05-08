const fs = require('fs')

const getData = path => {
  return JSON.parse(fs.readFileSync(path));
}

const setData = (path, data ) => {
  fs.writeFileSync(path, JSON.stringify(data, null, 2))
}

module.exports = {
  getData,
  setData
}
