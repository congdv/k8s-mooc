const { v4: uuidv4 } = require("uuid")

const generateId = () => {
  const id = uuidv4();
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${id}`)
}

generateId();

setInterval(generateId, 5000)