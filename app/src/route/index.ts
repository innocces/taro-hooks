// 自动生成demos导航
import appConfig from '../app.config';

const BASEURL = '/~demos/pages-';
const weappRoute = appConfig.pages.filter((v) => !v.includes('index/index'));
const roureName = weappRoute.map((v) => v.split('/')[1].toLocaleLowerCase());
const webPages = weappRoute.map((v, i) => ({
  [roureName[i]]: BASEURL + v,
}));
const weappPages = weappRoute.map((v, i) => ({
  [roureName[i]]: v,
}));

export { webPages, weappPages };
