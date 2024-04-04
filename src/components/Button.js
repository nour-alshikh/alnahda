

const Button = (props) => {
    return (
        <button className="bg-[#322F8D] px-16 py-4 text-white rounded-md font-bold hover:bg-[#faac40] hover:text-[#322F8D] ease-in-out duration-300" >
            {props.text}
        </button>
    )
}

export default Button