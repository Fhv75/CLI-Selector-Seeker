import * as cheerio from 'cheerio';
import axios from 'axios';

const url = process.argv[2];
//const url = 'https://cheerio.js.org/docs/basics/selecting';
const selector = process.argv[3];
//const selector = '.theme-edit-this-page';

axios.get(url).then(
    (response) => {
        const $ = cheerio.load(response.data);
        const $selected = $(selector);
        console.log($selected.text());
    }
).catch((error) => {
    console.log(error);
})