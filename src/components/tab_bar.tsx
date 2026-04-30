'use client'
import HistorySvg from "./svg/history.svg";
import TrendsSvg from "./svg/trends.svg";
import HomeSvg from "./svg/home.svg";
import { usePathname, useRouter } from "next/navigation";

const TabBar = () => {
    const pathName = usePathname();
    const router = useRouter();

    const handleHomeClick = () => {
        if (pathName !== '/') router.push('/');
    }
    const handleTrendsClick = () => {
        if (pathName !== '/trends') router.push('/trends');
    }
    const handleHistoryClick = () => {
        if (pathName !== '/history') router.push('/history');
    }

    return (
        <div data-name='tab-bar' className="w-full h-full bg-bg2 flex flex-nowrap flex-row">
            <div data-name='history-tab' className={`h-full flex-1 flex justify-center items-center`}>
                <button onClick={handleHomeClick} className={`p-3 rounded-2xl ${pathName === '/' ? 'bg-primary-hl/25 [&_*]:fill-primary-hl' : '[&_*]:fill-primary'}`}>
                    <HomeSvg />
                </button>
            </div>

            <div data-name='trends-tab' className={`h-full flex-1 flex justify-center items-center`}>
                <button onClick={handleTrendsClick} className={`p-3 rounded-2xl ${pathName === '/trends' ? 'bg-primary-hl/25 [&_*]:fill-primary-hl' : '[&_*]:fill-primary'}`}>
                    <TrendsSvg />
                </button>
            </div>

            <div data-name='edit-tab' className={`h-full flex-1 flex justify-center items-center`}>
                <button onClick={handleHistoryClick} className={`p-3 rounded-2xl ${pathName === '/history' ? 'bg-primary-hl/25 [&_*]:fill-primary-hl' : '[&_*]:fill-primary'}`}>
                    <HistorySvg />
                </button>
            </div>
        </div>
    )
}

export default TabBar;
