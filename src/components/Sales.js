import Title from "./Title"
import Button from "./Button"
import Sales1 from '../images/sales1.jpeg'
import Sales2 from '../images/sales2.jpeg'
import Sales3 from '../images/sales3.jpeg'
import PersonIcon from '../images/personIcon.svg'
import SquareIcon from '../images/squareIcon.svg'
import ToiletIcon from '../images/toiletIcon.svg'
import BedroomIcon from '../images/bedroomIcon.svg'

const Sales = () => {
    return (
        <section className='pt-16 pb-24 '>
            <Title title="احدث العروض العقارية" />
            <div className="m-auto mt-16 mb-16 grid grid-cols-3 gap-16 w-[90%]">
                <div className="col-span-3 md:col-span-2 lg:col-span-1 border-2 border-[#322F8D] rounded-lg py-10 px-6 shadow-xl">
                    <div className="overflow-hidden rounded-lg  max-h-[193px]">
                        <img alt="sales3" className="bg-center bg-cover" src={Sales1} />
                    </div>
                    <h1 className="text-[#322F8D] text-[24px] text-center font-bold mt-10">
                        اراضي للبيع في الواديين
                    </h1>
                    <div className="flex flex-row-reverse justify-start mt-5">
                        <img alt="person" src={PersonIcon} />
                        <p className="text-right text-[#322F8D] text-[15px] font-medium">
                            شركه النهضة الاسكانية العقاريه
                        </p>
                    </div>
                    <div className="grid grid-cols-5 gap-4 mt-8">
                        <div className="col-span-4 text-right order-2">
                            <p className="text-[#322F8D75] text-[20px] font-medium">
                                اراضي للبيع
                            </p>
                        </div>
                        <div className="col-span-1 order-1 flex justify-center items-center gap-2">
                            <p className="text-[#322F8D75] text-[16px] font-medium">
                                2224m
                            </p>
                            <img alt="building area" src={SquareIcon} />
                        </div>
                    </div>
                </div>
                <div className="col-span-3 md:col-span-2 lg:col-span-1 border-2 border-[#322F8D] rounded-lg py-10 px-6 shadow-xl">
                    <div className="overflow-hidden rounded-lg  max-h-[193px]">
                        <img alt="sales1" className="bg-center bg-cover" src={Sales2} />
                    </div>
                    <h1 className="text-[#322F8D] text-[24px] text-center font-bold mt-10">
                        فلل للبيع ابها في حي الموظفين
                    </h1>
                    <div className="flex flex-row-reverse justify-start mt-5">
                        <img alt="person" src={PersonIcon} />
                        <p className="text-right text-[#322F8D] text-[15px] font-medium">
                            شركه النهضة الاسكانية العقاريه
                        </p>
                    </div>
                    <div className="grid grid-cols-5 gap-4 mt-8">
                        <div className="col-span-2 text-right order-2">
                            <p className="text-[#322F8D75] text-[20px] font-medium">
                                فلل للبيع
                            </p>
                        </div>
                        <div className="col-span-1 order-1 flex justify-center items-center gap-2">
                            <p className="text-[#322F8D75] text-[16px] font-medium">
                                2224m
                            </p>
                            <img alt="building area" src={SquareIcon} />
                        </div>
                        <div className="col-span-1 order-1 flex justify-center items-center gap-2">
                            <p className="text-[#322F8D75] text-[16px] font-medium">
                                5
                            </p>
                            <img alt="toilet" src={ToiletIcon} />
                        </div>
                        <div className="col-span-1 order-1 flex justify-center items-center gap-2">
                            <p className="text-[#322F8D75] text-[16px] font-medium">
                                7
                            </p>
                            <img alt="toilet" src={BedroomIcon} />
                        </div>
                    </div>
                </div>
                <div className="col-span-3 md:col-span-2 lg:col-span-1 border-2 border-[#322F8D] rounded-lg py-10 px-6 shadow-xl">
                    <div className="overflow-hidden flex justify-center items-center rounded-lg  max-h-[193px]">
                        <img alt="sales1" className="bg-center bg-cover" src={Sales3} />
                    </div>
                    <h1 className="text-[#322F8D] text-[24px] text-center font-bold mt-10">
                        شقق للبيع في ابها حي الموظفين
                    </h1>
                    <div className="flex flex-row-reverse justify-start mt-5">
                        <img alt="person" src={PersonIcon} />
                        <p className="text-right text-[#322F8D] text-[15px] font-medium">
                            شركه النهضة الاسكانية العقاريه
                        </p>
                    </div>
                    <div className="grid grid-cols-5 gap-4 mt-8">
                        <div className="col-span-2 text-right order-2">
                            <p className="text-[#322F8D75] text-[20px] font-medium">
                                شقة للبيع
                            </p>
                        </div>
                        <div className="col-span-1 order-1 flex justify-center items-center gap-2">
                            <p className="text-[#322F8D75] text-[16px] font-medium">
                                24m
                            </p>
                            <img alt="building area" src={SquareIcon} />
                        </div>
                        <div className="col-span-1 order-1 flex justify-center items-center gap-2">
                            <p className="text-[#322F8D75] text-[16px] font-medium">
                                2
                            </p>
                            <img alt="toilet" src={ToiletIcon} />
                        </div>
                        <div className="col-span-1 order-1 flex justify-center items-center gap-2">
                            <p className="text-[#322F8D75] text-[16px] font-medium">
                                2
                            </p>
                            <img alt="toilet" src={BedroomIcon} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Button text="عرض المزيد" />
            </div>
        </section>
    )
}

export default Sales