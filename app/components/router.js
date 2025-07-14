import { ajax } from "../helpers/ajax.js";
import api from "../helpers/urls.js"
import { card } from "./card.js";
import { containerCards } from "./containerCards.js";
card

export const router = () =>{
    let {hash} = location
    
    console.log(hash);

    if (hash== " " || hash=="#/"){
        ajax({
            url: api.TODOS,
            callback: (data) => document.querySelector("#section").append(containerCards(data))
        })
    } else if (hash == "#/buscador"){
        //document.querySelector("#section").innerHTML= `<h2>En proceso</h2>`
        let inputBuscador= document.querySelector("#buscador");
        inputBuscador.style.display = "block";

        inputBuscador.addEventListener("change", (event)=>{
            console.log(event.target.value)

            let nameBusqueda = event.target.value;

            ajax({
                url: api.SEARCHNAME+nameBusqueda,
                callback: data => document.querySelector("#section").append(containerCards(data))
            })
        })
    }else{
            
        ajax({ 
            url: api.SEARCHID+localStorage.getItem("id"),
            callback: data => document.querySelector("#section").append(card(data))
        })
    }
}