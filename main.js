const num = +prompt("hafta kunlari");
let newText = document.createElement("p")

switch(num){
    
    case 1:
        newText.textContent = "dushanba";
        document.body.appendChild(newText)
        newText.style.backgroundColor = "red";
        newText.style.color = "white";
        document.body.style.backgroundColor = "black"
        break;
     case 2:
            newText.textContent = "seshanba";
            document.body.appendChild(newText)
            newText.style.backgroundColor = "black";
            newText.style.color = "white";
            document.body.style.backgroundColor = "red"
            break;
            case 3:
                newText.textContent = "chorshanba";
                document.body.appendChild(newText)
                newText.style.backgroundColor = "green";
                newText.style.color = "white";
                document.body.style.backgroundColor = "yellow"
                break;
                case 4:
                    newText.textContent = "payshanba";
                    document.body.appendChild(newText)
                    newText.style.backgroundColor = "pink";
                    newText.style.color = "white";
                    document.body.style.backgroundColor = "green"
                    break;

                    case 5:
                        newText.textContent = "juma";
                        document.body.appendChild(newText)
                        newText.style.backgroundColor = "yellow";
                        newText.style.color = "white";
                        document.body.style.backgroundColor = "green"
                        
                        break;
                        
                    case 6:
                        newText.textContent = "shanba";
       document.body.appendChild(newText)
       newText.style.backgroundColor = "";
       newText.style.color = "white";
       document.body.style.backgroundColor = "green"
                        break;
                        
                    case 7:
                        newText.textContent = "yakshanba";
                        document.body.appendChild(newText)
                        break;

}