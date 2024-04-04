import Button from "./Button";
import Header from "./Header";
import Navbar from "./Navbar";

const Cover = () => {
    return (
        <>
            <section className="relative  top-0 left-0 right-0 bottom-0 min-h-screen bg-[url('/public/assets/images/hero.gif')] bg-no-repeat bg-center bg-cover flex justify-center items-center">
                <Header />
                <Navbar />
                <div className="text-center">

                    <h1 className="text-white text-[57px] font-extrabold mb-4 main__title" style={{
                        textShadow: "2px 2px 13px #322F8D",
                        filter: "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.8))"
                    }}>
                        شركة النهضة الاسكانية العقارية
                    </h1>
                    <h2 className="text-white text-2xl mb-2">
                        اختار عقارك المناسب واحصل علية في اسرع وقت .
                    </h2>
                    <h2 className="text-white text-2xl mb-6">
                        اكتشف حياة لا حدود لها
                    </h2>
                    <Button text=" الق  نظرة علي مشارعنا" />
                </div>

            </section>
        </>
    )
}

export default Cover