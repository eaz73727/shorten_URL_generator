const express = require('express')
const codeGenerator = require('../../shorten_URL_code_generator')
const URL = require('../../models/URL')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})
router.post('/', (req, res) => {
  const inputURL = req.body.URL
  const code = codeGenerator()
  URL.findOne({ origin_URL: inputURL }).lean()
    .then(data => {
      if (!data) {
        URL.create({ origin_URL: inputURL, shorten_URL_code: code })
          .then(() => { res.render('index', { inputURL, code }) })
          .catch(error => console.log(error))
      } else {
        res.render('index', { inputURL: data.origin_URL, code: data.shorten_URL_code })
      }
    })
})

router.get('/:code', (req, res) => {
  const code = req.params.code
  URL.findOne({ shorten_URL_code: code }).lean()
    .then(data => {
      if (!data) {
        res.send('render404')
      } else {
        res.redirect(data.origin_URL)
      }
    })
    .catch(error => console.log(error))
})

module.exports = router