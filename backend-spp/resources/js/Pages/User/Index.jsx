import Modal from "@/Components/Modal";
import Table from "@/Components/Table";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Alert from "@/Components/Alert";
import Badge from "@/Components/Badge";
import Card from "@/Layouts/Partials/Card";

export default function Index({ user, kelas, jurusan }) {
    const [show, setShow] = useState(false);
    const [showD, setShowD] = useState(false);
    const [showI, setShowI] = useState(false);
    const [links, setLinks] = useState("");
    const [levels, setLevels] = useState([]);

    const {
        data,
        setData,
        put,
        post,
        processing,
        errors,
        delete: destroy,
        reset,
    } = useForm({
        id: "",
        nama: "",
        username: "",
        email: "",
        level: "",
        password: "",
    });

    let { flash, auth } = usePage().props;

    useEffect(() => {
        user.data &&
            user.data.forEach((e) => {
                if (!levels.includes(e.level)) {
                    setLevels([...levels, e.level]);
                }
            });
    }, [levels]);
    let d = usePage().props;

    useEffect(() => {
        setLinks(user.links);
        console.log(data);
    }, [user, errors, processing]);

    const onClose = () => {
        setData({
            id: "",
            nama: "",
            username: "",
            email: "",
            level: "",
            password: "",
        });
    };

    const onCloseD = () => {
        setData({
            id: "",
        });
    };
    const onCloseI = () => {
        setData({
            id: "",
            nama: "",
            username: "",
            email: "",
            level: "",
            password: "",
        });
    };

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
                setShow(false);
            }, 1000);
        }
        if (flash.success) {
            setTimeout(() => {
                setShowD(false);
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
        put(route("users.update", data.id));
    };

    const submitI = (e) => {
        e.preventDefault();
        post(route("users.store"));
    };

    const deleteSubmit = (e) => {
        e.preventDefault();
        destroy(route("users.update", data.id));
    };

    return (
        <DashboardLayout>
            <div
                onClick={() => setShowI(true)}
                className={
                    "bg-blue-500 w-28 text-center text-white rounded-md mb-4 py-2"
                }
            >
                <button>+ New</button>
            </div>
            <Table
                titleHeader={"Data User"}
                thead={
                    <>
                        <Table.Th>NAMA</Table.Th>
                        <Table.Th>USERNAME</Table.Th>
                        <Table.Th>EMAIL</Table.Th>
                        <Table.Th>LEVEL</Table.Th>
                        <Table.Th></Table.Th>
                    </>
                }
            >
                {user.data &&
                    user.data.map((use, idx) => {
                        return (
                            <tr key={idx}>
                                <Table.Td index={idx} length={user.data.length}>
                                    <span className="font-semibold leading-tight text-xs text-slate-400">
                                        {use.nama}
                                    </span>
                                </Table.Td>
                                <Table.Td index={idx} length={user.data.length}>
                                    <span className="font-semibold leading-tight text-xs text-slate-400">
                                        {use.username}
                                    </span>
                                </Table.Td>
                                <Table.Td index={idx} length={user.data.length}>
                                    <span className="font-semibold leading-tight text-xs text-slate-400">
                                        {use.email}
                                    </span>
                                </Table.Td>
                                <Table.Td index={idx} length={user.data.length}>
                                    <Badge
                                        color={
                                            use.level == "admin"
                                                ? 0
                                                : use.level == "petugas"
                                                ? 1
                                                : 2
                                        }
                                    >
                                        {use.level}
                                    </Badge>
                                </Table.Td>
                                <Table.Td index={idx} length={user.data.length}>
                                    <div className="flex item-center justify-center">
                                        <Link href={`users/${use.id}`}>
                                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                    />
                                                </svg>
                                            </div>
                                        </Link>
                                        <div
                                            className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                                            onClick={() => {
                                                setData({
                                                    id: use.id,
                                                    nama: use.nama,
                                                    username: use.username,
                                                    email: use.email,
                                                    level: use.level,
                                                });
                                                setShow(true);
                                            }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                />
                                            </svg>
                                        </div>
                                        {auth.user.username != use.username ? (
                                            <>
                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        onClick={() => {
                                                            setData({
                                                                id: use.id,
                                                            });
                                                            setShowD(true);
                                                        }}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                        />
                                                    </svg>
                                                </div>
                                            </>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </Table.Td>
                            </tr>
                        );
                    })}
            </Table>

            {/* pagination */}

            <nav aria-label="Page navigation example">
                <ul className="inline-flex items-center -space-x-px">
                    {links &&
                        links.map((link, index) => {
                            return (
                                <li key={index + link.label}>
                                    <a
                                        href={link.url ?? "#"}
                                        className={
                                            (index == 0
                                                ? "rounded-l-lg "
                                                : index == links.length - 1
                                                ? "rounded-r-lg "
                                                : "") +
                                            "px-3 py-2 leading-tight " +
                                            (link.active
                                                ? "text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                                : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white")
                                        }
                                    >
                                        {index == 0 ? (
                                            <>
                                                <span className="sr-only">
                                                    Previous
                                                </span>
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </>
                                        ) : index == links.length - 1 ? (
                                            <>
                                                <span className="sr-only">
                                                    Next
                                                </span>
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </>
                                        ) : (
                                            link.label
                                        )}
                                    </a>
                                </li>
                            );
                        })}
                </ul>
            </nav>

            {/* end pagination */}

            <Modal show={showD} setShow={setShowD} onClose={() => onCloseD()}>
                <div className="w-full my-6 px-6 py-4 mx-auto bg-white overflow-hidden sm:rounded-lg">
                    {flash.error && <Alert type="error">{flash.error}</Alert>}
                    {flash.success && (
                        <Alert type="success">{flash.success}</Alert>
                    )}

                    <h4>Yakin ingin menghapus data ?</h4>
                    <div className="flex items-center justify-end mt-8">
                        <button
                            type="button"
                            onClick={(e) => deleteSubmit(e)}
                            disabled={processing}
                            className="disabled:opacity-40 text-center justify-center inline-flex items-center px-4 py-2 bg-red-800 border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:opacity-80 focus:opacity-80 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                        >
                            {processing ? "Loading...." : "Delete data"}
                        </button>
                        <button
                            className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                            onClick={() => setShowD(false)}
                            type="button"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>

            <Modal show={showI} onClose={() => onCloseI()} setShow={setShowI}>
                <div className="w-full my-6 px-6 py-4 mx-auto bg-white overflow-hidden sm:rounded-lg">
                    <form
                        onSubmit={submitI}
                        className="flex flex-col gap-2"
                        method="post"
                    >
                        {flash.error && (
                            <Alert type="error">{flash.error}</Alert>
                        )}
                        {flash.success && (
                            <Alert type="success">{flash.success}</Alert>
                        )}

                        <div className="text-center text-xl">
                            Form Tambah Data User
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
                        <div>
                            <InputLabel htmlFor="username" value="USERNAME" />

                            <TextInput
                                id="username"
                                type="text"
                                name="username"
                                value={data.username}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={handleOnChange}
                            />

                            <InputError
                                message={errors.username}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="email" value="EMAIL" />

                            <TextInput
                                id="email"
                                type="text"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="email"
                                isFocused={true}
                                onChange={handleOnChange}
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="password" value="PASSWORD" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="password"
                                isFocused={true}
                                onChange={handleOnChange}
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="level" value="LEVEL" />

                            <select
                                name="level"
                                id="level"
                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                                onChange={handleOnChange}
                                defaultValue={data.level}
                            >
                                {levels &&
                                    levels.map((level, index) => {
                                        return (
                                            <option
                                                key={index + level}
                                                value={`${level}`}
                                                selected={data.level == level}
                                            >
                                                {`${level}`}
                                            </option>
                                        );
                                    })}
                            </select>

                            <InputError
                                message={errors.level}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center">
                            <button
                                disabled={processing}
                                className="disabled:bg-gray-400 w-full text-center justify-center inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                            >
                                {processing ? "Loading...." : "Tambah Data"}
                            </button>

                            <button
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                                onClick={() => setShowI(false)}
                                type="button"
                            >
                                Cancel
                            </button>
                        </div>
                        <button
                            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                            onClick={() => setShowI(false)}
                            aria-label="close modal"
                            role="button"
                        ></button>
                    </form>
                </div>
            </Modal>
            <Modal show={show} onClose={() => onClose()} setShow={setShow}>
                <div className="w-full my-6 px-6 py-4 mx-auto bg-white overflow-hidden sm:rounded-lg">
                    <form
                        onSubmit={submit}
                        className="flex flex-col gap-2"
                        method="post"
                    >
                        {flash.error && (
                            <Alert type="error">{flash.error}</Alert>
                        )}
                        {flash.success && (
                            <Alert type="success">{flash.success}</Alert>
                        )}

                        <div className="text-center text-xl">
                            Form Edit Data User
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
                        <div>
                            <InputLabel htmlFor="username" value="USERNAME" />

                            <TextInput
                                id="username"
                                type="text"
                                name="username"
                                value={data.username}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={handleOnChange}
                            />

                            <InputError
                                message={errors.username}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="email" value="EMAIL" />

                            <TextInput
                                id="email"
                                type="text"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="email"
                                isFocused={true}
                                onChange={handleOnChange}
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="level" value="LEVEL" />

                            <select
                                name="level"
                                id="level"
                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                                onChange={handleOnChange}
                                defaultValue={data.level}
                            >
                                {data.level == "admin" ? (
                                    <option
                                        value={`${data.level}`}
                                        selected={data.level}
                                    >
                                        {`${data.level}`}
                                    </option>
                                ) : (
                                    levels &&
                                    levels.map((level, index) => {
                                        return (
                                            <option
                                                key={index + level}
                                                value={`${level}`}
                                                selected={data.level == level}
                                            >
                                                {`${level}`}
                                            </option>
                                        );
                                    })
                                )}
                            </select>

                            <InputError
                                message={errors.level}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center">
                            <button
                                disabled={processing}
                                className="disabled:bg-gray-400 w-full text-center justify-center inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                            >
                                {processing ? "Loading...." : "Update Data"}
                            </button>

                            <button
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                                onClick={() => setShow(false)}
                                type="button"
                            >
                                Cancel
                            </button>
                        </div>
                        <button
                            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                            onClick={() => setShow(false)}
                            aria-label="close modal"
                            role="button"
                        ></button>
                    </form>
                </div>
            </Modal>
        </DashboardLayout>
    );
}
