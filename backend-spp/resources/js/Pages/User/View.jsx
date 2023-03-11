import DashboardLayout from "@/Layouts/DashboardLayout";
import { useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useRef } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Alert from "@/Components/Alert";
export default function View({ siswa, kelas, jurusan }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        nisn: "",
        nis: "",
        nama: "",
        kelas_id: "",
        jurusan_id: "",
        alamat: "",
        no_tlp: "",
        user_id: "",
    });
    let { flash } = usePage().props;
    useEffect(() => {
        setData({
            nisn: siswa.nisn,
            nis: siswa.nis,
            nama: siswa.nama,
            kelas_id: siswa.kelas_id,
            jurusan_id: siswa.jurusan_id,
            alamat: siswa.alamat,
            no_tlp: siswa.no_tlp,
            user_id: siswa.user_id,
        });
    }, []);
    // useEffect(() => {
    //     console.log(data);
    // }, [siswa, kelas, data, errors]);
    useEffect(() => {
        if (flash) {
            setTimeout(() => {
                flash.success = null;
            }, 1000);
            setTimeout(() => {
                flash.error = null;
            }, 2000);
            setTimeout(() => {
                flash.message = null;
            }, 2000);
        }
        if (flash.success) {
            setTimeout(() => {
                modalHandler(false);
            }, 1000);
        }
        console.log(flash);
    }, [processing, flash]);
    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };
    const submit = (e) => {
        e.preventDefault();

        put(route("siswa.update", siswa.id));
    };

    let modal = useRef();

    function modalHandler(val) {
        if (val) {
            fadeIn(modal.current);
        } else {
            fadeOut(modal.current);
        }
    }
    function fadeOut(el) {
        el.style.opacity = 1;
        (function fade() {
            if ((el.style.opacity -= 0.1) < 0) {
                el.style.display = "none";
            } else {
                requestAnimationFrame(fade);
            }
        })();
    }
    function fadeIn(el, display) {
        el.style.opacity = 0;
        el.style.display = display || "flex";
        (function fade() {
            let val = parseFloat(el.style.opacity);
            if (!((val += 0.2) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    }
    return (
        <DashboardLayout>
            <div
                className="relative flex items-center p-0 mt-6 overflow-hidden bg-center bg-cover min-h-75 rounded-2xl"
                style={{
                    backgroundImage:
                        "url('/assets/images/curved-images/curved0.jpg')",
                    backgroundPositionY: "50%",
                }}
            >
                <span className="absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-purple-700 to-pink-500 opacity-60"></span>
            </div>
            <div className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-32 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
                <div className="flex flex-wrap -mx-3 h-52">
                    <div className="flex-none w-auto max-w-full px-3">
                        <div className="text-base ease-soft-in-out h-52 w-52 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
                            <img
                                src={siswa.image ?? "/assets/images/team-1.jpg"}
                                alt="siswa_image"
                                className="w-full shadow-soft-sm rounded-xl"
                            />
                        </div>
                    </div>
                    <div className="flex-none w-auto max-w-full px-3 my-auto">
                        <div className="h-full">
                            <h5 className="mb-1">{siswa.nama}</h5>
                            <p className="mb-1 font-semibold leading-normal text-sm">
                                <span className="w-16 inline-block">NISN </span>
                                {`: ${siswa.nisn}`}
                            </p>
                            <p className="mb-1 font-semibold leading-normal text-sm">
                                <span className="w-16 inline-block">NIS </span>
                                {`: ${siswa.nis}`}
                            </p>
                            <p className="mb-1 font-semibold leading-normal text-sm">
                                <span className="w-16 inline-block">
                                    KELAS{" "}
                                </span>
                                {`: ${siswa.kelas.kelas}/${siswa.jurusan.jurusan}`}
                            </p>
                            {siswa.alamat && (
                                <p className="mb-1 font-semibold leading-normal text-sm">
                                    <span className="w-16 inline-block">
                                        ALAMAT
                                    </span>
                                    {`: ${siswa.alamat}`}
                                </p>
                            )}
                            {siswa.no_tlp && (
                                <p className="mb-1 font-semibold leading-normal text-sm">
                                    <span className="w-16 inline-block">
                                        NO TELP
                                    </span>
                                    {`: ${siswa.no_tlp}`}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
                        <div className="relative right-0">
                            <ul
                                className="relative flex flex-wrap justify-end p-1 list-none bg-transparent rounded-xl"
                                nav-pills
                                role="tablist"
                            >
                                {/* <li className="z-30 flex-auto text-center">
                                    <a
                                        className="flex hover:text-purple-500 hover:scale-110 z-30 px-0 py-1 mb-0 transition-all border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700"
                                        nav-link
                                        active="true"
                                        href="javascript:;"
                                        role="tab"
                                        aria-selected="true"
                                    >
                                        <div className="w-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    strokeWidth="2"
                                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                />
                                            </svg>
                                        </div>
                                        <span className="ml-1">Change</span>
                                    </a>
                                </li> */}
                                {/* <li className="z-30 flex-auto text-center">
                                    <a
                                        className="z-30 block w-full px-0 py-1 mb-0 transition-all border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700"
                                        nav-link
                                        href="javascript:;"
                                        role="tab"
                                        aria-selected="false"
                                    >
                                        <svg
                                            className="text-slate-700"
                                            width="16px"
                                            height="16px"
                                            viewBox="0 0 40 44"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                        >
                                            <title>document</title>
                                            <g
                                                stroke="none"
                                                strokeWidth="1"
                                                fill="none"
                                                fillRule="evenodd"
                                            >
                                                <g
                                                    transform="translate(-1870.000000, -591.000000)"
                                                    fill="#FFFFFF"
                                                    fillRule="nonzero"
                                                >
                                                    <g transform="translate(1716.000000, 291.000000)">
                                                        <g transform="translate(154.000000, 300.000000)">
                                                            <path
                                                                className="fill-slate-800"
                                                                d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                                                opacity="0.603585379"
                                                            ></path>
                                                            <path
                                                                className="fill-slate-800"
                                                                d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <span className="ml-1">Messages</span>
                                    </a>
                                </li> */}
                                {/* <li className="z-30 flex-auto text-center">
                                    <a
                                        className="z-30 block w-full px-0 py-1 mb-0 transition-colors border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700"
                                        nav-link
                                        href="javascript:;"
                                        role="tab"
                                        aria-selected="false"
                                    >
                                        <svg
                                            className="text-slate-700"
                                            width="16px"
                                            height="16px"
                                            viewBox="0 0 40 40"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                        >
                                            <title>settings</title>
                                            <g
                                                stroke="none"
                                                strokeWidth="1"
                                                fill="none"
                                                fillRule="evenodd"
                                            >
                                                <g
                                                    transform="translate(-2020.000000, -442.000000)"
                                                    fill="#FFFFFF"
                                                    fillRule="nonzero"
                                                >
                                                    <g transform="translate(1716.000000, 291.000000)">
                                                        <g transform="translate(304.000000, 151.000000)">
                                                            <polygon
                                                                className="fill-slate-800"
                                                                opacity="0.596981957"
                                                                points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                                                            ></polygon>
                                                            <path
                                                                className="fill-slate-800"
                                                                d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                                                                opacity="0.596981957"
                                                            ></path>
                                                            <path
                                                                className="fill-slate-800"
                                                                d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <span className="ml-1">Settings</span>
                                    </a>
                                </li> */}
                                <li className="z-30 mr-5 text-center">
                                    <a
                                        className="flex hover:text-purple-500 hover:scale-110 z-30 block w-full px-0 py-1 mb-0 transition-colors border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700"
                                        nav-link
                                        href="javascript:;"
                                        role="tab"
                                        aria-selected="false"
                                        onClick={() => {
                                            modalHandler(true);
                                            setData({
                                                nisn: siswa.nisn,
                                                nis: siswa.nis,
                                                nama: siswa.nama,
                                                kelas_id: siswa.kelas_id,
                                                jurusan_id: siswa.jurusan_id,
                                                alamat: siswa.alamat,
                                                no_tlp: siswa.no_tlp,
                                                user_id: siswa.user_id,
                                            });
                                            return true;
                                        }}
                                    >
                                        <div className="w-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    strokeWidth="2"
                                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                />
                                            </svg>
                                        </div>
                                        <span className="ml-1">Change</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div
                ref={modal}
                className="py-12 z-990 fixed hidden opacity-0 top-0 right-0 bottom-0 left-0 transition duration-150 ease-in-out"
            >
                <div
                    className=" bg-[rgba(0,0,0,0.5)]  py-12 z-990 top-0 right-0 bottom-0 left-0 fixed"
                    onClick={() => modalHandler(false)}
                ></div>
                <div className="py-12 z-990 w-full transition duration-150 ease-in-out fixed">
                    <div
                        role="alert"
                        className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
                    >
                        <div className="w-full sm:max-w-lg mt-6 px-6 py-4 mx-auto bg-white shadow-md overflow-hidden sm:rounded-lg">
                            <form
                                onSubmit={submit}
                                className="flex flex-col gap-2"
                                method="post"
                            >
                                {flash.errors && (
                                    <Alert type="error">{flash.errors}</Alert>
                                )}
                                {flash.success && (
                                    <Alert type="success">
                                        {flash.success}
                                    </Alert>
                                )}

                                <div className="text-center text-xl">
                                    Form Edit Data Siswa
                                </div>
                                <div>
                                    <InputLabel htmlFor="nisn" value="NISN" />

                                    <TextInput
                                        id="nisn"
                                        type="text"
                                        maxLength="10"
                                        minLength="10"
                                        name="nisn"
                                        value={data.nisn}
                                        className="mt-1 block w-full"
                                        autoComplete="nisn"
                                        isFocused={true}
                                        onChange={handleOnChange}
                                    />

                                    <InputError
                                        message={errors.nisn}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel htmlFor="nis" value="NIS" />

                                    <TextInput
                                        id="nis"
                                        maxLength="8"
                                        minLength="8"
                                        type="text"
                                        name="nis"
                                        value={data.nis}
                                        className="mt-1 block w-full"
                                        autoComplete="nis"
                                        isFocused={true}
                                        onChange={handleOnChange}
                                    />

                                    <InputError
                                        message={errors.nis}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel htmlFor="nama" value="NAMA" />

                                    <TextInput
                                        id="nama"
                                        type="text"
                                        name="nama"
                                        value={data.nama}
                                        className="mt-1 block w-full"
                                        autoComplete="nama"
                                        isFocused={true}
                                        onChange={handleOnChange}
                                    />

                                    <InputError
                                        message={errors.nama}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex gap-x-4">
                                    <div className="w-full">
                                        <InputLabel
                                            htmlFor="kelas_id"
                                            value="KELAS"
                                        />

                                        <select
                                            name="kelas_id"
                                            id="kelas_id"
                                            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                                            onChange={handleOnChange}
                                            defaultValue={`${siswa.kelas_id}`}
                                        >
                                            {kelas &&
                                                kelas.map((kel, index) => {
                                                    // return "halo";
                                                    return (
                                                        <option
                                                            key={index}
                                                            value={`${kel.id}`}
                                                            selected={`${
                                                                data.kelas_id ==
                                                                kel.id
                                                            }`}
                                                        >
                                                            {`${kel.kelas}`}
                                                        </option>
                                                    );
                                                })}
                                            <option
                                                value=""
                                                selected={true}
                                            ></option>
                                        </select>

                                        <InputError
                                            message={errors.kelas_id}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <InputLabel
                                            htmlFor="jurusan_id"
                                            value="JURUSAN"
                                        />

                                        <select
                                            name="jurusan_id"
                                            id="jurusan_id"
                                            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                                            onChange={handleOnChange}
                                            defaultValue={`${siswa.jurusan_id}`}
                                        >
                                            {jurusan &&
                                                jurusan.map(
                                                    (jurusan, index) => {
                                                        // return "halo";
                                                        return (
                                                            <option
                                                                key={index}
                                                                value={`${jurusan.id}`}
                                                                selected={`${
                                                                    data.jurusan_id ==
                                                                    jurusan.id
                                                                }`}
                                                            >
                                                                {`${jurusan.jurusan}`}
                                                            </option>
                                                        );
                                                    }
                                                )}
                                            <option
                                                value=""
                                                selected={true}
                                            ></option>
                                        </select>

                                        <InputError
                                            message={errors.jurusan_id}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="alamat"
                                        value="ALAMAT"
                                    />

                                    <TextInput
                                        id="alamat"
                                        type="text"
                                        name="alamat"
                                        area={true}
                                        value={data.alamat}
                                        className="mt-1 block w-full"
                                        autoComplete="alamat"
                                        isFocused={true}
                                        onChange={handleOnChange}
                                    />

                                    <InputError
                                        message={errors.alamat}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="no_tlp"
                                        value="NO TLP"
                                    />

                                    <TextInput
                                        id="no_tlp"
                                        type="text"
                                        name="no_tlp"
                                        value={data.no_tlp}
                                        className="mt-1 block w-full"
                                        autoComplete="no_tlp"
                                        onChange={handleOnChange}
                                    />

                                    <InputError
                                        message={errors.no_tlp}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="flex items-center">
                                    <button
                                        disabled={processing}
                                        className="disabled:bg-gray-400 w-full text-center justify-center inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                    >
                                        {processing
                                            ? "Loading...."
                                            : "Update Data"}
                                    </button>

                                    <button
                                        className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                                        onClick={() => modalHandler(false)}
                                        type="button"
                                    >
                                        Cancel
                                    </button>
                                </div>
                                <button
                                    className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                                    onClick={() => modalHandler(false)}
                                    aria-label="close modal"
                                    role="button"
                                ></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
