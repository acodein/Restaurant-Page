import {greeting} from "./bundle.js";
import "./styles.css"
import {content as homeContent} from "./Home.js";
import {para as menuContent} from "./menu.js";
import {para as contactContent} from "./contact.js";

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");
const content = document.getElementById("content");

content.appendChild(homeContent);

home.addEventListener("click",()=>{
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    content.appendChild(homeContent);
})

menu.addEventListener("click",()=>{
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    content.appendChild(menuContent);
})

contact.addEventListener("click",()=>{
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    content.appendChild(contactContent);
})

