import express from "express"
import environment from "node-env-file"

// Route imports
import ImageRoutes from "./routes/image/image"

let env = environment(".env")
let app = express()

// Routes
ImageRoutes(app)

// Default route
app.get("/", function (req, res) {
    res.redirect("https://www.custocat.com")
})

app.listen(env.PORT, env.HOST)
console.log("Server running on " + env.HOST + ":" + env.PORT + ". Use ctrl+c to stop.")