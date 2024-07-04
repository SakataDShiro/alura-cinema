import styles from "./Pie.module.css"
import logo from "./logo-alura.png"

function Pie(){
    return(<footer className={styles.pie}>
            <section className={styles.logoContainer}>
                    <p>Desarrollado por</p> <img src={logo} alt="Logo Alura"/> 
                </section>
        </footer>
    )
}

export default Pie