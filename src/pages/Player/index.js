import Banner from "components/Banner/Banner"
import styles from "./Player.module.css"
import Titulo from "components/Titulo"
import { useParams } from "react-router-dom"
import NotFound from "pages/NotFound"
import { useEffect, useState } from "react"

function Player(){

    const [video, setVideo]= useState()

    const parametros = useParams()
    //const video = videos.find(video=> video.id === Number(parametros.id))

    useEffect(()=>{
        fetch(`https://my-json-server.typicode.com/SakataDShiro/alura-cinema-api/videos?id=${parametros.id}`)
        .then(response => response.json())
        .then(data=>{
            setVideo(...data)
        })
    }, [])

    if(!video) return <NotFound/>
    return(
        <>
        <Banner img="player" color="#58B9AE"/>
        <Titulo>
            <h1>Player</h1>
        </Titulo>
        <section className={styles.container}>
        <iframe width="100%" height="100%" src={video.link} title={video.title} 
        frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </section>
        </>
    )
}

export default Player