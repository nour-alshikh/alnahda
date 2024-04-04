
const Title = (props) => {
    return (
        <h1 className="text-[#322F8D] text-[60px] text-center font-bold mb-4 ">
            <span className="relative title  before:content-[''] before:w-[70%] before:h-[4px] before:rounded-2xl before:bg-[#322F8D] before:absolute before:bottom-[-10px] before:left-[50%]">
                {props.title}
            </span>
        </h1>
    )
}

export default Title