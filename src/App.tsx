// src/App.tsx
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout.tsx"
import Home from "./pages/Home.tsx"
import PetsPage from "./pages/PetsPage.tsx"
import PetDetail from "./pages/PetDetail.tsx"
import ProductsPage from "./pages/ProductsPage.tsx"
import ProductDetail from "./pages/ProductDetail.tsx"
import About from "./pages/About.tsx"
import Contacts from "./pages/Contacts.tsx"
import Cart from "./pages/Cart.tsx"

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pets" element={<PetsPage />} />
                <Route path="/pets/:id" element={<PetDetail />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Layout>
    )
}

export default App