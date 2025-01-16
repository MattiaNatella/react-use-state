const Button = (props) => {
    const { id, title } = props
    return (
        <button className="" key={id}>{title}</button>
    )
}

export default Button