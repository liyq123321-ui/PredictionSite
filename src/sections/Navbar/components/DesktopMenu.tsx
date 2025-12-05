export const DesktopMenu = () => {
  return (
    <div className="box-border caret-transparent gap-x-1 flex flex-col min-h-0 min-w-0 gap-y-1 mb-4 md:min-h-[auto] md:min-w-[auto]">
      <a
        href="/"
        className="text-slate-900 text-sm font-medium items-center bg-slate-200 box-border caret-transparent flex leading-5 min-h-0 min-w-0 outline-transparent outline-offset-2 outline outline-2 px-3 py-2 rounded-md md:min-h-[auto] md:min-w-[auto]"
      >
        <img
          src="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-1.svg"
          alt="Icon"
          className="text-slate-600 box-border caret-transparent shrink-0 h-6 w-6 -ml-1 mr-3"
        />
        <span className="box-border caret-transparent block min-h-0 min-w-0 text-ellipsis text-nowrap overflow-hidden md:min-h-[auto] md:min-w-[auto]">
          Browse
        </span>
      </a>
      <a
        href="/about"
        className="text-slate-600 text-sm font-medium items-center box-border caret-transparent flex leading-5 min-h-0 min-w-0 outline-transparent outline-offset-2 outline outline-2 px-3 py-2 rounded-md md:min-h-[auto] md:min-w-[auto]"
      >
        <img
          src="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-2.svg"
          alt="Icon"
          className="text-slate-500 box-border caret-transparent shrink-0 h-6 w-6 -ml-1 mr-3"
        />
        <span className="box-border caret-transparent block min-h-0 min-w-0 text-ellipsis text-nowrap overflow-hidden md:min-h-[auto] md:min-w-[auto]">
          About
        </span>
      </a>
      <button className="text-slate-600 text-sm font-medium items-center bg-transparent caret-transparent flex leading-5 min-h-0 min-w-0 outline-transparent outline-offset-2 outline outline-2 text-center px-3 py-2 rounded-md md:min-h-[auto] md:min-w-[auto]">
        <img
          src="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-3.svg"
          alt="Icon"
          className="text-slate-500 box-border caret-transparent shrink-0 h-6 w-6 -ml-1 mr-3"
        />
        <span className="box-border caret-transparent block min-h-0 min-w-0 text-ellipsis text-nowrap overflow-hidden md:min-h-[auto] md:min-w-[auto]">
          App
        </span>
      </button>
      <div className="box-border caret-transparent flex flex-col min-h-0 min-w-0 mt-4 md:min-h-[auto] md:min-w-[auto]">
        <button
          type="button"
          className="text-white font-semibold items-center bg-transparent bg-[linear-gradient(to_right,rgb(99,102,241),rgb(96,165,250))] caret-transparent flex justify-center min-h-0 min-w-0 text-center w-full px-6 py-2.5 rounded-md md:min-h-[auto] md:min-w-[auto]"
        >
          Sign up
        </button>
        <span className="text-slate-500 text-sm box-border caret-transparent block leading-5 min-h-0 min-w-0 my-1.5 md:min-h-[auto] md:min-w-[auto]">
          Get
          <div className="relative font-semibold items-center box-border caret-transparent inline-flex text-nowrap ml-[15.4px]">
            <img
              src="https://c.animaapp.com/mimg0e4nEiOQOI/assets/mana.svg"
              alt="Ṁ"
              className="absolute box-border caret-transparent h-3.5 left-[-15.4px] max-w-full min-h-3.5 min-w-3.5 text-nowrap w-3.5 mr-[1.4px] top-[2.38px]"
            />
            1,000
          </div>
          to start trading!
        </span>
      </div>
      <div className="box-border caret-transparent gap-x-2 flex flex-col min-h-0 min-w-0 gap-y-2 md:min-h-[auto] md:min-w-[auto]"></div>
    </div>
  );
};
