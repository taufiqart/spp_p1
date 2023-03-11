import React from "react";

function Card({ children, className }) {
    return (
        <>
            <div
                className={
                    `w-full px-3 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none ` +
                    (className ?? "")
                }
            >
                <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                    <div className="flex-auto p-4">
                        <div className="flex flex-wrap -mx-3">{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
function MiniCard({ children, className }) {
    return (
        <>
            <div
                className={
                    `w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4 ` +
                    (className ?? "")
                }
            >
                <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                    <div className="flex-auto p-4">
                        <div className="flex flex-row -mx-3">{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

Card.sm = MiniCard;
export default Card;
