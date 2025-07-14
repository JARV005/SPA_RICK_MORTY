import { router } from "./components/router.js"
import { Header } from "./components/header.js" 
import { Main } from "./components/main.js"
import { search } from "./components/search.js"
 
 export const App = () =>{

    let divRoot= document.querySelector("#root")
    divRoot.innerHTML=  "<h1> Nuestra web </h1>"
    divRoot.append(Header())
    divRoot.append(search())
    divRoot.append(Main())

    router()

    // ajax({
    //     url: api.TODOS,
    //     callback: (data) => document.querySelector("#section").append(containerCards(data))
    // })
}

