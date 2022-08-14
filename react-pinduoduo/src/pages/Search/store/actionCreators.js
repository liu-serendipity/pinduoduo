import * as actionTypes from './constants'
import { getHotKeyWordsRequest, getSuggestListRequest } from '@/api/request'

const changeHotKeyWords = (data) => ({
    type: actionTypes.SET_HOT_KEYWORDS,
    data: data
})

const changeSuggestList = (data) => ({
    type: actionTypes.SET_SUGGEST_LIST,
    data: data
})

export const changeEnterLoading = (data) => ({
    type: actionTypes.SET_ENTER_LOADING,
    data: data
})

export const getHotKeyWords = () => {
    return (dispatch) => {
        getHotKeyWordsRequest()
            .then(data => {
                let list = data.hotqs;
                dispatch(changeHotKeyWords(list))
            })
    }
}

export const getSuggestList = () => {
    return (dispatch) => {
        getSuggestListRequest()
            .then(data => {
                dispatch(changeSuggestList(data))
                dispatch(changeEnterLoading(false))
            })
    }
}