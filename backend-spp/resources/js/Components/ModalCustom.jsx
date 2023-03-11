import React from "react";

export default function ModalCustom() {
    return (
        <div>
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
        </div>
    );
}
