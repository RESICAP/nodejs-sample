const path = require('path')
const express = require('express')
const cors = require('cors')
const bp = require('body-parser')

const app = express()
app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded())
app.use(express.static(path.join(__dirname, '..', 'client')))

app.get('/', (req, res) => {
	
})

app.listen(8080, e => {
	if(e){
		console.error(e)
		process.exit(1)
	}

	console.log('Resicap DevOps Sample Site listening on port 8080')
})