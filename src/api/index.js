import ajax from './ajax'

export const reqCategorys = () => ajax('/api/index_category');

export const reqShops = (lng, lat) => ajax('/api/shops', {longitude:lng, latitude: lat});

