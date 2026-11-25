import { BrowserRouter, Route, Routes } from 'react-router-dom'

import StoreLayout from '../layouts/StoreLayout'
import HomePage from '../pages/store/HomePage'
import ShopPage from '../pages/store/ShopPage'
import ProductDetailPage from '../pages/store/ProductDetailPage'
import CartPage from '../pages/store/CartPage'
import NotFoundPage from '../pages/store/NotFoundPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StoreLayout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
