const Button = ({ children, ...props }) => {
    return <button {...props} className="px-8 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-200 hover:bg-stone-600 hover:text-stone-100">
            {children}
    </button>
}

export default Button;