import footerLogo from '../images/footerLogo.svg'
import checkIcon from '../images/checkIcon.svg'
import facebook from '../images/facebookIcon.svg'
import whatsapp from '../images/whatsappFooter.svg'
import linkedin from '../images/LinkedInFooter.svg'
import instgram from '../images/InstgramFooter.svg'
import location from '../images/location.svg'
import phone from '../images/phonefooter.svg'
import call from '../images/call.svg'
import mail from '../images/mail.svg'

const Footer = () => {
    return (
        <section className='pt-16 pb-24 bg-[#322F8D]'>
            <div className='w-[80%] m-auto  grid grid-cols-4 md:gap-28'>
                <div className='col-span-4 md:col-span-2 lg:col-span-1 order-4 md:order-3 lg:order-1'>
                    <h4 className='relative mb-14 text-white font-bold text-[35px] text-right border-b border-[#D9D9D954] pb-4 before:w-[20%] before:bg-[#FAAC40] before:h-[0.5px] before:absolute before:bottom-[-1px] before:right-0'>
                        ساعات العمل
                    </h4>
                    <p className='text-white text-[15px] font-bold text-right mb-10'>
                        من السبت الى الخميس٨ صباحًا - ٤ مساءً
                    </p>
                    <p className='text-white text-[15px] font-bold text-right mb-6 pr-4'>
                        الجمعة.............................. إجازة
                    </p>
                </div>
                <div className='col-span-4 md:col-span-2 lg:col-span-1 order-3 md:order-4 lg:order-2'>
                    <h4 className='relative mb-14 text-white font-bold text-[35px] text-right border-b border-[#D9D9D954] pb-4 before:w-[20%] before:bg-[#FAAC40] before:h-[0.5px] before:absolute before:bottom-[-1px] before:right-0'>
                        العنوان
                    </h4>
                    <div className='flex flex-row-reverse gap-5 mb-5'>
                        <div className='mt-2'>
                            <img alt='location' src={location} />
                        </div>
                        <div>
                            <p className='text-white text-[15px] font-bold text-right'>
                                المنطقه 5 الرياض السعوديه
                            </p>
                            <p className='text-white text-[15px] font-bold text-right'>
                                المنطقه 5 السعوديه
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse gap-5 mb-5'>
                        <div>
                            <img alt='location' src={phone} />
                        </div>
                        <div>
                            <p className='text-white text-[15px] font-bold text-right'>
                                +96617228998
                            </p>

                        </div>
                    </div>
                    <div className='flex flex-row-reverse gap-5 mb-5'>
                        <div>
                            <img alt='location' src={call} />
                        </div>
                        <div>
                            <p className='text-white text-[15px] font-bold text-right'>
                                +96617228998
                            </p>

                        </div>
                    </div>
                    <div className='flex flex-row-reverse gap-5 mb-5'>
                        <div>
                            <img alt='location' src={mail} />
                        </div>
                        <div>
                            <p className='text-white text-[15px] font-bold text-right'>
                                Alnahda@hotmail.com
                            </p>

                        </div>
                    </div>
                </div>
                <div className='col-span-4 md:col-span-2 lg:col-span-1 order-2 md:order-1 lg:order-3'>
                    <h4 className='relative mb-14 text-white font-bold text-[35px] text-right border-b border-[#D9D9D954] pb-4 before:w-[20%] before:bg-[#FAAC40] before:h-[0.5px] before:absolute before:bottom-[-1px] before:right-0'>
                        الصفحات
                    </h4>
                    <div className='flex justify-between mb-4'>
                        <div className='flex gap-5'>
                            <p className='text-white font-bold text-[15px]'>من نحن</p>
                            <div>
                                <img alt='check' src={checkIcon} />
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <p className='text-white font-bold text-[15px]'>الرئيسية</p>
                            <div>
                                <img alt='check' src={checkIcon} />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between mb-4'>
                        <div className='flex gap-5'>
                            <p className='text-white font-bold text-[15px]'>شركاؤنا</p>
                            <div>
                                <img alt='check' src={checkIcon} />
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <p className='text-white font-bold text-[15px]'>خدماتنا</p>
                            <div>
                                <img alt='check' src={checkIcon} />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between mb-4'>
                        <div className='flex gap-5'>
                            <p className='text-white font-bold text-[15px]'>تواصل</p>
                            <div>
                                <img alt='check' src={checkIcon} />
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <p className='text-white font-bold text-[15px]'>العروض</p>
                            <div>
                                <img alt='check' src={checkIcon} />
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center gap-7 mt-12'>
                        <div>
                            <img alt='facebook' src={facebook} />
                        </div>
                        <div>
                            <img alt='facebook' src={whatsapp} />
                        </div>
                        <div>
                            <img alt='facebook' src={linkedin} />
                        </div>
                        <div>
                            <img alt='facebook' src={instgram} />
                        </div>
                    </div>
                </div>

                <div className='col-span-4 md:col-span-2 lg:col-span-1 order-1 md:order-2 lg:order-4'>
                    <h4 className='relative mb-14 text-white font-bold text-[35px] text-right border-b border-[#D9D9D954] pb-4 before:w-[20%] before:bg-[#FAAC40] before:h-[0.5px] before:absolute before:bottom-[-1px] before:right-0'>
                        الشركة
                    </h4>

                    <div className='flex gap-3 mb-4 flex-row-reverse items-center'>
                        <div>
                            <img alt='logo' src={footerLogo} />
                        </div>
                        <h5 className='text-white text-right text-[22px] font-bold'>
                            النهضة الاسكانية العقارية
                        </h5>
                    </div>
                    <p className='text-white text-[20px] font-bold text-right'>
                        شركة النهضة الاسكانية العقاريه هي شركه سعودية تختص بأعمال البناء والعظم وتشطيب كافة المباني
                    </p>
                </div>
            </div>
        </section>
    )

}

export default Footer