const puppeteer = require('puppeteer');


async function getData(url) {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();

  await page.goto(url);

  let dado = [];

  await page.waitForSelector('.product-detail-section');

  await page.reload({ waitUntil: 'networkidle2' });

  const ProductDescribe = await page.$eval('.product-detail-section > div', prd => prd.innerText);
  const ProductVlr = await page.$eval('.product-variation__final-price', prd => prd.innerText);
  const ProductVlrLitro = await page.$eval('div.product-variation__fractional-desc > span', prd => prd.innerText);
  dado = { ProductDescribe, ProductVlr, ProductVlrLitro };

  console.log(dado)



  await browser.close();
};

module.exports = getData;
