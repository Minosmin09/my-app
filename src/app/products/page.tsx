import Footer from "../components/Footer";
import ProductItem from "../components/ProductItem";

export default function Products() {
const products = [
    { name: "I Pad Pro M4", description: "Product description ipad goes here.", image: "/ipad.png" },
    { name: "I Phone", description: "Product description ipad goes here.", image: "/iphone.png" },
    { name: "Macbook Pro M4", description: "Product description ipad goes here.", image: "/mac.png" },
    { name: "Apple Watch", description: "Product description ipad goes here.", image: "/apple watch.jpeg" },
];

return (<div>
    <h1 className="font-bold text-2xl text-center my-4">Product</h1>
    <div className="flex flex-wrap m-auto justify-center w-[80%] border rounded p-4 bg-slate-100 mb-6">
        {
            products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        index={index}
                        productName={product.name}
                        description={product.description}
                        image_url={product.image} 
                    />
                )
            })
        }
    </div>

    <Footer />
</div>
)
}
