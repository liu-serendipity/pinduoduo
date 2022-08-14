import { combineReducers } from 'redux'
import { reducer as searchReducer } from '@/pages/Search/store/index'
import { reducer as homeReducer } from '@/pages/Home/store/index'

export default combineReducers({
    search: searchReducer,
    home: homeReducer
})