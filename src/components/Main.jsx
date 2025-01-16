import languages from "../assets/languages"
import Button from "./partials/Button"




const Main = () => {
    return (
        <main>
            <div className="container">
                {languages.map(language =>
                    <Button id={language.id} title={language.title} />
                )}
            </div>
            <div className="card container">
                <h3>Titolo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laboriosam quam autem possimus, vel quod minima nemo quasi est, corrupti veritatis deleniti incidunt sequi? Saepe sed ullam quae natus architecto.</p>
            </div>

        </main>


    )
}

export default Main