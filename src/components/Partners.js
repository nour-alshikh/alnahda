import Title from "./Title"
import Partner1 from '../images/partner1.svg'
import Partner2 from '../images/partner2.svg'
import Partner3 from '../images/partner3.svg'
import Partner4 from '../images/partner4.svg'
import Partner5 from '../images/partner5.svg'

const Partners = () => {
    return (
        <section className='pt-16 pb-24 bg-gradient-to-br from-main to-secondary'>
            <Title title="شركاؤنا" />

            <div className="mt-20 mb-24 grid grid-cols-5 gap-5 w-[80%] m-auto">
                <div className="col-span-5 lg:col-span-1 flex justify-center items-center">
                    <img alt="partner1" src={Partner1} />
                </div>
                <div className="col-span-5 lg:col-span-1 flex justify-center items-center">
                    <img alt="partner2" src={Partner2} />
                </div>
                <div className="col-span-5 lg:col-span-1 flex justify-center items-center">
                    <img alt="partner3" src={Partner3} />
                </div>
                <div className="col-span-5 lg:col-span-1 flex justify-center items-center">
                    <img alt="partner4" src={Partner4} />
                </div>
                <div className="col-span-5 lg:col-span-1 flex justify-center items-center">
                    <img alt="partner5" src={Partner5} />
                </div>
            </div>

            <div className="flex justify-center items-center gap-5">
                <span className="w-5 h-5 rounded-full bg-white opacity-45"></span>
                <span className="w-5 h-5 rounded-full bg-white"></span>
            </div>
        </section>
    )
}

export default Partners