import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    // <GuestLayout>
    //     <Head title="Log in" />

    // {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}


    {/* <form onSubmit={submit}>
            <div>
                <InputLabel htmlFor="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    isFocused={true}
                    onChange={handleOnChange}
                />

                <InputError message={errors.email} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="password" value="Password" />

                <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    autoComplete="current-password"
                    onChange={handleOnChange}
                />

                <InputError message={errors.password} className="mt-2" />
            </div>

            <div className="block mt-4">
                <label className="flex items-center">
                    <Checkbox name="remember" value={data.remember} onChange={handleOnChange} />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div>

            <div className="flex items-center justify-end mt-4">
                {canResetPassword && (
                    <Link
                        href={route('password.request')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Forgot your password?
                    </Link>
                )}

                <PrimaryButton className="ml-4" disabled={processing}>
                    Log in
                </PrimaryButton>
            </div>
        </form> */}
    // </GuestLayout>
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

                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <div className="overflow-clip items-center flex justify-center w-full px-5 py-0"><img src="/assets/images/logos/spp-logo.png" className="w-full" alt="" /></div>
                            {/* <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">SPP Website</h2> */}

                            <p className=" text-gray-500 dark:text-gray-300">Masuk untuk menggunakan akun anda</p>
                        </div>

                        <div className="mt-8">
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel htmlFor="email" value="Email" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={handleOnChange}
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="password" value="Kata sandi" />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="current-password"
                                        onChange={handleOnChange}
                                    />

                                    <InputError message={errors.password} className="mt-2" />
                                    {canResetPassword && (
                                        <Link
                                            href={route('password.request')}
                                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Lupa kata sandi?
                                        </Link>
                                    )}
                                </div>

                                <div className="block mt-4">
                                    <label className="flex items-center">
                                        <Checkbox name="remember" value={data.remember} onChange={handleOnChange} />
                                        <span className="ml-2 text-sm text-gray-600">Ingat saya</span>
                                    </label>
                                </div>

                                <div className="mt-6">
                                    <PrimaryButton className="w-full !px-4 !py-3  justify-center items-center tracking-wide !text-center text-white transition-colors duration-200 transform !bg-blue-500 rounded-md !hover:bg-blue-400 focus:outline-none !focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50" disabled={processing}>
                                        Masuk
                                    </PrimaryButton>
                                </div>

                            </form>

                            <p className="mt-6 text-sm text-center text-gray-400">Belum memiliki akun? <Link href={route("register")} className="text-blue-500 focus:outline-none focus:underline hover:underline">Daftar</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
