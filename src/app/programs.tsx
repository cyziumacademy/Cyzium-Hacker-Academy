import Link from "next/link"; // ⬅️ add at the top

{/* Additional Learning Tracks */}
<div>
    <h3 className="text-xl font-semibold text-yellow-400 mb-3">
        Our Specialized Bug Bounty Programs
    </h3>
    <div className="flex flex-wrap gap-3">
        <Link href="/programs/jbbh">
            <span className="cursor-pointer bg-slate-700 hover:bg-slate-600 text-gray-200 text-sm font-semibold px-4 py-2 rounded-lg shadow-md transition">
                JBBH
            </span>
        </Link>
        <Link href="/programs/cbbt">
            <span className="cursor-pointer bg-slate-700 hover:bg-slate-600 text-gray-200 text-sm font-semibold px-4 py-2 rounded-lg shadow-md transition">
                CBBT
            </span>
        </Link>
        <Link href="/programs/cbbe">
            <span className="cursor-pointer bg-slate-700 hover:bg-slate-600 text-gray-200 text-sm font-semibold px-4 py-2 rounded-lg shadow-md transition">
                CBBE
            </span>
        </Link>
    </div>
</div>
