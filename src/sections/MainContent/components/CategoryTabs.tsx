export const CategoryTabs = () => {
  return (
    <div className="relative box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="items-baseline box-border caret-transparent gap-x-4 flex gap-y-4 scroll-smooth snap-x w-full border-violet-100 overflow-auto pb-2 border-b border-solid">
          <button className="text-indigo-600 font-medium bg-transparent caret-transparent block text-center p-0">
            All
          </button>
          <button className="text-slate-500 font-medium bg-transparent caret-transparent block text-center text-nowrap p-0">
            Politics
          </button>
          <button className="text-slate-500 font-medium bg-transparent caret-transparent block text-center text-nowrap p-0">
            Technology
          </button>
          <button className="text-slate-500 font-medium bg-transparent caret-transparent block text-center text-nowrap p-0">
            Sports
          </button>
          <button className="text-slate-500 font-medium bg-transparent caret-transparent block text-center text-nowrap p-0">
            Culture
          </button>
          <button className="text-slate-500 font-medium bg-transparent caret-transparent block text-center text-nowrap p-0">
            Business
          </button>
          <button className="text-slate-500 font-medium bg-transparent caret-transparent block text-center text-nowrap p-0">
            Fun
          </button>
        </div>
      </div>
    </div>
  );
};
