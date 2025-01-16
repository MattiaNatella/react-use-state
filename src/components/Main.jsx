import { useState } from "react"
import languages from "../assets/languages"
import Button from "./partials/Button"
import Card from "./partials/Card"

const Main = () => {

    const [selectedId, setSelectedId] = useState(1);

    const handlerToggle = (id) => {
        setSelectedId(id)
    }

    return (
        <main>
            <div className="container">
                {languages.map(language =>
                    <Button key={language.id} title={language.title} onToggle={() => handlerToggle(language.id)} isActive={language.id == selectedId} />
                )}
            </div>
            <Card languages={languages} cardId={selectedId} />

        </main >


    )
}

export default Main