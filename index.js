//create simple express server
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
} = require("./config/config")
console.log({
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
})
const port = process.env.PORT || 3001
const url = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
console.log({ url })
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((err) => {
    console.log("Error: ", err)
  })

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>")
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
