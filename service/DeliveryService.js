import {_DATA} from '../data/data'
function getData() {
    var data = JSON.parse(JSON.stringify(_DATA));
    return Promise.resolve(data)
}

export const MAPS_ROUTE_KEY = 'AIzaSyDzcXgiM7FNOb87OG_CSIpKjUgFVayUWjE';

export default {
    getData
}