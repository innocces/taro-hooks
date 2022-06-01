const prod = process.env.NODE_ENV === 'production';

const reactDevDemoHost = 'http://localhost:12557';
const vueDevDemoHost = 'http://localhost:10086';

const reactProdDemoHost = 'https://react-demo-taro-hooks.vercel.app';
const vueProdDemoHost = 'https://vue-demo-taro-hooks.vercel.app';

module.exports = {
  vue: prod ? vueProdDemoHost : vueDevDemoHost,
  react: prod ? reactProdDemoHost : reactDevDemoHost,
};
