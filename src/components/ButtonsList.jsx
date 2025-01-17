import React from 'react'
import Button from './partials/Button';

const ButtonsList = ({ languages, handlerToggle, selectedId }) => {

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