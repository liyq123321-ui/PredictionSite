export const SearchBar = () => {
  return (
    <div className="relative box-border caret-transparent w-full">
      <div className="relative items-center box-border caret-transparent flex w-full">
        <img
          src="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-8.svg"
          alt="Icon"
          className="absolute text-slate-400 box-border caret-transparent h-5 w-5 left-3"
        />
        <input
          type="text"
          placeholder="Search questions, users, topics, and posts"
          value=""
          className="text-base bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent block h-12 leading-6 w-full border border-slate-300 pl-10 pr-4 py-2 rounded-md border-solid md:text-sm md:leading-5"
        />
      </div>
    </div>
  );
};
