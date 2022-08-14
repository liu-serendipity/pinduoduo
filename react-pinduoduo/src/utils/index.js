import { Toast } from 'antd-mobile'

export const isPathPartlyExisted = (path) => {
    const arr = ['/search', '/goodsDetail', '/goodsSearch']
    let pathRes = path.split('/')
    if (pathRes[1] && arr.indexOf(`/${pathRes[1]}`) != -1) return true
    return false
}

export const debounce = (func, delay) => {
    let timer
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this, args)
            clearTimeout(timer)
        }, delay)
    }
}

export const collectQuery = (keyword) => {
    if (keyword.trim()) {
        let { historyItems } = localStorage;
        if (historyItems === undefined) {
            localStorage.historyItems = keyword
        } else {
            let array = historyItems.split('|')
            if (array.length == 10) {
                array.pop()
            }
            array.map((item, index) => {
                if (item == keyword) {
                    array.splice(index, 1)
                }
            })
            array.unshift(keyword)
            localStorage.historyItems = array.join('|')
        }
    } else {
        Toast.show({content: '搜索内容不能为空'})
    }
}