import Alert from "@/Components/Alert";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import React from "react";

export default function ModalPetugas({ params, type = "" }) {
    let {
        show,
        onClose,
        setShow,
        flash,
        data,
        handleOnChange,
        errors,
        processing,
        submit,
        title,
        textBtn,
        jurusan: jurusan,
        user: user,
    } = params;

    if (type == "delete") {
        return (
            <Modal
                show={show}
                setShow={setShow}
                onClose={() => onClose()}
                maxWidth="md"
            >
                <div className="w-full my-6 px-6 py-4 mx-auto bg-white overflow-hidden sm:rounded-lg">
                    {flash.errors && <Alert type="error">{flash.errors}</Alert>}
                    {flash.success && (
                        <Alert type="success">{flash.success}</Alert>
                    )}

                    <h4>Yakin ingin menghapus data ?</h4>
                    <div className="flex items-center justify-end mt-8">
                        <button
                            type="button"
                            onClick={(e) => submit(e)}
                            disabled={processing}
                            className="disabled:opacity-40 text-center justify-center inline-flex items-center px-4 py-2 bg-red-800 border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:opacity-80 focus:opacity-80 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                        >
                            {processing ? "Loading...." : "Delete data"}
                        </button>
                        <button
                            className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                            onClick={() => setShow(false)}
                            type="button"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>
        );
    }
    return (
        <Modal show={show} onClose={onClose} setShow={setShow} maxWidth="md">
            <div className="w-full my-6 px-6 py-4 mx-auto bg-white overflow-hidden sm:rounded-lg">
                <form
                    onSubmit={submit}
                    className="flex flex-col gap-2"
                    method="post"
                >
                    {flash.error && <Alert type="error">{flash.error}</Alert>}
                    {flash.success && (
                        <Alert type="success">{flash.success}</Alert>
                    )}

                    <div className="text-center text-xl">{title}</div>

                    <div>
                        <InputLabel htmlFor="nama" value="NAMA" />

                        <TextInput
                            id="nama"
                            type="text"
                            name="nama"
                            value={data.nama}
                            className="mt-1 block w-full"
                            autoComplete="nama"
                            isFocused={false}
                            onChange={handleOnChange}
                        />

                        <InputError message={errors.nama} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="user_id" value="USER ID" />

                        <TextInput
                            id="user_id"
                            type="text"
                            name="user_id"
                            list="user_ids"
                            value={data.user_id}
                            className="mt-1 block w-full"
                            autoComplete="user_id"
                            isFocused={false}
                            onChange={handleOnChange}
                        />
                        <datalist id="user_ids">
                            {user &&
                                user.map((us, index) => {
                                    console.log(us)
                                    return (
                                        <option
                                            value={us.id}
                                            key={index + us.id}
                                        >
                                            {`${us.email}`}
                                        </option>
                                    );
                                })}
                        </datalist>

                        <InputError
                            message={errors.user_id}
                            className="mt-2"
                        />
                    </div>
                    <div className="flex items-center">
                        <button
                            disabled={processing}
                            className="disabled:bg-gray-400 w-full text-center justify-center inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                        >
                            {processing ? "Loading...." : textBtn}
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
    );
}
