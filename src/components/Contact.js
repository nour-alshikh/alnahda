import ContactImage from '../images/contactImage.svg'
import whatsappIcon from '../images/whatsappIcon.svg'
import callIcon from '../images/callIcon.svg'
const Contact = () => {
    return (
        <section className='p-8 lg:p-32 '>
            <div className="w-full lg:w-[75%] m-auto bg-gradient-to-br from-main to-secondary rounded-xl grid items-center grid-cols-2 gap-5 py-10 px-8 lg:px-20">
                <div className="col-span-2 lg:col-span-1 flex justify-center">
                    <img alt="contact" src={ContactImage} />
                </div>
                <div className="col-span-2 lg:col-span-1 flex items-center flex-col">
                    <h1 className='font-bold text-[70px] relative text-[#322F8D2E] text-center mb-14'>
                        تواصل معنا
                    </h1>
                    <h1 className='font-bold text-[60px] mt-[-33%] relative text-[#322F8D] text-center mb-14'>
                        تواصل معنا
                    </h1>
                    <div className='grid grid-cols-2 gap-6'>
                        <button className="col-span-2 lg:col-span-1 w-full bg-[#322F8D] px-10 py-2 flex justify-center items-center gap-4 text-white rounded-lg font-bold hover:bg-[#faac40] hover:text-[#322F8D] ease-in-out duration-300" >
                            <img alt='whatsapp' src={whatsappIcon} />
                            <span>
                                واتس
                            </span>
                        </button>
                        <button className="col-span-2 lg:col-span-1 w-full bg-[#322F8D] px-10 py-2 flex justify-center items-center gap-4 text-white rounded-lg font-bold hover:bg-[#faac40] hover:text-[#322F8D] ease-in-out duration-300" >
                            <img alt='call' src={callIcon} />
                            <span>
                                اتصل
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact