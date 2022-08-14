import { axiosInstance } from "./config"

export const getHotKeyWordsRequest = 
    () => axiosInstance.get('/search/hots')

export const getGoodsListRequest = 
    () => axiosInstance.get('/goodsList')

export const getRankListRequest = 
    () => axiosInstance.get('/rankList')

export const getSpecialListRequest = 
    () => axiosInstance.get('/specialList')

export const getSuggestListRequest = 
    () => axiosInstance.get('/suggestList')