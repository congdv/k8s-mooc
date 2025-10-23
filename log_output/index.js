import { v4 as uuidv4 } from "uuid";

const generateId = () => {
  const id = uuidv4();
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${id}`)
}

generateId();

setInterval(generateId, 5000)