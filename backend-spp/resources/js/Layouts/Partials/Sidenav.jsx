import Icons from "@/Components/Icons";
import { Link, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";
function TitleSidenav({ children }) {
    return (
        <li className="w-full mt-4">
            <h6 className="pl-6 ml-2 font-bold leading-tight uppercase text-xs opacity-60">
                {children}
            </h6>
        </li>
    );
}
function ItemSidenav({ active = false, url = "", icon = "", title = "" }) {
    active =
        window.location.href == url ||
        window.location.href.split("?")[0] == url ||
        window.location.href.split(window.location.origin)[1] == url ||
        window.location.href.split(window.location.origin)[1].slice(1) == url ||
        window.location.href
            .split(window.location.origin)[1]
            .slice(1)
            .split("/")
            .includes(url.indexOf("/") == 0 ? url.slice(1) : url) ||
        window.location.href
            .split(window.location.origin)[1]
            .slice(1)
            .split("?")[0]
            .split("/")
            .includes(url.indexOf("/") == 0 ? url.slice(1) : url);
    useEffect(() => {
        console.log(active);
    }, []);
    let aClassName = active
        ? "py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors "
        : "py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors";
    let divClassName = active
        ? "fill-white stroke-white bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5"
        : "shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5";
    return (
        <li className="mt-0.5 w-full">
            <Link className={aClassName} href={url}>
                <div className={divClassName}>{icon}</div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                    {title}
                </span>
            </Link>
        </li>
    );
}

export default function Sidenav() {
    let { auth } = usePage().props;
    return (
        <>
            {/* <!-- sidenav  --> */}
            <aside className="max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent">
                <div className="h-19.5">
                    <i
                        className="absolute top-0 right-0 hidden p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden"
                        sidenav-close="true"
                    ></i>
                    <a
                        className="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700"
                        href="javascript:void(0);"
                        target="_blank"
                    >
                        <img
                            src="/assets/images/logo-ct.png"
                            className="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8"
                            alt="main_logo"
                        />
                        <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">
                            SPP
                        </span>
                    </a>
                </div>

                <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />

                <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
                    <ul className="flex flex-col pl-0 mb-0">
                        <ItemSidenav
                            url={route("dashboard")}
                            title={"Dashboard"}
                            icon={
                                <svg
                                    width="12px"
                                    height="12px"
                                    viewBox="0 0 42 42"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ transform: "scale(1.5)" }}
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <title>office</title>
                                    <g
                                        stroke="none"
                                        strokeWidth="1"
                                        fill="none"
                                        fillRule="evenodd"
                                    >
                                        <g
                                            transform="translate(-1869.000000, -293.000000)"
                                            fill="#FFFFFF"
                                            fillRule="nonzero"
                                        >
                                            <g transform="translate(1716.000000, 291.000000)">
                                                <g transform="translate(153.000000, 2.000000)">
                                                    <path
                                                        className="fill-slate-800 opacity-60"
                                                        d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z"
                                                    ></path>
                                                    <path
                                                        className="fill-slate-800"
                                                        d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z"
                                                    ></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            }
                        />

                        <TitleSidenav>Pages</TitleSidenav>
                        <ItemSidenav
                            url={route("pembayaran.index")}
                            icon={<Icons.pembayaran className={'scale-150'} />}
                            title="Pembayaran"
                        ></ItemSidenav>
                        {auth.user.level == "admin" && (
                            <>
                                <ItemSidenav
                                    url={route("spp.index")}
                                    icon={<Icons.spp className={'scale-150'} />}
                                    title="Spp"
                                ></ItemSidenav>
                                <ItemSidenav
                                    url={route("siswa.index")}
                                    icon={<Icons.siswa className={'scale-150'} />}
                                    title="Siswa"
                                ></ItemSidenav>
                                <ItemSidenav
                                    url={route("petugas.index")}
                                    icon={<Icons.users className={'scale-150'} />}
                                    title="Petugas"
                                ></ItemSidenav>
                                <ItemSidenav
                                    url={route("users.index")}
                                    icon={<Icons.users className={'scale-150'} />}
                                    title="Users"
                                ></ItemSidenav>
                                <ItemSidenav
                                    url={route("kelas.index")}
                                    icon={<Icons.kelas className={'scale-150'} />}
                                    title="Kelas"
                                ></ItemSidenav>
                                <ItemSidenav
                                    url={route("jurusan.index")}
                                    icon={<Icons.jurusan className={'scale-150'} />}
                                    title="Jurusan"
                                ></ItemSidenav>
                            </>
                        )}
                    </ul>
                </div>
            </aside>

            {/* <!-- end sidenav --> */}
        </>
    );
}
