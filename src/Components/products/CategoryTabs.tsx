import type { CategoryFilter } from "../../types/Product";
import { CupSoda, Hamburger, LayoutGrid, Pizza, Popcorn } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CategoryTabsProps {
  selected: CategoryFilter;
  onSelect: (category: CategoryFilter) => void;
}

const tabs: { value: CategoryFilter; label: string; icon: LucideIcon }[] = [
  { value: "all", label: "All", icon: LayoutGrid },
  { value: "burger", label: "Burgers", icon: Hamburger },
  { value: "pizza", label: "Pizza", icon: Pizza },
  { value: "fries", label: "Fries", icon: Popcorn },
  { value: "drink", label: "Drinks", icon: CupSoda },
];

export default function CategoryTabs({
  selected,
  onSelect,
}: CategoryTabsProps) {
  return (
    <div className="flex gap-3">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onSelect(tab.value)}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-3 font-semibold ${
            selected === tab.value
              ? "bg-gold text-black"
              : "bg-raised text-white hover:bg-line"
          }`}
        >
          <span className="text-x1"><tab.icon size={20} /></span>
          {tab.label}
        </button>
      ))}
    </div>
  );
}
