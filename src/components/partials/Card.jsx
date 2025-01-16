const Card = (props) => {

    const { languages, cardId } = props;
    return (
        <div className="card container">
            <h3>{languages.find(language => language.id == cardId).title}</h3>
            <p>{languages.find(language => language.id == cardId).description}</p>
        </div>
    )
}

export default Card