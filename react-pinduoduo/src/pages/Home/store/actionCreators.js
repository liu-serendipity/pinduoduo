import * as actionTypes from './constants'
import { getRankListRequest, getSpecialListRequest, getGoodsListRequest } from '@/api/request'

const changeRankList = (data) => ({
    type: actionTypes.SET_RANK_LIST,
    data: data
})

const changeTabList = (data) => ({
    type: actionTypes.SET_TAB_LIST,
    data: data
})

const changeSpecialList = (data) => ({
    type: actionTypes.SET_SPECIAL_LIST,
    data: data
})

const changeGoodsList = (data) => ({
    type: actionTypes.SET_GOODS_LIST,
    data: data
})

export const changeEnterLoading = (data) => ({
    type: actionTypes.SET_ENTER_LOADING,
    data: data
})

export const getRankList = () => {
    return (dispatch) => {
        getRankListRequest()
            .then(data => {
                let list = data.result.icon_set;
                dispatch(changeRankList(list))
            })
    }
}

export const getTabList = () => {
    return (dispatch) => {
        getRankListRequest()
            .then(data => {
                let list = data.result.top_opts;
                dispatch(changeTabList(list))
            })
    }
}

export const getSpecialList = () => {
    return (dispatch) => {
        getSpecialListRequest()
            .then(data => {
                let list = data.result
                dispatch(changeSpecialList(list))
            })
    }
}

export const getGoodsList = () => {
    return (dispatch) => {
        getGoodsListRequest()
            .then(data => {
                let list = data.data.goods_list
                dispatch(changeGoodsList(list))
            })
    }
}