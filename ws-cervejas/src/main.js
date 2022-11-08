const getLinks = require('./getLinks');
const getData = require('./getData');

const urlAlvo = 'https://www.minhacooper.com.br/loja/v.nova-bnu/produto/busca?q=cerveja';

async function main(url) {
  const links = await getLinks(url);

  for (let i = 0; i < links.length; i++) {
    const url = links[i];
    await getData(url);

  }
};
main(urlAlvo);