import { CategoryTabs } from "@/sections/MainContent/components/CategoryTabs";
import { SearchBar } from "@/components/SearchBar";
import { FilterControls } from "@/components/FilterControls";

export const SearchAndFilters = () => {
  return (
    <div className="sticky bg-white box-border caret-transparent flex flex-col z-20 px-2 top-0">
      <div className="box-border caret-transparent flex flex-col mb-2">
        <CategoryTabs />
      </div>
      <SearchBar />
      <FilterControls />
    </div>
  );
};
