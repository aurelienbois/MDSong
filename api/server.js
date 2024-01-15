const express = require("express")
const sons = require("./sons.js")

const app = express()

app.get("/songs", (req, res) => {
  res.json(sons) // Renvoyer toutes les chansons
})

var dossier_chansons = __dirname + "/dossiers_chansons"

console.log("dossier_chansons", dossier_chansons)

app.use("/songs/", express.static(dossier_chansons)) // cela permet de servir les fichiers statiques dans le dossier chansons, par exemple http://localhost:3001/songz/alix/alix_song.mp3

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Serveur en écoute sur le port ${port}`))
