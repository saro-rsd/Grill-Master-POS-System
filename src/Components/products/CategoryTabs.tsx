import type { Category } from "../../types/Product";

interface CategoryTabsProps {
  selected: Category;
  onSelect: (category: Category) => void;
}

const tabs: { value: Category; label: string; emoji: string }[] = [
  { value: "burger", label: "Burgers", emoji: "🍔" },
  { value: "pizza", label: "Pizza", emoji: "🍕" },
  { value: "fries", label: "Fries", emoji: "🍟" },
  { value: "drink", label: "Drinks", emoji: "🥤" },
];

export default function CategoryTabs ({selected , onSelect }: CategoryTabsProps){
    return(
        <div className="flex gap-3">
            {tabs.map((tab)=>(
                <button key={tab.value}
                onClick={()=>onSelect(tab.value)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-3 font-semibold ${
            selected === tab.value
              ? "bg-gold text-black"
              : "bg-raised text-white hover:bg-line"
          }`}>
            <span className="text-x1">{tab.emoji}</span>
            {tab.label}
          </button>
            ))}
        </div>
    );
}
