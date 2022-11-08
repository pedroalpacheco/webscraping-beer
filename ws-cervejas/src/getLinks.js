const puppeteer = require('puppeteer');


async function getLinks(url) {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto(url);

  await page.waitForSelector('.button.button-default.ajax-pagination.see-more');
  await page.click('.button.button-default.ajax-pagination.see-more');

  await page.waitForSelector('.product-variation__image-container');

  const lnkProdutos = await page.$$eval('.product-variation__image-container', prds => prds.map(prd => prd.href));

  // console.log(lnkProdutos);
  await browser.close();
  return lnkProdutos

};

module.exports = getLinks;
