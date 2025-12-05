import { MobileHeader } from "../../components/MobileHeader";
import { ContentArea } from "@/sections/MainContent/components/ContentArea";

export const MainContent = () => {
  return (
    <main className="box-border caret-transparent flex basis-[0%] flex-col grow col-end-[span_7] col-start-[span_7] px-0 md:px-4">
      <MobileHeader />
      <div className="box-border caret-transparent mb-0 md:mb-4"></div>
      <ContentArea />
      <div className="text-slate-400 text-sm box-border caret-transparent leading-5 text-center w-full mt-8 mb-4">
        © Manifold Markets, Inc.
        <span className="box-border caret-transparent mx-2">•</span>
        <a href="/terms" className="box-border caret-transparent">
          Terms
        </a>
        <span className="box-border caret-transparent mx-2">•</span>
        <a href="/privacy" className="box-border caret-transparent">
          Privacy
        </a>
      </div>
    </main>
  );
};
