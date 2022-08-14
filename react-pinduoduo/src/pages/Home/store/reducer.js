import * as actionTypes from './constants'

const defaultState = {
    rankList: [],
    tabList: [],
    specialList: [],
    goodsList: [],
    enterLoading: false
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_RANK_LIST:
            return {
                ...state,
                rankList: action.data
            }
        case actionTypes.SET_TAB_LIST:
            return {
                ...state,
                tabList: action.data
            }
        case actionTypes.SET_SPECIAL_LIST:
            return {
                ...state,
                specialList: action.data
            }
        case actionTypes.SET_ENTER_LOADING:
            return {
                ...state,
                enterLoading: action.data
            }
        case actionTypes.SET_GOODS_LIST:
            return {
                ...state,
                goodsList: action.data
            }
        default:
            return state
    }
}