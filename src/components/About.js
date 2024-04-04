import AboutImg from '../images/about.jpeg';
import Title from './Title';

const About = () => {
    return (
        <>
            <section className='pt-16 pb-24'>
                <Title title="من نحن" />
                <div className='w-[90%] m-auto grid grid-cols-2 gap-4'>
                    <div className='w-full col-span-2 lg:col-span-1 lg:pr-40 rounded-md overflow-hidden'>
                        <img alt="about" className='w-full rounded-md  aspect-[1/1.2]' src={AboutImg} />
                    </div>
                    <div className='w-full rtl  col-span-2 lg:col-span-1'>
                        <p className='text-right text-[32px]  text-[#322F8D] font-bold' style={{
                            lineHeight: '50px'
                        }}>
                            بدأت مســيرتنا قبــل عدة أعوام وتخصصنــا فــي
                            <p className='inline-block mx-1 text-[#FAAC40]'>
                                بالخدمات العقارية
                            </p>

                            ثم امتـــــدت المشــاريع لتشــمل العديــد مــن االاحياء وفقا لأفضل المعايير العالمية وبما يتلاءم مع أسلوب الحياة الحديث.
                        </p>
                        <p className='text-right text-[32px]  text-[#322F8D] font-bold' style={{
                            lineHeight: '50px'
                        }}>
                            نسعى في
                            <p className='inline-block mx-1 text-[#FAAC40]'>
                                النهضة الأسكانية العقارية
                            </p>
                            لأن نكون ضمن الشركات الكبرى , الرائدة في مجال التطوير والاستثمار العقاري، ونهدف إلى مواكبة السوق العقاري من خلال توفير منتجات عقاريــة مصممة بأسلوب عصري حديث تجمع بين الجودة والرفاهية مع مراعاة تنوع الخيارات الجغرافيةوالتصميمة ملتزمين بما من شأنه تحقيق رغبــات وتطلعات عملاؤنا وتلبية جميع احتياجاتهم وبأسعار في متناول الجميع
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About