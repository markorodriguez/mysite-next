import fs from 'fs'
import path from 'path'

export default function cv(_req, res) {

    const filePath = path.resolve('.', 'files/Marko_Rodriguez-CV.pdf')
    const fileBuffer = fs.readFileSync(filePath)

    res.setHeader('Content-Type', 'application/pdf')
    res.send(fileBuffer)

} 