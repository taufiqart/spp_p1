import React from "react";

function Th({ className, children }) {
    return (
        <th
            className={
                `px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70 ` +
                (className ?? "")
            }
        >
            {children}
        </th>
    );
}
function Td({ className, children, index, length }) {
    return (
        <td
            className={
                `p-2 px-6 align-middle bg-transparent whitespace-nowrap shadow-transparent ` +
                (className ?? "") +
                (index == length - 1 ? " border-b-0" : "border-b")
            }
        >
            {children}
        </td>
    );
}

function Table({ titleHeader, thead, children }) {
    return (
        <div className="flex flex-wrap -mx-3">
            <div className="flex-none w-full max-w-full px-3">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                    <div className="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                        <h6>{titleHeader}</h6>
                    </div>
                    <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto">
                            <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                                <thead className="align-bottom">
                                    <tr>{thead}</tr>
                                </thead>
                                <tbody>{children}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
Table.Th = Th;
Table.Td = Td;
export default Table;
