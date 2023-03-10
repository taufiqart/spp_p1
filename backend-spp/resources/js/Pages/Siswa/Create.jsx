import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function Create({ auth, kelas, jurusan }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nisn: "",
        nis: "",
        nama: "",
        kelas_id: "",
        jurusan_id: "",
        alamat: "",
        no_tlp: "",
        user_id: "",
    });

    useEffect(() => {
        kelas.forEach((kel) => {
            console.log(kel.nama);
        });
        console.log(errors);
        kelas = kelas;
    }, [kelas, data, errors]);
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

        post(route("siswa.store"));
    };
    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Siswa
                </h2>
            }
        >
            <Head title="Profile" />
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 mx-auto bg-white shadow-md overflow-hidden sm:rounded-lg">
                <form
                    onSubmit={submit}
                    className="flex flex-col gap-2"
                    method="post"
                >
                    <div className="text-center text-xl">
                        Form Tambah Data Siswa
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

                        <InputError message={errors.nisn} className="mt-2" />
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

                        <InputError message={errors.nis} className="mt-2" />
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

                        <InputError message={errors.nama} className="mt-2" />
                    </div>
                    <div className="flex gap-x-4">
                        <div className="w-full">
                            <InputLabel htmlFor="kelas_id" value="KELAS" />

                            <select
                                name="kelas_id"
                                id="kelas_id"
                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                                onChange={handleOnChange}
                            >
                                {kelas &&
                                    kelas.map((kel, index) => {
                                        // return "halo";
                                        return (
                                            <option
                                                key={index}
                                                value={`${kel.id}`}
                                                selected={`${
                                                    data.kelas_id == kel.id
                                                }`}
                                            >
                                                {`${kel.kelas}`}
                                            </option>
                                        );
                                    })}
                                <option value="" selected={true}></option>
                            </select>

                            <InputError
                                message={errors.kelas_id}
                                className="mt-2"
                            />
                        </div>
                        <div className="w-full">
                            <InputLabel htmlFor="jurusan_id" value="JURUSAN" />

                            <select
                                name="jurusan_id"
                                id="jurusan_id"
                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                                onChange={handleOnChange}
                            >
                                {jurusan &&
                                    jurusan.map((jurusan, index) => {
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
                                    })}
                                <option value="" selected={true}></option>
                            </select>

                            <InputError
                                message={errors.jurusan_id}
                                className="mt-2"
                            />
                        </div>
                    </div>

                    <div>
                        <InputLabel htmlFor="alamat" value="ALAMAT" />

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

                        <InputError message={errors.alamat} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel htmlFor="no_tlp" value="NO TLP" />

                        <TextInput
                            id="no_tlp"
                            type="text"
                            name="no_tlp"
                            value={data.no_tlp}
                            className="mt-1 block w-full"
                            autoComplete="no_tlp"
                            onChange={handleOnChange}
                        />

                        <InputError message={errors.no_tlp} className="mt-2" />
                    </div>

                    <div className="flex items-center">
                        <button className="w-full text-center justify-center inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                            Tambah Siswa
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
