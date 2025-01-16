import React from 'react'
import Button from './partials/Button';

const ButtonsList = (props) => {

    const { languages, handlerToggle, selectedId } = props;
    console.log(languages)
    return (
        <>
            {
                languages.map(language =>
                    <Button key={language.id} title={language.title} onToggle={() => handlerToggle(language.id)} isActive={language.id == selectedId} />
                )
            }
        </>
    )
}

export default ButtonsList