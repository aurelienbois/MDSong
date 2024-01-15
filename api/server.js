const express = require("express")
const sons = require("./sons.js")

const app = express()

const cors = require("cors")
app.use(cors())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})


app.get("/songs", (req, res) => {
  res.json(sons) // Renvoyer toutes les chansons
})

var dossier_chansons = __dirname + "/dossiers_chansons"

console.log("dossier_chansons", dossier_chansons)

app.use("/songs/", express.static(dossier_chansons)) // cela permet de servir les fichiers statiques dans le dossier chansons, par exemple http://localhost:3001/songz/alix/alix_song.mp3

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Serveur en écoute sur le port ${port}`))
