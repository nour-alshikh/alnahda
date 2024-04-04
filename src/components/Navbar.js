
import LinkedIn from '../images/linkedIn.svg'
import Whatsapp from '../images/whatsapp.svg'
import Facebook from '../images/facebook.svg'
import instgram from '../images/instgram.svg'
import 'flowbite';

const Navbar = () => {
    return (
        <nav class="bg-ice-white absolute top-[139px] left-0 right-0">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div class="text-white font-bold text-xl">
                    <ul class="flex items-center space-x-8">

                        <li><a href="/" class="text-white flex">
                            <img alt="facebook" src={Facebook} />
                        </a></li>
                        <li><a href="/" class="text-white flex">
                            <img alt="whatsapp" src={Whatsapp} />
                        </a></li>
                        <li><a href="/" class="text-white flex">
                            <img alt="linkedin" src={LinkedIn} />
                        </a></li>
                        <li><a href="/" class="text-white flex">
                            <img alt="linkedin" src={instgram} />
                        </a></li>

                    </ul>
                </div>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class="hidden md:pr-32 md:mr-60 w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700">
                        <li>
                            <a href="/" class="block py-2 px-3 text-white md:text-white bg-blue-700 rounded md:bg-transparent  md:p-0 " aria-current="page">تواصل معنا</a>
                        </li>
                        <li>
                            <a href="/" class="block py-2 px-3 text-blue-700 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ">
                                العروض
                            </a>
                        </li>
                        <li>
                            <a href="/" class="block py-2 px-3 text-blue-700 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ">خدماتنا</a>
                        </li>
                        <li>
                            <a href="/" class="block py-2 px-3 text-blue-700 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ">من نحن</a>
                        </li>
                        <li>
                            <a href="/" class="block py-2 px-3 text-blue-700 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ">
                                الرئيسية
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar