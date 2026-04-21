import Image from "next/image";
import HistorySvg from "./svg/history_svg";
import TrendsSvg from "./svg/trends.svg";

const TabBar = () => {
    return (
        <div data-name='tab-bar' className="w-full h-full bg-bg2 flex flex-nowrap flex-row">
            <div data-name='history-tab' className="h-full flex-1 flex justify-center items-center">
                <HistorySvg />
            </div>

            <div data-name='trends-tab' className="h-full flex-1 flex justify-center items-center">
                <TrendsSvg />
            </div>

            <div data-name='edit-tab' className="h-full flex-1 flex justify-center items-center">
                <HistorySvg />
            </div>
        </div>
    )
}

export default TabBar;
