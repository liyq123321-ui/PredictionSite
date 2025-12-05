export type MarketCardProps = {
  href: string;
  avatarSrc: string;
  avatarAlt: string;
  title: string;
  hasAvatarBadge?: boolean;
  volumeCount: string;
  traderCount: string;
  traderIconSrc: string;
  displayType:
    | "percentage"
    | "percentageWithChange"
    | "percentageWithTrend"
    | "number"
    | "text"
    | "progressBar"
    | "multiProgressBar";
  percentageValue?: string;
  changeValue?: string;
  changeDirection?: "up" | "down";
  numberValue?: string;
  textValue?: string;
  textColor?: string;
  progressBars?: Array<{
    width: string;
    mdWidth?: string;
    bgColor: string;
    mdBgColor?: string;
    percentage: string;
    label: string;
    borderColor: string;
    mdBorderColor?: string;
  }>;
  showBetButton?: boolean;
  wrapperClassName?: string;
};

export const MarketCard = (props: MarketCardProps) => {
  return (
    <div
      className={
        props.wrapperClassName ||
        "box-border caret-transparent flex flex-col w-full mb-0 md:mb-0.5"
      }
    >
      <a
        href={props.href}
        className="box-border caret-transparent flex flex-col outline-transparent outline-offset-2 outline outline-2 w-full p-2 rounded-none md:rounded-md"
      >
        <div className="items-start box-border caret-transparent gap-x-1 flex flex-col gap-y-1 w-full md:gap-x-0 md:flex-row md:gap-y-0 justify-between">
          <div className="box-border caret-transparent flex w-full gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-4 md:w-[calc(100%_-_192px)]">
            <button className="bg-transparent caret-transparent flex text-center p-0">
              <div
                className={
                  props.hasAvatarBadge
                    ? "relative box-border caret-transparent"
                    : "box-border caret-transparent"
                }
              >
                <img
                  alt={props.avatarAlt}
                  src={props.avatarSrc}
                  className={
                    props.hasAvatarBadge
                      ? "text-transparent aspect-[auto_24_/_24] bg-white box-border shrink-0 h-6 max-w-6 object-cover w-6 mt-0.5 rounded-full shadow-[rgb(255,255,255)_0px_0px_0px_0px,rgb(34,197,94)_0px_0px_0px_1px,rgba(0,0,0,0)_0px_0px_0px_0px]"
                      : "text-transparent aspect-[auto_24_/_24] bg-white box-border shrink-0 h-6 max-w-6 object-cover w-6 mt-0.5 rounded-full"
                  }
                />
                {props.hasAvatarBadge && (
                  <div className="absolute box-border caret-transparent top-[-6.56px] rotate-45 -right-2">
                    <img
                      src="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-16.svg"
                      alt="Icon"
                      className="text-green-500 box-border caret-transparent h-4 w-4"
                    />
                  </div>
                )}
              </div>
            </button>
            <span className="box-border caret-transparent block">
              {props.title}
            </span>
          </div>
          <div className="items-center box-border caret-transparent flex justify-end w-full md:w-fit">
            <div className="box-border caret-transparent flex w-6"></div>
            <div className="box-border caret-transparent flex w-[70px]">
              <span className="box-border caret-transparent block">
                <div className="text-slate-700 box-border caret-transparent h-min align-top ml-1">
                  <div className="items-center box-border caret-transparent gap-x-0.5 flex shrink-0 h-full justify-start gap-y-0.5">
                    <img
                      src="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-11.svg"
                      alt="Icon"
                      className="text-slate-400 box-border caret-transparent shrink-0 h-4 w-4"
                    />
                    {props.volumeCount}
                  </div>
                </div>
              </span>
            </div>
            <div className="box-border caret-transparent flex w-[70px] md:w-10">
              <span className="box-border caret-transparent block">
                <div className="text-slate-500 items-center box-border caret-transparent gap-x-0.5 flex justify-start gap-y-0.5">
                  <img
                    src={props.traderIconSrc}
                    alt="Icon"
                    className="box-border caret-transparent h-3.5 w-3.5"
                  />
                  <span className="text-slate-700 box-border caret-transparent block min-h-[auto] min-w-[auto] md:hidden md:min-h-0 md:min-w-0">
                    {props.traderCount}
                  </span>
                </div>
              </span>
            </div>
            <div className="box-border caret-transparent flex w-20">
              {props.displayType === "percentage" && (
                <span className="text-slate-900 box-border caret-transparent block text-right text-nowrap w-[30.7681px]">
                  {props.percentageValue}
                </span>
              )}
              {props.displayType === "percentageWithChange" && (
                <span className="text-slate-900 box-border caret-transparent block text-right text-nowrap w-[30.7681px]">
                  {props.percentageValue}
                  <span className="box-border caret-transparent text-nowrap">
                    <div
                      className={`text-xs items-center box-border caret-transparent inline-flex leading-4 text-nowrap align-middle mb-0.5 mx-1 px-1 rounded-full ${props.changeDirection === "down" ? "text-red-500 bg-red-500/10" : "text-teal-600 bg-teal-600/10"}`}
                    >
                      <img
                        src={
                          props.changeDirection === "down"
                            ? "https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-13.svg"
                            : "https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-15.svg"
                        }
                        alt="Icon"
                        className="box-border caret-transparent h-2.5 text-nowrap w-2.5 mr-0.5"
                      />
                      {props.changeValue}
                    </div>
                  </span>
                </span>
              )}
              {props.displayType === "number" && (
                <span className="box-border caret-transparent block">
                  <span className="text-slate-900 box-border caret-transparent block text-right w-[30.7681px]">
                    {props.numberValue}
                  </span>
                </span>
              )}
              {props.displayType === "text" && (
                <span
                  className={`box-border caret-transparent block text-right w-[65px]`}
                >
                  <span className={props.textColor}>{props.textValue}</span>
                </span>
              )}
              {props.displayType === "progressBar" && props.progressBars && (
                <span className="bg-white/50 box-border caret-transparent flex align-top">
                  <div className="relative box-border caret-transparent grid h-5 w-[65px]">
                    {props.progressBars.map((bar, index) => (
                      <span
                        key={index}
                        className={`${bar.bgColor} box-border caret-transparent block w-[${bar.width}] ${bar.mdWidth ? `md:w-[${bar.mdWidth}]` : ""}`}
                      >
                        <div className="absolute box-border caret-transparent hidden justify-end max-w-[307.681px] w-[187.5px] z-10 right-0 bottom-0 md:w-[640px]">
                          <div
                            className={`text-xs bg-white box-border caret-transparent gap-x-1 flex leading-4 max-w-full gap-y-1 border mt-1 p-1 rounded-bl rounded-br rounded-tl rounded-tr border-solid ${bar.borderColor} ${bar.mdBorderColor ? `md:${bar.mdBorderColor}` : ""}`}
                          >
                            <div className="font-semibold box-border caret-transparent">
                              {bar.percentage}
                            </div>
                            <div className="box-border caret-transparent flow-root overflow-hidden">
                              {bar.label}
                            </div>
                          </div>
                        </div>
                      </span>
                    ))}
                  </div>
                </span>
              )}
              {props.displayType === "multiProgressBar" &&
                props.progressBars && (
                  <div className="relative bg-white/50 box-border caret-transparent flex h-5 w-[65px]">
                    {props.progressBars.map((bar, index) => (
                      <span
                        key={index}
                        className={`${bar.bgColor} box-border caret-transparent block w-[${bar.width}] ${bar.mdWidth ? `md:bg-${bar.mdBgColor} md:w-[${bar.mdWidth}]` : ""}`}
                      >
                        <div className="absolute box-border caret-transparent hidden justify-end max-w-[307.681px] w-[187.5px] z-10 right-0 bottom-0 md:w-[640px]">
                          <div
                            className={`text-xs bg-white box-border caret-transparent gap-x-1 flex leading-4 max-w-full gap-y-1 border mt-1 p-1 rounded-bl rounded-br rounded-tl rounded-tr border-solid ${bar.borderColor} ${bar.mdBorderColor ? `md:${bar.mdBorderColor}` : ""}`}
                          >
                            <div className="font-semibold box-border caret-transparent">
                              {bar.percentage}
                            </div>
                            <div className="box-border caret-transparent flow-root overflow-hidden">
                              {bar.label}
                            </div>
                          </div>
                        </div>
                      </span>
                    ))}
                  </div>
                )}
            </div>
            <div className="box-border caret-transparent flex w-12">
              <div className="box-border caret-transparent gap-x-2 flex flex-wrap h-min gap-y-2 align-top">
                {props.showBetButton && (
                  <button
                    type="button"
                    className="text-indigo-600 text-xs items-center bg-transparent shadow-[rgb(255,255,255)_0px_0px_0px_0px_inset,rgb(79,70,229)_0px_0px_0px_1px_inset,rgba(0,0,0,0)_0px_0px_0px_0px] caret-transparent flex justify-center leading-4 text-center px-2 py-1 rounded-md"
                  >
                    Bet
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
