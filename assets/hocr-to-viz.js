const fs = require('fs')
const cheerio = require('cheerio')

const filename = process.argv[2]

if (!filename) {
  process.exit(1)
}

const hocr = fs.readFileSync(filename, 'utf8')
const $ = cheerio.load(hocr)

function makeRect () {

}

function makeText () {

}

function makeGroup (elements) {

}

const lines = $('.ocr_line').map((index, element) => {
  const text = $(element).text()
  const title = $(element).attr('title')

  console.log(title)
  // <g>
    // <rect x="0" y="0" width="100" height="100" fill="red"></rect>
    // <text x="0" y="50" font-family="Verdana" font-size="35" fill="blue">Hello</text>
  // </g>

}).get().join(' ')

