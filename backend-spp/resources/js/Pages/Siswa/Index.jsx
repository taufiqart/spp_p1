import Modal from "@/Components/Modal";
import Table from "@/Components/Table";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Alert from "@/Components/Alert";
import Pagination from "@/Components/Pagination";
import ModalSiswa from "./Partials/ModalSiswa";
export default function Index({ siswa, kelas, jurusan, user }) {
    const [show, setShow] = useState(false);
    const [showD, setShowD] = useState(false);
    const [showU, setShowU] = useState(false);
    const [links, setLinks] = useState("");
    // const [si, setLinks] = useState('');

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
        nisn: "",
        nis: "",
        nama: "",
        kelas_id: "1",
        jurusan_id: "1",
        alamat: "",
        no_tlp: "",
        user_id: "",
    });

    let { flash } = usePage().props;
    useEffect(() => {
        console.log(siswa);
        setLinks(siswa.links);
        console.log(links);
    }, []);

    const onClose = () => {
        reset();
    };
    useEffect(() => {
        reset();
    }, [show]);

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
                setShowU(false);
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

        post(route("siswa.store", data.id));
    };
    const submitU = (e) => {
        e.preventDefault();

        put(route("siswa.update", data.id));
    };
    const deleteSubmit = (e) => {
        e.preventDefault();
        destroy(route("siswa.update", data.id));
    };
    let paramUpdate = {
        textBtn: "Update Data",
        title: "Update Data Siswa",
        show: showU,
        setShow: setShowU,
        onClose: onClose,
        flash: flash,
        data: data,
        handleOnChange: handleOnChange,
        errors: errors,
        processing: processing,
        submit: submitU,
        kelas: kelas,
        jurusan: jurusan,
        user: user,
    };

    let paramInsert = {
        textBtn: "Tambah Data",
        title: "Tambah Data Siswa",
        show: show,
        setShow: setShow,
        onClose: onClose,
        flash: flash,
        data: data,
        handleOnChange: handleOnChange,
        errors: errors,
        processing: processing,
        submit: submit,
        kelas: kelas,
        jurusan: jurusan,
        user: user,
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
        submit: deleteSubmit,
    };

    return (
        <DashboardLayout pages={"Siswa"}>
            <div
                onClick={() => setShow(true)}
                className={
                    "bg-blue-500 w-28 text-center text-white rounded-md mb-4 py-2"
                }
            >
                <button>+ New</button>
            </div>
            <Table
                titleHeader={"Data Siswa"}
                thead={
                    <>
                        <Table.Th>NISN</Table.Th>
                        <Table.Th>NIS</Table.Th>
                        <Table.Th>NAMA</Table.Th>
                        <Table.Th>KELAS</Table.Th>
                        <Table.Th>JURUSAN</Table.Th>
                        <Table.Th>ALAMAT</Table.Th>
                        <Table.Th>NO TELP</Table.Th>
                        <Table.Th></Table.Th>
                    </>
                }
            >
                {siswa.data &&
                    siswa.data.map((sis, idx) => {
                        return (
                            <tr key={idx}>
                                <Table.Td
                                    index={idx}
                                    length={siswa.data.length}
                                >
                                    <span className="font-semibold leading-tight text-xs text-slate-400">
                                        {sis.nisn}
                                    </span>
                                </Table.Td>
                                <Table.Td
                                    index={idx}
                                    length={siswa.data.length}
                                >
                                    <span className="font-semibold leading-tight text-xs text-slate-400">
                                        {sis.nis}
                                    </span>
                                </Table.Td>
                                <Table.Td
                                    index={idx}
                                    length={siswa.data.length}
                                >
                                    <span className="font-semibold leading-tight text-xs text-slate-400">
                                        {sis.nama}
                                    </span>
                                </Table.Td>
                                <Table.Td
                                    index={idx}
                                    length={siswa.data.length}
                                >
                                    <span className="font-semibold leading-tight text-xs text-slate-400">
                                        {sis.kelas.kelas}
                                    </span>
                                </Table.Td>
                                <Table.Td
                                    index={idx}
                                    length={siswa.data.length}
                                >
                                    <span className="font-semibold leading-tight text-xs text-slate-400">
                                        {sis.jurusan.jurusan}
                                    </span>
                                </Table.Td>
                                <Table.Td
                                    index={idx}
                                    length={siswa.data.length}
                                >
                                    <span className="font-semibold leading-tight text-xs text-slate-400">
                                        {sis.alamat}
                                    </span>
                                </Table.Td>
                                <Table.Td
                                    index={idx}
                                    length={siswa.data.length}
                                >
                                    <span className="font-semibold leading-tight text-xs text-slate-400">
                                        {sis.no_tlp}
                                    </span>
                                </Table.Td>
                                <Table.Td
                                    index={idx}
                                    length={siswa.data.length}
                                >
                                    <span className="font-semibold leading-tight text-xs text-slate-400">
                                        {sis.user?.email}
                                    </span>
                                </Table.Td>
                                <Table.Td
                                    index={idx}
                                    length={siswa.data.length}
                                >
                                    <div className="flex item-center justify-center">
                                        <Link href={`siswa/${sis.id}`}>
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
                                                    id: sis.id,
                                                    nisn: sis.nisn,
                                                    nis: sis.nis,
                                                    nama: sis.nama,
                                                    kelas_id: sis.kelas_id,
                                                    jurusan_id: sis.jurusan_id,
                                                    alamat: sis.alamat,
                                                    no_tlp: sis.no_tlp,
                                                    user_id: sis.user_id,
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
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                onClick={() => {
                                                    setData({
                                                        id: sis.id,
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
                                    </div>
                                </Table.Td>
                            </tr>
                        );
                    })}
            </Table>

            <Pagination links={links}></Pagination>

            <ModalSiswa params={paramDelete} type="delete"></ModalSiswa>
            <ModalSiswa params={paramInsert}></ModalSiswa>
            <ModalSiswa params={paramUpdate}></ModalSiswa>
        </DashboardLayout>
    );
}
