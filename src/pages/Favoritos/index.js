import Titulo from "components/Titulo"
import styles from "./favoritos.module.css"
import Banner from "components/Banner/Banner"
import { useFavoritosContext } from "context/favoritos"
import Card from "components/Card"

function Favoritos(){

    const {favorito} = useFavoritosContext()
    
    return(<>
    <Banner img="favoritos" color="#44d97d"/>
    <Titulo>
        <h1>Favoritos</h1>
    </Titulo>
    <section className={styles.container}>
        {favorito.map(fav=>{
            return <Card {...fav} key={fav.id}/>
        })}
    </section>
    </>
    )
}

export default Favoritos