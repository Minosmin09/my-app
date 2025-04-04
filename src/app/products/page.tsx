export default function Products() {
    return (
        <div>
            <h1 className="font-bold text-xl m-4">Product</h1>
            <div className="flex flex-wrap m-auto justify-center w-[80%] border rounded m-4 p-4 flex bg-slate-100">
                <div className="shadow-lg rounded-md border w-fit bg-green-200 p-2 m-2">
                    <h2>Computer:</h2>
                    <p>Product description goes here.</p>
                    <button className="border bg-blue-200 px-2 py-1 mt-2 rounded hover:font-bold">Buy Now</button>
                </div>
                <div className="shadow-lg rounded-md border w-fit bg-green-200 p-2 m-2">
                    <h2>Macbook Pro M4:</h2>
                    <p>Product description goes here.</p>
                    <button className="border bg-blue-200 px-2 py-1 mt-2 rounded hover:font-bold">Buy Now</button>
                </div>
                <div className="shadow-lg rounded-md border w-fit bg-green-200 p-2 m-2">
                    <h2>Macbook Pro M3:</h2>
                    <p>Product description goes here.</p>
                    <button className="border bg-blue-200 px-2 py-1 mt-2 rounded hover:font-bold">Buy Now</button>
                </div>
                <div className="shadow-lg rounded-md border w-fit bg-green-200 p-2 m-2">
                    <h2>Macbook Pro M2:</h2>
                    <p>Product description goes here.</p>
                    <button className="border bg-blue-200 px-2 py-1 mt-2 rounded hover:font-bold">Buy Now</button>
                </div>
            </div>
            <footer className="font-bold bg-blue-200 text-center">--- Product footer --- </footer>
        </div>
    )
}