import ajax from './ajax'

const BASIC_URL = '/api';

export const reqCategorys = () => ajax(BASIC_URL + '/index_category');

export const reqShops = (lng, lat) => ajax(BASIC_URL + '/shops', {longitude:lng, latitude: lat});

export const reqShopInfo = () => ajax('/shopinfo');

export const reqShopGoods =() => ajax('/goods');

export const reqShopRatings = () => ajax('/ratings');
