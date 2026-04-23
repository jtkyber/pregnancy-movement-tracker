'use client'
import { CSSProperties } from "react";
import { removeDzContainer } from "@/utils/dz";
import MvmtAdder from "./_components/mvmt_adder";

export default function Home() {
    removeDzContainer();

    return (
        <main data-name="container" className="relative bg-inherit w-full">
            <div className="w-full h-full overflow-y-auto">
            </div>

            <MvmtAdder />
        </main>
    );
}
