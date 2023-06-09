const axios = require('axios')
const cheerio = require('cheerio')

const copid = async () => {
const res = await axios.get(`https://www.worldometers.info/coronavirus/`) 
const $ = cheerio.load(res.data)
hasil = []
a = $('div#maincounter-wrap')
kasus = $(a).find('div > span').eq(0).text()
kematian = $(a).find('div > span').eq(1).text() 
sembuh = $(a).find('div > span').eq(2).text() 
hasil.push({ kasus, kematian, sembuh}) 
return hasil
}

const covid = async (query) => {
    const res = await axios.get(`https://www.worldometers.info/coronavirus/country/${query}/`) 
    const $ = cheerio.load(res.data)
    hasil = []
    a = $('div#maincounter-wrap')
    kasus = $(a).find('div > span').eq(0).text()
    kematian = $(a).find('div > span').eq(1).text() 
    sembuh = $(a).find('div > span').eq(2).text() 
    hasil.push({ kasus, kematian, sembuh}) 
    return hasil
    }


module.exports = { copid, covid }