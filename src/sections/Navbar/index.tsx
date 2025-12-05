import { NavbarLogo } from "./components/NavbarLogo";
import { DesktopMenu } from "./components/DesktopMenu";

export const Navbar = () => {
  return (
    <nav
      aria-label="Sidebar"
      className="sticky self-start box-border caret-transparent hidden flex-col col-end-auto col-start-auto h-[1000px] min-h-0 min-w-0 px-2 top-0 md:flex md:col-end-[span_2] md:col-start-[span_2] md:min-h-[auto] md:min-w-[auto]"
    >
      <NavbarLogo />
      <DesktopMenu />
      <div className="box-border caret-transparent gap-x-1 flex flex-col min-h-0 min-w-0 gap-y-1 mt-auto mb-6 md:min-h-[auto] md:min-w-[auto]">
        <a
          href="/referrals"
          className="text-slate-600 text-sm font-medium items-center box-border caret-transparent flex leading-5 min-h-0 min-w-0 outline-transparent outline-offset-2 outline outline-2 px-3 py-2 rounded-md md:min-h-[auto] md:min-w-[auto]"
        >
          <img
            src="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-4.svg"
            alt="Icon"
            className="text-slate-500 box-border caret-transparent shrink-0 h-6 w-6 -ml-1 mr-3"
          />
          <span className="box-border caret-transparent block min-h-0 min-w-0 text-ellipsis text-nowrap overflow-hidden md:min-h-[auto] md:min-w-[auto]">
            Share with friends
          </span>
        </a>
        <button className="text-slate-600 text-sm font-medium items-center bg-transparent caret-transparent flex leading-5 min-h-0 min-w-0 outline-transparent outline-offset-2 outline outline-2 text-center px-3 py-2 rounded-md md:min-h-[auto] md:min-w-[auto]">
          <img
            src="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-5.svg"
            alt="Icon"
            className="text-black box-content caret-black block shrink h-auto w-auto mx-0 md:text-slate-500 md:aspect-auto md:box-border md:caret-transparent md:hidden md:shrink-0 md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-6 md:[mask-position:0%] md:bg-left-top md:-ml-1 md:mr-3 md:scroll-m-0 md:scroll-p-[auto]"
          />
          <img
            src="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-6.svg"
            alt="Icon"
            className="text-black box-content caret-black shrink h-auto w-auto mx-0 md:text-slate-500 md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-6 md:[mask-position:0%] md:bg-left-top md:-ml-1 md:mr-3 md:scroll-m-0 md:scroll-p-[auto]"
          />
          <span className="box-border caret-transparent block min-h-0 min-w-0 text-ellipsis text-nowrap overflow-hidden md:min-h-[auto] md:min-w-[auto]">
            <span className="box-border caret-transparent hidden text-nowrap">
              Dark
            </span>
            <span className="box-border caret-transparent text-nowrap">
              Light
            </span>
            (auto)
          </span>
        </button>
        <button className="text-slate-600 text-sm font-medium items-center bg-transparent caret-transparent flex leading-5 min-h-0 min-w-0 outline-transparent outline-offset-2 outline outline-2 text-center px-3 py-2 rounded-md md:min-h-[auto] md:min-w-[auto]">
          <img
            src="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-7.svg"
            alt="Icon"
            className="text-slate-500 box-border caret-transparent shrink-0 h-6 w-6 -ml-1 mr-3"
          />
          <span className="box-border caret-transparent block min-h-0 min-w-0 text-ellipsis text-nowrap overflow-hidden md:min-h-[auto] md:min-w-[auto]">
            Sign in
          </span>
        </button>
      </div>
    </nav>
  );
};
