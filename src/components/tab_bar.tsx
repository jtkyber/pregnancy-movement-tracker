'use client'
import HistorySvg from "./svg/history.svg";
import TrendsSvg from "./svg/trends.svg";
import HomeSvg from "./svg/home.svg";
import { usePathname, useRouter } from "next/navigation";

const TabBar = () => {
    const pathName = usePathname();

    return (
        <div data-name='tab-bar' className="w-full h-full bg-bg2 flex flex-nowrap flex-row">
            <div data-name='history-tab' className={`h-full flex-1 flex justify-center items-center`}>
                <div className={`p-3 rounded-2xl ${pathName === '/' ? 'bg-primary-hl/25 [&_*]:fill-primary-hl' : '[&_*]:fill-primary'}`}>
                    <HomeSvg />
                </div>
            </div>

            <div data-name='trends-tab' className={`h-full flex-1 flex justify-center items-center`}>
                <div className={`p-3 rounded-2xl ${pathName === '/trends' ? 'bg-primary-hl/25 [&_*]:fill-primary-hl' : '[&_*]:fill-primary'}`}>
                    <TrendsSvg />
                </div>
            </div>

            <div data-name='edit-tab' className={`h-full flex-1 flex justify-center items-center`}>
                <div className={`p-3 rounded-2xl ${pathName === '/history' ? 'bg-primary-hl/25 [&_*]:fill-primary-hl' : '[&_*]:fill-primary'}`}>
                    <HistorySvg />
                </div>
            </div>
        </div>
    )
}

export default TabBar;
