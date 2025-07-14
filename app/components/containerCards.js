import { card } from "./card.js";


export const containerCards = (props) =>{

    let {results} = props;
    let div= document.createElement("div");

    results.map(e => div.append(card(e)))

    return div


}