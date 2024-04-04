import Title from "./Title"
import Services1 from '../images/services1.jpeg'
import Services2 from '../images/services2.jpeg'
import Services3 from '../images/services3.jpeg'
import logo from '../images/servicesLogo.svg'
const Services = () => {
    return (
        <section className='pt-16 pb-24 bg-gradient-to-br from-main to-secondary'>
            <Title title="خدماتنا" />
            <p className="text-center text-[#322F8DAD] text-[24px]">
                تقدم الشركة خدمات مميزة لعملائها باحترافية واتقان وتسعي دائما بان يكون رضا العميل اولا
            </p>
            <div className="m-auto mt-16 mb-16 grid grid-cols-4 gap-4 w-[90%] ">
                <div className="relative col-span-4 md:col-span-2 lg:col-span-1 mb-20 lg:mb-0">
                    <div className=" rounded-3xl overflow-hidden">
                        <img src={Services1} alt="services" />
                    </div>
                    <div className=" bg-white p-3 rounded-2xl m-auto w-[80%] absolute left-[50%] translate-x-[-50%] translate-y-[-40%]">
                        <h1 className="text-[27px] font-bold text-[#322F8D] text-right">
                            المرافق
                            <p className="text-[#FAAC40] inline-block">
                                ادارة
                            </p>
                        </h1>
                        <p className="text-[17px] pr-2 font-bold text-[#322F8D] text-right">
                            متخصصين محترفين بالتسويق العقاري الانشائية والمعمارية
                        </p>
                    </div>
                </div>
                <div className="relative col-span-4 md:col-span-2 lg:col-span-1 mb-20 lg:mb-0">
                    <div className=" rounded-3xl overflow-hidden">
                        <img src={Services2} alt="" />
                    </div>
                    <div className=" bg-white p-3 rounded-2xl m-auto w-[80%] absolute left-[50%] translate-x-[-50%] translate-y-[-40%]">
                        <h1 className="text-[27px] font-bold text-[#322F8D] text-right">
                            <p className="inline-block">
                                عقاري
                            </p>
                            <p className="text-[#FAAC40] inline-block">
                                توثيق
                            </p>
                        </h1>
                        <p className="text-[17px] pr-2 font-bold text-[#322F8D] text-right">
                            متخصصين محترفين في التوثيق العقاريه والانشائية والمعمارية
                        </p>
                    </div>
                </div>
                <div className="relative col-span-4 md:col-span-2 lg:col-span-1 mb-20 lg:mb-0">
                    <div className=" rounded-3xl overflow-hidden">
                        <img src={Services3} alt="" />
                    </div>
                    <div className=" bg-white p-3 rounded-2xl m-auto w-[80%] absolute left-[50%] translate-x-[-50%] translate-y-[-40%]">
                        <h1 className="text-[27px] font-bold text-[#322F8D] text-right">
                            عقاري
                            <p className="text-[#FAAC40] inline-block">
                                تطوير
                            </p>
                        </h1>
                        <p className="text-[17px] pr-2 font-bold text-[#322F8D] text-right">
                            متخصصين محترفين بالتطوير العقاري الانشائية والمعمارية
                        </p>
                    </div>
                </div>
                <div className="relative col-span-4 md:col-span-2 lg:col-span-1 mb-16 lg:mb-0 flex flex-col justify-start items-center">
                    <div className=" rounded-3xl overflow-hidden">
                        <img src={logo} alt="" />
                    </div>
                    <div className=" bg-white px-3 py-4 rounded-2xl m-auto w-[80%] absolute top-[50%] translate-y-[53%]">
                        <h1 className="text-[12px] lg:text-[27px] font-bold text-[#FAAC40] text-center">
                            اقرا المزيد عن خدماتنا
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services