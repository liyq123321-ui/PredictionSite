export const MobileMenu = () => {
  return (
    <nav className="fixed text-slate-700 text-xs items-center bg-white box-border caret-transparent flex justify-between leading-4 z-50 border-slate-200 border-t-2 border-solid bottom-0 inset-x-0 md:hidden">
      <a
        href="/browse"
        className="box-border caret-transparent block min-h-[auto] min-w-[auto] text-center w-full px-3 py-1 md:min-h-0 md:min-w-0"
      >
        <img
          src="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-24.svg"
          alt="Icon"
          className="box-border caret-transparent h-[25.6px] w-[25.6px] mx-auto my-1"
        />
        Browse
      </a>
      <a
        href="/explore"
        className="box-border caret-transparent block min-h-[auto] min-w-[auto] text-center w-full px-3 py-1 md:min-h-0 md:min-w-0"
      >
        <img
          src="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-25.svg"
          alt="Icon"
          className="box-border caret-transparent h-[28.8px] w-[28.8px] mt-[2.16px] mb-[3.04px] mx-auto"
        />
        Explore
      </a>
      <a
        href="/about"
        className="box-border caret-transparent block min-h-[auto] min-w-[auto] text-center w-full px-3 py-1 md:min-h-0 md:min-w-0"
      >
        <img
          src="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-26.svg"
          alt="Icon"
          className="box-border caret-transparent h-[25.6px] w-[25.6px] mx-auto my-1"
        />
        About
      </a>
      <button className="bg-transparent caret-transparent block min-h-[auto] min-w-[auto] text-center w-full px-3 py-1 md:min-h-0 md:min-w-0">
        <img
          src="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-27.svg"
          alt="Icon"
          className="box-border caret-transparent h-[25.6px] w-[25.6px] mx-auto my-1"
        />
        Sign in
      </button>
    </nav>
  );
};
