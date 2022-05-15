const prod = process.env.NODE_ENV === 'production';

const devProjectMap = {
  react: {
    port: 10086,
  },
};

const generateEnvURI = (project) => {
  const proto = prod ? '//' : '';
};
