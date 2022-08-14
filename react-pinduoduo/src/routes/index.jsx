import { lazy, Suspense } from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '@/pages/Home'
const Version = lazy(() => import('@/pages/Version'))
const Sort = lazy(() => import('@/pages/Sort'))
const Chat = lazy(() => import('@/pages/Chat'))
const Person = lazy(() => import('@/pages/Person'))
const Search = lazy(() => import('@/pages/Search'))
const GoodsDetail = lazy(() => import('@/pages/GoodsDetail'))
const GoodsSearch = lazy(() => import('@/pages/Search/GoodsSearch'))
const ShopsSearch = lazy(() => import('@/pages/Search/ShopsSearch'))

const RouterConfig = () => {
    return (
        <Suspense fallback={null}>
            <Routes>
                <Route path="/" element={<Navigate to="/home"/>} replace={true} />
                <Route path="/home" element={<Home />} />
                <Route path="/version" element={<Version />} />
                <Route path="/sort" element={<Sort />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/person" element={<Person />} />
                <Route path="/search" element={<Search />} />
                <Route path="/goodsSearch" element={<GoodsSearch />} />
                <Route path="/shopsSearch" element={<ShopsSearch />} />
                <Route path="/goodsDetail/:id" element={<GoodsDetail />} />
            </Routes>
        </Suspense>
    )
}

export default RouterConfig