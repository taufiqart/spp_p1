import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };
    return (

        <div className="bg-white dark:bg-gray-900">
            <div className="flex justify-center h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/4" style={{ backgroundImage: "url(/assets/images/classroom.jpg)" }}>
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-4xl font-bold text-white">SPP Website</h2>

                            <p className="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/2">
                    <div className="flex-1">
                        <div className="text-center">
                            <div className="overflow-clip items-center flex justify-center w-full px-3 py-0"><img src="/assets/images/logos/spp-logo.png" className="w-52" alt="" /></div>
                            {/* <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">SPP Website</h2> */}

                            <p className=" text-gray-500 dark:text-gray-300">Daftar untuk mengakses website</p>
                        </div>

                        <div className="mt-0">
                            <form onSubmit={submit}>
                                {/* <div>
                                    <InputLabel htmlFor="nama" value="Nama" />

                                    <TextInput
                                        id="nama"
                                        name="nama"
                                        value={data.nama}
                                        className="mt-1 block w-full"
                                        autoComplete="nama"
                                        isFocused={true}
                                        onChange={handleOnChange}
                                        required
                                    />

                                    <InputError message={errors.nama} className="mt-2" />
                                </div> */}

                                <div className="mt-2">
                                    <InputLabel htmlFor="nisn" value="NISN" />

                                    <TextInput
                                        id="nisn"
                                        type="text"
                                        name="nisn"
                                        value={data.nisn}
                                        className="mt-1 block w-full"
                                        autoComplete="nisn"
                                        onChange={handleOnChange}
                                        required
                                    />

                                    <InputError message={errors.nisn} className="mt-2" />
                                </div>
                                <div className="mt-2">
                                    <InputLabel htmlFor="email" value="Email" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="email"
                                        onChange={handleOnChange}
                                        required
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div className="mt-2">
                                    <InputLabel htmlFor="password" value="Password" />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={handleOnChange}
                                        required
                                    />

                                    <InputError message={errors.password} className="mt-2" />
                                </div>

                                <div className="mt-2">
                                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                                    <TextInput
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={handleOnChange}
                                        required
                                    />

                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>

                                <div className="mt-5">
                                    <PrimaryButton className="w-full !px-4 !py-3  justify-center items-center tracking-wide !text-center text-white transition-colors duration-200 transform !bg-blue-500 rounded-md !hover:bg-blue-400 focus:outline-none !focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50" disabled={processing}>
                                        Daftar
                                    </PrimaryButton>
                                </div>

                            </form>

                            <p className="mt-6 text-sm text-center text-gray-400">Sudah memiliki akun? <Link href={route("login")} className="text-blue-500 focus:outline-none focus:underline hover:underline">Masuk</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
