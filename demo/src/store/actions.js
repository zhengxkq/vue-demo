import { ajax } from '../lib/js/k'
import * as type from './mutation-types'

const errCb = errmsg => {
    console.info(errmsg);
    alert(errmsg)
};
export const refreshNewsGrid = ({ dispatch }, page, rows) => {
    ajax('/news/getnewslist', {
        page: page,
        rows: rows
    }).then((res) => {
        dispatch(types.REFRESH_NEWS_PAGINATION, page, rows, res);
        dispatch(types.REFRESH_NEWS - GRID, res);
    }, errCb);
}

export const getNewsDetail = ({ dispatch }, id) => {
    ajax('/news/getnewsdetail', {
        id: id
    }).then((res) => {
        dispatch(types.GET_NEWS_DETAIL, res);
    }, errCb);
}
