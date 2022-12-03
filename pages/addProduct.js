import Header from "../components/Header"
import ProductFeed from "../components/ProductFeed"


const Products = () => {
    return (
        <main className="max-w-screen-2xl mx-auto min-h-screen">
            <Header name='Products' />
            <ProductFeed />
        </main>
    )
}

export default Products
