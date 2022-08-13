import fs from 'fs'
import path from 'path'

export default function downloadResume(_req, res) {

    const filePath = path.resolve('.', 'files/Marko_Rodriguez-RESUME.pdf')
    const fileBuffer = fs.readFileSync(filePath)

    res.setHeader('Content-Type', 'application/pdf')
    res.send(fileBuffer)

} 