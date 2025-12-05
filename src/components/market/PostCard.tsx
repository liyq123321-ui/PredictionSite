export type PostCardProps = {
  href: string;
  avatarSrc: string;
  avatarAlt: string;
  title: string;
  iconSrc: string;
  count: number;
  badgeText: string;
};

export const PostCard = (props: PostCardProps) => {
  return (
    <a
      href={props.href}
      className="box-border caret-transparent flex flex-col outline-transparent outline-offset-2 outline outline-2 w-full p-2 rounded-none md:rounded-md"
    >
      <div className="items-start box-border caret-transparent gap-x-1 flex flex-col justify-normal gap-y-1 w-full md:gap-x-0 md:flex-row md:justify-between md:gap-y-0">
        <div className="box-border caret-transparent flex flex-col w-full">
          <div className="items-center box-border caret-transparent gap-x-2 flex gap-y-2 md:gap-x-4 md:gap-y-4">
            <button className="bg-transparent caret-transparent flex text-center p-0">
              <div className="box-border caret-transparent">
                <img
                  alt={props.avatarAlt}
                  src={props.avatarSrc}
                  className="text-transparent aspect-[auto_24_/_24] bg-white box-border shrink-0 h-6 max-w-6 object-cover w-6 rounded-full"
                />
              </div>
            </button>
            <div className="items-center box-border caret-transparent gap-x-1 flex gap-y-1">
              <span className="box-border caret-transparent flow-root overflow-hidden">
                {props.title}
              </span>
            </div>
          </div>
        </div>
        <div className="items-center box-border caret-transparent gap-x-8 flex justify-end gap-y-8 w-full md:w-fit">
          <div className="box-border caret-transparent flex">
            <span className="box-border caret-transparent block">
              <div className="text-slate-700 items-center box-border caret-transparent gap-x-0.5 flex justify-start gap-y-0.5 w-[104px] md:w-[73.92px]">
                <img
                  src={props.iconSrc}
                  alt="Icon"
                  className="text-slate-400 box-border caret-transparent shrink-0 h-4 w-4"
                />
                {props.count}
              </div>
            </span>
          </div>
          <div className="text-cyan-600 box-border caret-transparent w-12">
            {props.badgeText}
          </div>
        </div>
      </div>
    </a>
  );
};
