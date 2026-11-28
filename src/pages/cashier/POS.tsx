import {useState} from "react";
import CategoryTabs from "../../components/products/CategoryTabs";
import ProductGrid from "../../components/products/ProductGrid";
import { products } from "../../data/products";
import type { CategoryFilter, Product } from "../../types/Product";

export default function POS (){
    const [category, setCategory] = useState<CategoryFilter>("all");

    const visibleProducts = category === "all"? products:products.filter((p)=>p.category === category);

    const handleAdd = (product: Product) =>{
        console.log("add to cart:" ,product.name);
    }

    return (
        <div className="flex h-full gap-4">
            <section className="flex flex-1 flex-xol gap-4 overflow-y-auto">
                <CategoryTabs selected={category} onSelect={setCategory} />
                <ProductGrid products={visibleProducts} onAdd={handleAdd} />
            </section>

            <aside className="w-96 rounded-xl border border-line bg-panel p-4">
                <h2 className="text-x1 font-semibold">Current Order</h2>
            </aside>
        </div>
    );
};