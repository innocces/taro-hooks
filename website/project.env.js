const reactDevDemoHost = 'http://localhost:12557';
const vueDevDemoHost = 'http://localhost:10086';

function generateURIWithFrame(baseURI, frame) {
  return baseURI + '/' + frame;
}

module.exports = (prod, baseURI) => ({
  vue: prod ? generateURIWithFrame(baseURI, 'vue') : vueDevDemoHost,
  react: prod ? generateURIWithFrame(baseURI, 'react') : reactDevDemoHost,
});
