export const FilterControls = () => {
  return (
    <div className="items-stretch box-border caret-transparent gap-x-1 flex flex-col gap-y-1 mt-2 mb-1">
      <div className="relative box-border caret-transparent">
        <div className="box-border caret-transparent">
          <div className="items-center box-border caret-transparent gap-x-1 flex gap-y-1 scroll-smooth snap-x w-full overflow-auto">
            <div className="items-center bg-violet-100 box-border caret-transparent flex rounded-full">
              <button className="text-slate-600 text-sm items-center bg-indigo-200 caret-transparent flex leading-5 outline-transparent outline-offset-2 outline outline-2 text-center text-nowrap px-3 py-0.5 rounded-full">
                Best
              </button>
              <button className="text-slate-600 text-sm items-center bg-violet-100 caret-transparent flex leading-5 outline-transparent outline-offset-2 outline outline-2 text-center text-nowrap px-3 py-0.5 rounded-full">
                Hot
              </button>
              <button className="text-slate-600 text-sm items-center bg-violet-100 caret-transparent flex leading-5 outline-transparent outline-offset-2 outline outline-2 text-center text-nowrap px-3 py-0.5 rounded-full">
                New
              </button>
            </div>
            <div className="relative box-border caret-transparent text-left">
              <button
                type="button"
                className="text-slate-500 items-center bg-transparent caret-transparent flex text-center p-0"
              >
                <div className="text-slate-600 text-sm items-center bg-violet-100 box-border caret-transparent flex leading-5 outline-transparent outline-offset-2 outline outline-2 text-nowrap pl-3 pr-1 py-0.5 rounded-full">
                  Any status
                  <img
                    src="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-9.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-4 text-nowrap w-4"
                  />
                </div>
              </button>
            </div>
            <button
              type="button"
              className="text-slate-600 text-xs items-center bg-transparent caret-transparent flex justify-center leading-4 text-center px-2 py-1 rounded-md"
            >
              <img
                src="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-10.svg"
                alt="Icon"
                className="box-border caret-transparent h-4 w-4"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
