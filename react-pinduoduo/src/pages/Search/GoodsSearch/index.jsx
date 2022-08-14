import React, { useEffect} from "react"
import { useSearchParams, useNavigate } from 'react-router-dom'

const GoodsSearch = (props) => {
    const [search] = useSearchParams()
    const goodsName = search.get('name')
    const navigate = useNavigate()
    useEffect(() => {
        if (!goodsName) {
            navigate('/search')
        }
    }, [])
    return (
        <div>
            GoodsSearch
        </div>
    )
}

export default GoodsSearch