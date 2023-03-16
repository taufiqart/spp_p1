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
import Pagination from "@/Components/Pagination";
import ModalUser from "./Partials/ModalUser";

export default function Index({ user, kelas, jurusan }) {
    const [show, setShow] = useState(false);
    const [showD, setShowD] = useState(false);
    const [showU, setShowU] = useState(false);
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
        // nama: "",
        // nisn: "",
        email: "",
        level: "siswa",
        password: "",
    });

    let { flash, auth } = usePage().props;

    useEffect(() => {
        setLevels(['siswa', 'petugas', 'admin'])
    }, [levels]);
    let d = usePage().props;

    useEffect(() => {
        setLinks(user.links);
        console.log(data);
    }, [user, errors, processing]);

    const onClose = () => {
        // setData({
        //     id: "",
        //     nama: "",
        //     nisn: "",
        //     email: "",
        //     level: "siswa",
        //     password: "",
        // });
        reset();
    };
    useEffect(() => {
        reset();
        // setData({
        //     id: "",
        //     nama: "",
        //     nisn: "",
        //     email: "",
        //     level: "siswa",
        //     password: "",
        // });
    }, [show]);

    const onCloseD = () => {
        setData({
            id: "",
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
                setShowU(false);
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

    const submitU = (e) => {
        e.preventDefault();
        put(route("users.update", data.id));
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("users.store"));
    };

    const deleteSubmit = (e) => {
        e.preventDefault();
        destroy(route("users.update", data.id));
    };

    let paramUpdate = {
        textBtn: "Update Data",
        title: "Update Data User",
        show: showU,
        setShow: setShowU,
        onClose: onClose,
        flash: flash,
        data: data,
        handleOnChange: handleOnChange,
        errors: errors,
        processing: processing,
        levels: levels,
        submit: submitU,
    };
    let paramInsert = {
        textBtn: "Tambah Data",
        title: "Tambah Data User",
        show: show,
        setShow: setShow,
        onClose: onClose,
        flash: flash,
        data: data,
        handleOnChange: handleOnChange,
        errors: errors,
        processing: processing,
        levels: levels,
        submit: submit,
    };

    let paramDelete = {
        show: showD,
        setShow: setShowD,
        onClose: onClose,
        flash: flash,
        data: data,
        handleOnChange: handleOnChange,
        errors: errors,
        processing: processing,
        levels: levels,
        submit: deleteSubmit,
    };
    return (
        <DashboardLayout pages={"Users"}>
            <div
                onClick={() => setShow(true)}
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
                        {/* <Table.Th>NAMA</Table.Th> */}
                        {/* <Table.Th>nisn</Table.Th> */}
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
                                {/* <Table.Td index={idx} length={user.data.length}>
                                    <span className="font-semibold leading-tight text-xs text-slate-400">
                                        {use.nama}
                                    </span>
                                </Table.Td> */}
                                {/* <Table.Td index={idx} length={user.data.length}>
                                    <span className="font-semibold leading-tight text-xs text-slate-400">
                                        {use.nisn}
                                    </span>
                                </Table.Td> */}
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
                                                    // nama: use.nama,
                                                    // nisn: use.nisn,
                                                    email: use.email,
                                                    level: use.level,
                                                });
                                                setShowU(true);
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
                                        {auth.user.email != use.email ? (
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

            <Pagination links={links}></Pagination>

            <ModalUser params={paramDelete} type="delete"></ModalUser>
            <ModalUser params={paramInsert} password={true}></ModalUser>
            <ModalUser params={paramUpdate}></ModalUser>
        </DashboardLayout>
    );
}
