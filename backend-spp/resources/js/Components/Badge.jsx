import React from "react";

export default function Badge({ children, color = 0 }) {
    let style = [
        "bg-green-200 text-green-600 ",
        "bg-yellow-200 text-yellow-600 ",
        "bg-purple-200 text-purple-600 ",
        "bg-red-200 text-red-600 ",
    ];
    return (
        <span className={style[color] + "py-1 px-3 rounded-full text-xs"}>
            {children}
        </span>
    );
}
