import Logo from '../images/logo.svg';
import Phone from '../images/phone.svg';
import Lang from '../images/lang.svg';

const Header = () => {
    return (
        <header className="bg-transparent pt-10 absolute top-0 left-0 right-0">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <div className="">
                        <ul className="flex items-center space-x-8">
                            <li><a href="/" className="text-white flex">
                                <img classNameName='pr-2' alt='اللغة' src={Lang} />
                                <span>اللغة</span>
                            </a></li>
                            <li><a href="/" className="text-white flex">
                                <img classNameName='pr-2' alt='الهاتف' src={Phone} />
                                <span>الهاتف</span>
                            </a></li>

                        </ul>
                    </div>

                    <div className="text-white font-bold text-xl">
                        <a href="/">
                            <img alt="logo" src={Logo} />
                        </a>
                    </div>
                </div>


            </nav>
        </header>
    )
}

export default Header