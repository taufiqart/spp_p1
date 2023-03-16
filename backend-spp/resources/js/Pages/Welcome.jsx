import { Link, Head } from '@inertiajs/react';
import Icons from "@/Components/Icons";

export default function Welcome(props) {
    return (
        <>
            <main className="bg-gray-100 font-montserrat min-h-screen overflow-hidden">
                <header className="h-24 sm:h-32 flex items-center">
                    <div className="container mx-auto px-6 sm:px-12 flex items-center justify-between">
                        <div className="font-black text-blue-900 text-2xl flex items-start">
                            SPP<span className="w-3 h-3 rounded-full bg-purple-600 ml-2"></span>
                        </div>
                        <div className="flex items-center">
                            <nav className="text-purple-900 text-lg flex items-center">
                                <Link href='/' className="py-2 px-2 lg:px-8 flex hover:text-purple-700">
                                    Home
                                </Link>
                                <Link href={route("login")} className="py-2 px-2 lg:px-8 flex hover:text-purple-700">
                                    Masuk
                                </Link>
                                {/* <a href="#" className="py-2 px-8 flex hover:text-purple-700">
                                    Service
                                </a>
                                <a href="#" className="py-2 px-8 flex hover:text-purple-700">
                                    Portfolio
                                </a>
                                <a href="#" className="py-2 px-8 flex hover:text-purple-700">
                                    Contact us
                                </a> */}
                            </nav>
                            {/* <button className="flex flex-col ml-4">
                                <span className="w-6 h-1 rounded-full bg-purple-800 mb-1"></span>
                                <span className="w-6 h-1 rounded-full bg-purple-800 mb-1"></span>
                                <span className="w-6 h-1 rounded-full bg-purple-800 mb-1"></span>
                            </button> */}
                        </div>
                    </div>
                </header>
                <div className="container mx-auto px-6 sm:px-0 md:px-12 flex flex-col-reverse sm:flex-row relative ">
                    <div className="sm:w-6/12 relative z-10 bottom-0 mt-[10px]">
                        <img src="/assets/images/logos/wel2.svg" alt="" className="h-[calc(100vh-138px)]" />
                    </div>
                    <div className="sm:w-5/12 xl:w-4/12 flex flex-col items-start sm:items-end sm:text-right ml-auto mt-8 sm:mt-0 relative z-10 xl:pt-20 mb-16 sm:mb-0">
                        <h1 className="text-4xl lg:text-5xl text-blue-900 leading-none mb-4 font-black">SPP Website</h1>
                        <p className="lg:text-lg mb-4 sm:mb-12 text-blue-900">Lorem ipsum dolor sit amet, consectetur adipiscing adipiselit. Pellentesque suscipit tellus vitae purus dignissim, nec tincidunt neque condimentum. Nam nec ligula pretium mi interdum hendrerit in sit.</p>
                        <a href="#" className="font-semibold text-lg bg-purple-600 hover:bg-blue-400 text-white py-3 px-12 rounded-full">Learn more</a>
                    </div>



                </div>
            </main>
        </>
    );
}
