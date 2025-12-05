import logo from "../../../assets/logo.jpg";
export const NavbarLogo = () => {
  return (
    <a
      href="/"
      className="items-center box-border caret-transparent gap-x-0.5 flex min-h-0 min-w-0 outline-transparent outline-offset-2 outline outline-2 gap-y-0.5 w-full pt-6 pb-3 px-1 md:min-h-[auto] md:min-w-[auto]"
    >
      <img
        src={logo}
        alt="Manifold"
        className="aspect-[auto_24_/_24] box-border caret-transparent shrink-0 h-10 max-w-full min-h-0 min-w-0 w-10 md:min-h-[auto] md:min-w-[auto]"
      />
      <div className="text-indigo-700 text-xl font-thin box-border caret-transparent leading-7 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        DDubai🍁
      </div>
    </a>
  );
};
