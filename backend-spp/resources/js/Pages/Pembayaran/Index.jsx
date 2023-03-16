import Table from "@/Components/Table";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

import Pagination from "@/Components/Pagination";
import ModalPembayaran from "./Partials/ModalPembayaran";
import Badge from "@/Components/Badge";

export default function Index({ pembayaran, siswa, spp }) {
    const [show, setShow] = useState(false);
    const [showD, setShowD] = useState(false);
    const [showU, setShowU] = useState(false);
    const [links, setLinks] = useState("");

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
        siswa_id: "",
        tgl_bayar: "",
        spp_id: "",
        jumlah_bayar: "",
    });

    let { flash, auth } = usePage().props;

    useEffect(() => {
        setLinks(pembayaran.links);
        // console.log(data);
    }, [pembayaran, errors, processing, show, showU]);

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
                setShowD(false);
                setShowU(false);
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

    useEffect(() => {
        setData(
            "jumlah_bayar",
            spp.find((sp) => sp.id == data.spp_id)?.nominal
        );
    }, [data.spp_id]);

    const submitU = (e) => {
        e.preventDefault();
        put(route("pembayaran.update", data.id));
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("pembayaran.store"));
    };

    const deleteSubmit = (e) => {
        e.preventDefault();
        destroy(route("pembayaran.update", data.id));
    };

    let paramUpdate = {
        textBtn: "Update Data",
        title: "Update Data Pembayaran",
        show: showU,
        setShow: setShowU,
        onClose: onClose,
        flash: flash,
        data: data,
        handleOnChange: handleOnChange,
        errors: errors,
        processing: processing,
        // levels: levels,
        submit: submitU,
        siswa: siswa,
        spp: spp,
    };
    let paramInsert = {
        textBtn: "Tambah Data",
        title: "Tambah Data Pembayaran",
        show: show,
        setShow: setShow,
        onClose: onClose,
        flash: flash,
        data: data,
        handleOnChange: handleOnChange,
        errors: errors,
        processing: processing,
        // levels: levels,
        submit: submit,
        siswa: siswa,
        spp: spp,
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
        // levels: levels,
        submit: deleteSubmit,
    };
    return (
        <DashboardLayout pages={"Pembayaran"}>
            {auth.user.level != "siswa" ? (
                <div
                    onClick={() => setShow(true)}
                    className={
                        "bg-blue-500 w-28 text-center text-white rounded-md mb-4 py-2"
                    }
                >
                    <button>+ New</button>
                </div>
            ) : (
                ""
            )}
            <Table
                titleHeader={"Data Pembayaran"}
                thead={
                    <>
                        <Table.Th>SISWA</Table.Th>
                        <Table.Th>PETUGAS</Table.Th>
                        <Table.Th>TANGGAL BAYAR</Table.Th>
                        <Table.Th>SPP</Table.Th>
                        <Table.Th>TOTAL BAYAR</Table.Th>
                        <Table.Th>STATUS</Table.Th>
                        {auth.user.level != "siswa" ? (
                            <Table.Th></Table.Th>
                        ) : (
                            ""
                        )}
                    </>
                }
            >
                {pembayaran.data &&
                    pembayaran.data.map((pembaya, idx) => {
                        return (
                            <tr key={idx}>
                                <Table.Td
                                    index={idx}
                                    length={pembayaran.data.length}
                                >
                                    <span className="font-semibold leading-tight text-xs text-slate-400">
                                        {pembaya.siswa.nama}
                                    </span>
                                </Table.Td>
                                <Table.Td
                                    index={idx}
                                    length={pembayaran.data.length}
                                >
                                    <span className="font-semibold leading-tight text-xs text-slate-400">
                                        {pembaya.petugas.siswa?.nama}
                                    </span>
                                </Table.Td>
                                <Table.Td
                                    index={idx}
                                    length={pembayaran.data.length}
                                >
                                    <span className="font-semibold leading-tight text-xs text-slate-400">
                                        {pembaya.tgl_bayar}
                                    </span>
                                </Table.Td>
                                <Table.Td
                                    index={idx}
                                    length={pembayaran.data.length}
                                >
                                    <span className="font-semibold leading-tight text-xs text-slate-400">
                                        {`${pembaya.spp.tahun} / ${pembaya.spp.bulan} | Rp. ${pembaya.spp.nominal}`}
                                    </span>
                                </Table.Td>
                                <Table.Td
                                    index={idx}
                                    length={pembayaran.data.length}
                                >
                                    <span className="font-semibold leading-tight text-xs text-slate-400">
                                        {`Rp. ${pembaya.jumlah_bayar}`}
                                    </span>
                                </Table.Td>
                                <Table.Td
                                    index={idx}
                                    length={pembayaran.data.length}
                                >
                                    <Badge color={pembaya.status ? 0 : 1}>
                                        {pembaya.status
                                            ? "lunas"
                                            : "belum lunas"}
                                    </Badge>
                                </Table.Td>
                                {auth.user.level != "siswa" ? (
                                    <Table.Td
                                        index={idx}
                                        length={pembayaran.data.length}
                                    >
                                        <div className="flex item-center justify-center">
                                            <Link
                                                href={route(
                                                    "pembayaran.show",
                                                    pembaya.id
                                                )}
                                            >
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
                                                        id: pembaya.id,
                                                        siswa_id:
                                                            pembaya.siswa_id,
                                                        tgl_bayar:
                                                            pembaya.tgl_bayar,
                                                        spp_id: pembaya.spp_id,
                                                        jumlah_bayar:
                                                            pembaya.jumlah_bayar,
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
                                                            id: pembaya.id,
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
                                ) : (
                                    ""
                                )}
                            </tr>
                        );
                    })}
            </Table>

            <Pagination links={links}></Pagination>

            <ModalPembayaran
                params={paramDelete}
                type="delete"
            ></ModalPembayaran>
            <ModalPembayaran params={paramInsert}></ModalPembayaran>
            <ModalPembayaran params={paramUpdate}></ModalPembayaran>
        </DashboardLayout>
    );
}
