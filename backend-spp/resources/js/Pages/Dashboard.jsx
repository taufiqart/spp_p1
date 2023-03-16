import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Icons from "@/Components/Icons";

export default function Dashboard(props) {
    return (
        <DashboardLayout pages={"Users"}>
            <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4 mt-10" >
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <div className="w-5"><Icons.pembayaran className={"scale-150 fill-white"} /></div>
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                            Pembayaran
                        </p>
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                            {props.pembayaran}
                        </h4>
                    </div>
                    <div className="border-t border-blue-gray-50 p-4">
                        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                            Total data
                        </p>
                    </div>
                </div>
                {
                    props.auth && props.auth.user.level == 'admin' && (

                        <>
                            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                                <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-red-600 to-red-400 text-white shadow-red-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                                    <div className="w-5"><Icons.spp className={"scale-150 fill-white"} /></div>
                                </div>
                                <div className="p-4 text-right">
                                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                                        Spp
                                    </p>
                                    <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                                        {props.spp}

                                    </h4>
                                </div>
                                <div className="border-t border-blue-gray-50 p-4">
                                    <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                        Total data
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                                <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                                    <div className="w-5"><Icons.kelas className={"scale-150 stroke-white fill-white"} /></div>
                                </div>
                                <div className="p-4 text-right">
                                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                                        Kelas
                                    </p>
                                    <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                                        {props.kelas}
                                    </h4>
                                </div>
                                <div className="border-t border-blue-gray-50 p-4">
                                    <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                        Total data
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                                <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-yellow-600 to-yellow-400 text-white shadow-yellow-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                                    <div className="w-5"><Icons.jurusan className={"scale-150 stroke-white fill-white"} /></div>
                                </div>
                                <div className="p-4 text-right">
                                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                                        Jurusan
                                    </p>
                                    <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                                        {props.jurusan}
                                    </h4>
                                </div>
                                <div className="border-t border-blue-gray-50 p-4">
                                    <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                        Total data
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                                <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                                    <div className="w-5"><Icons.siswa className={"scale-150 stroke-white fill-white"} /></div>
                                </div>
                                <div className="p-4 text-right">
                                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                                        Siswa
                                    </p>
                                    <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                                        {props.siswa}
                                    </h4>
                                </div>
                                <div className="border-t border-blue-gray-50 p-4">
                                    <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                        Total data
                                    </p>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </DashboardLayout>
    );
}
