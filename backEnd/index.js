const http = require('http') // librairie fournit un ensemble d'outils sous forme d'objet
const app = require('./app') // récupère objet app

// créer un serveur
const server = http.createServer(app)

// activer le serveur
server.listen(3210) // (num de port sur lequel ecoute)