import {createContext, useContext, useState } from "react";

export const FavoritosContext= createContext()

FavoritosContext.displayName= "Favoritos"

export default function FavoritoProvider({children}){
    const [favorito, setFavorito] = useState([])

    return <FavoritosContext.Provider value={{favorito, setFavorito}}>
    {children}
    </FavoritosContext.Provider>
}

export function useFavoritosContext(){
    const {favorito, setFavorito}= useContext(FavoritosContext);

    function agregarFavorito(nuevoFavorito){
        const yaEsFavorito = favorito.some((item)=> item.id === nuevoFavorito.id);

    let nuevaLista=[...favorito];
    if(!yaEsFavorito){
        nuevaLista.push(nuevoFavorito);
        return setFavorito(nuevaLista);
    }
    //si ya es favorito lo escluyes de la lista para que ya no lo sea, porque al
    //haber clickado es porque no quieres que esté en tus favoritos
    nuevaLista= favorito.filter((item)=> item.id !== nuevoFavorito.id);
    return setFavorito(nuevaLista);
    }

    return{favorito, agregarFavorito};
}