const reactDevDemoHost = 'http://localhost:12557/react';
const vueDevDemoHost = 'http://localhost:10086/vue';

function generateURIWithFrame(baseURI, frame) {
  return baseURI + '/' + frame;
}

module.exports = (prod, baseURI) => ({
  vue: prod ? generateURIWithFrame(baseURI, 'vue') : vueDevDemoHost,
  react: prod ? generateURIWithFrame(baseURI, 'react') : reactDevDemoHost,
});
