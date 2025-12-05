export type BottomNavItemProps = {
  href?: string;
  iconSrc: string;
  iconClassName: string;
  label: string;
  isButton?: boolean;
};

export const BottomNavItem = (props: BottomNavItemProps) => {
  if (props.isButton) {
    return (
      <button className="bg-transparent caret-transparent block min-h-[auto] min-w-[auto] text-center w-full px-3 py-1 md:min-h-0 md:min-w-0">
        <img src={props.iconSrc} alt="Icon" className={props.iconClassName} />
        {props.label}
      </button>
    );
  }

  return (
    <a
      href={props.href}
      className="box-border caret-transparent block min-h-[auto] min-w-[auto] text-center w-full px-3 py-1 md:min-h-0 md:min-w-0"
    >
      <img src={props.iconSrc} alt="Icon" className={props.iconClassName} />
      {props.label}
    </a>
  );
};
