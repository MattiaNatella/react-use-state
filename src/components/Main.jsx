import { useState } from "react"
import languages from "../assets/languages"
import Button from "./partials/Button"
import Card from "./partials/Card"
import ButtonsList from "./ButtonsList"

const Main = () => {

    const [selectedId, setSelectedId] = useState(null);

    const handlerToggle = (id) => {
        setSelectedId(id)
    }
    return (
        <main>
            <div className="container">

                <ButtonsList languages={languages} handlerToggle={handlerToggle} selectedId={selectedId} />
                {/* {languages.map(language =>
                    <Button key={language.id} title={language.title} onToggle={() => handlerToggle(language.id)} isActive={language.id == selectedId} />
                )} */}
            </div>
            {selectedId ? <Card languages={languages} cardId={selectedId} /> : <h3>Nessun Linguaggio è stato Selezionato</h3>}

        </main >


    )
}

export default Main