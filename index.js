const Tesseract = require("tesseract.js");

(async () => {
    const { data: { text } } = await Tesseract.recognize('https://httpstatusdogs.com/img/200.jpg', 'eng', { logger: m => console.log(m) })
    console.log(`recognized ${text}`)
})()
