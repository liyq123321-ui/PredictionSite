import { BottomNavItem } from "./components/BottomNavItem";

export const BottomNav = () => {
  return (
    <nav className="fixed text-slate-700 text-xs items-center bg-white box-border caret-transparent flex justify-between leading-4 z-50 border-slate-200 border-t-2 border-solid bottom-0 inset-x-0 md:hidden">
      <BottomNavItem
        href="/browse"
        iconSrc="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-24.svg"
        iconClassName="box-border caret-transparent h-[25.6px] w-[25.6px] mx-auto my-1"
        label="Browse"
      />
      <BottomNavItem
        href="/explore"
        iconSrc="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-25.svg"
        iconClassName="box-border caret-transparent h-[28.8px] w-[28.8px] mt-[2.16px] mb-[3.04px] mx-auto"
        label="Explore"
      />
      <BottomNavItem
        href="/about"
        iconSrc="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-26.svg"
        iconClassName="box-border caret-transparent h-[25.6px] w-[25.6px] mx-auto my-1"
        label="About"
      />
      <BottomNavItem
        iconSrc="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-27.svg"
        iconClassName="box-border caret-transparent h-[25.6px] w-[25.6px] mx-auto my-1"
        label="Sign in"
        isButton={true}
      />
    </nav>
  );
};
