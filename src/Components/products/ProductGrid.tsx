import type { Product } from "../../types/Product";
import ProductCard from "./ProductCard";

interface ProductgridProps{
    products : Product[];
    onAdd : (product : Product) => void;
}

export default function ProductGrid ({products , onAdd}: ProductgridProps){
    if(products.length === 0){
        return <p className="text-gray-400">No products in this category</p>;
    }

    return(
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">{products.map((product)=>(
            <ProductCard key={product.id} product={product} onAdd={onAdd} />
        ))}</div>
    );
}