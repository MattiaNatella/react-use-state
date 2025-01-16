const Button = (props) => {
    const { id, title } = props
    const onToggle = props.onToggle
    const isActive = props.isActive
    return (
        <button onClick={onToggle} className={isActive ? "active" : ""} key={id}>{title}</button>
    )
}

export default Button