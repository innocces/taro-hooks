type Env = 'production' | 'development';
export default (env: Env): string => `
module.exports = {
  env: {
    NODE_ENV: '"${env}"',
  },
  defineConstants: {},
  mini: {},
  h5: {},
};
`;
