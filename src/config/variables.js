const links = require('../config/links');

const shortName = 'jsDrome';
const title = 'jsDrome';
const author = 'Sreeram Padmanabhan';
const themeColor = '#ffffff';
const description = 'Web of thoughts';
const shortDescription = 'Web Artist';
const domain = 'https://jsdrome.web.app';

const getPaths = () => {
  let paths = [];
  links.shift();
  links.forEach(link => {
    link.links.forEach(link => {
      // eslint-disable-next-line no-magic-numbers
      paths.push(link.route);
    });
  });
  return paths;
};

const getKeywords = () => {
  let keywords = [];
  links.forEach(link => {
    keywords.push(link.title);
    link.links.forEach(link => {
      keywords.push(link.title);
    });
  });
  return keywords.join(',');
}

module.exports = {
  title,
  description,
  shortDescription,
  url: domain,
  author,
  manifest: {
    seed: {
      'short_name': shortName,
      'name': title,
      'start_url': '/',
      'background_color': '#000000',
      'display': 'standalone',
      'theme_color': themeColor,
      "icons": [
        {
          "src": "/img/logo-192.png",
          "type": "image/png",
          "sizes": "192x192",
        },
        {
          "src": "/img/logo-512.png",
          "type": "image/png",
          "sizes": "512x512",
        },
      ],
    },
  },
  themeColor,
  seo: {
    keywords: getKeywords(),
  },
  og: {
    ogImage: domain + '/img/og_image.jpg',
    ogImageAlt: title,
    ogType: 'website',
    ogFbAppId: '297023651089707',
  },
  getPaths,
};