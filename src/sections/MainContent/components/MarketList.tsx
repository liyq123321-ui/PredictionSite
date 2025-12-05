// import { useNavigate } from "react-router-dom";
import { MarketCard2 } from '../../../components/market/MarketCard1';
import { useMarkets } from "../../../hooks/useMarket";
import type { Market } from "../../../domains/market/model/Market";

export const MarketList = () => {
  const { data: markets, isLoading, error } = useMarkets();

  // const navigate  = useNavigate();
  if (isLoading) return <div>加载中...</div>;
  if (error) return <div>加载失败: {error.message}</div>;

  return (

    <div className="box-border caret-transparent flex flex-col w-full mb-0 md:mb-0.5">
        {(markets?.data.items ?? []).map((market: Market) => (
                    // <MarketCard 
            //   key={market.id} 
            //   market={market} 
            //   onClick={(id) => navigate(`/market/${id}`)}
            // />
            <MarketCard2 
              href={`/market/${market.id}`}
              key={market.id}
              avatarAlt={market.id}
              title={market.question}
              avatarSrc="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-11.svg"
              volumeCount={market.volume.toString()}
              traderCount="123"
              traderIconSrc="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-12.svg"
              displayType="number"
            />
    
          ))}

{/* 
    //   <MarketCard
    //     href="/Joshua/2025-times-person-of-the-year-conso"
    //     avatarSrc="https://c.animaapp.com/mimg0e4nEiOQOI/assets/51.png"
    //     avatarAlt="Joshua avatar"
    //     title="Who will be TIME Magazine's 2025 Person of the Year?"
    //     volumeCount="1.7k"
    //     traderCount="1.9k"
    //     traderIconSrc="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-12.svg"
    //     displayType="multiProgressBar"
    //     progressBars={[
    //       {
    //         width: "27.2012%",
    //         mdWidth: "28.5455%",
    //         bgColor: "bg-blue-300",
    //         percentage: "29%",
    //         label:
    //           "Artificial Intelligence (Including ChatGPT or any other variation)",
    //         borderColor: "border-blue-300",
    //       },
    //       {
    //         width: "20.9819%",
    //         mdWidth: "20.3301%",
    //         bgColor: "bg-lime-400",
    //         percentage: "20%",
    //         label: "Jensen Huang",
    //         borderColor: "border-lime-400",
    //       },
    //       {
    //         width: "16.2707%",
    //         mdWidth: "16.1006%",
    //         bgColor: "bg-lime-300",
    //         percentage: "16%",
    //         label: "Pope Leo XIV (Robert Prevost)",
    //         borderColor: "border-lime-300",
    //       },
    //       {
    //         width: "12.7692%",
    //         mdWidth: "12.6269%",
    //         bgColor: "bg-slate-300",
    //         percentage: "13%",
    //         label: "Other",
    //         borderColor: "border-slate-300",
    //       },
    //       {
    //         width: "6.21955%",
    //         mdWidth: "6.12051%",
    //         bgColor: "bg-blue-400",
    //         percentage: "6%",
    //         label: "Donald Trump and/or JD Vance",
    //         borderColor: "border-blue-400",
    //       },
    //       {
    //         width: "5.87717%",
    //         mdWidth: "5.7302%",
    //         bgColor: "bg-blue-500",
    //         percentage: "6%",
    //         label: "Zohran Mamdani",
    //         borderColor: "border-blue-500",
    //       },
    //       {
    //         width: "2.76884%",
    //         mdWidth: "2.7094%",
    //         bgColor: "bg-fuchsia-500",
    //         percentage: "3%",
    //         label: "Sam Altman",
    //         borderColor: "border-fuchsia-500",
    //       },
    //       {
    //         width: "1.73228%",
    //         mdWidth: "1.71009%",
    //         bgColor: "bg-pink-200",
    //         percentage: "1.7%",
    //         label: "Gen Z",
    //         borderColor: "border-pink-200",
    //       },
    //       {
    //         width: "1.1011%",
    //         mdWidth: "1.09314%",
    //         bgColor: "bg-emerald-400",
    //         percentage: "1.1%",
    //         label: "Benjamin Netanyahu",
    //         borderColor: "border-emerald-400",
    //       },
    //       {
    //         width: "0.739705%",
    //         mdWidth: "0.734929%",
    //         bgColor: "bg-red-600",
    //         percentage: "0.7%",
    //         label:
    //           'Ozempic (Including "Semiglutide", "GLPs", "Eli Lily", etc )',
    //         borderColor: "border-red-600",
    //       },
    //       {
    //         width: "0.561527%",
    //         mdWidth: "0.557565%",
    //         bgColor: "bg-pink-500",
    //         percentage: "0.6%",
    //         label: "Demis Hassabis",
    //         borderColor: "border-pink-500",
    //       },
    //       {
    //         width: "0.55066%",
    //         mdWidth: "0.546442%",
    //         bgColor: "bg-orange-400",
    //         percentage: "0.5%",
    //         label: "Elon Musk",
    //         borderColor: "border-orange-400",
    //       },
    //       {
    //         width: "0.54854%",
    //         mdWidth: "0.544984%",
    //         bgColor: "bg-amber-500",
    //         percentage: "0.5%",
    //         label: "Charlie Kirk ",
    //         borderColor: "border-amber-500",
    //       },
    //       {
    //         width: "0.533217%",
    //         mdWidth: "0.530254%",
    //         bgColor: "bg-amber-300",
    //         percentage: "0.5%",
    //         label: "Jeffrey Epstein ",
    //         borderColor: "border-amber-300",
    //       },
    //       {
    //         width: "0.456588%",
    //         mdWidth: "0.443425%",
    //         bgColor: "bg-amber-200",
    //         percentage: "0.4%",
    //         label: '[Any variation of "The Victims of War"]',
    //         borderColor: "border-amber-200",
    //       },
    //       {
    //         width: "0.349463%",
    //         mdWidth: "0.346944%",
    //         bgColor: "bg-red-500",
    //         percentage: "0.3%",
    //         label: "Xi Jinping",
    //         borderColor: "border-red-500",
    //       },
    //       {
    //         width: "0.243451%",
    //         mdWidth: "0.241067%",
    //         bgColor: "bg-rose-300",
    //         percentage: "0.2%",
    //         label: '[Any variation of "The Courts"]',
    //         borderColor: "border-rose-300",
    //       },
    //       {
    //         width: "0.215152%",
    //         mdWidth: "0.214131%",
    //         bgColor: "bg-yellow-400",
    //         percentage: "0.2%",
    //         label: "Sydney Sweeney",
    //         borderColor: "border-yellow-400",
    //       },
    //       {
    //         width: "0.20631%",
    //         mdWidth: "0.205383%",
    //         bgColor: "bg-green-500",
    //         percentage: "0.2%",
    //         label: "Jerome Powell ",
    //         borderColor: "border-green-500",
    //       },
    //       {
    //         width: "0.178721%",
    //         mdWidth: "0.177986%",
    //         bgColor: "bg-orange-300",
    //         percentage: "0.2%",
    //         label: "Larry Ellison",
    //         borderColor: "border-orange-300",
    //       },
    //       {
    //         width: "0.1357%",
    //         mdWidth: "0.135267%",
    //         bgColor: "bg-pink-400",
    //         percentage: "0.1%",
    //         label:
    //           "Prediction Markets [including any founder/s or platform/s by name]",
    //         borderColor: "border-pink-400",
    //       },
    //       {
    //         width: "0.126085%",
    //         mdWidth: "0.12479%",
    //         bgColor: "bg-amber-500",
    //         percentage: "0.1%",
    //         label: "Vladimir Putin",
    //         borderColor: "border-amber-500",
    //       },
    //       {
    //         width: "0.117743%",
    //         mdWidth: "0.11638%",
    //         bgColor: "bg-purple-400",
    //         percentage: "0.1%",
    //         label: "Gavin Newsom ",
    //         borderColor: "border-purple-400",
    //       },
    //       {
    //         width: "0.054863%",
    //         mdWidth: "0.0544994%",
    //         bgColor: "bg-sky-600",
    //         percentage: "0.1%",
    //         label: "AOC",
    //         borderColor: "border-sky-600",
    //       },
    //       {
    //         width: "0.0504522%",
    //         mdWidth: "0.0497224%",
    //         bgColor: "bg-green-300",
    //         percentage: "0.0%",
    //         label: '[Any variation of "Trump Prosecutors"]',
    //         borderColor: "border-green-300",
    //       },
    //       {
    //         width: "0.0099902%",
    //         mdWidth: "0.0098885%",
    //         bgColor: "bg-yellow-400",
    //         percentage: "0.0%",
    //         label: "Beyonce",
    //         borderColor: "border-yellow-400",
    //       },
    //     ]}
    //     showBetButton={true}
    //   /> */}
    </div>
  );
};
