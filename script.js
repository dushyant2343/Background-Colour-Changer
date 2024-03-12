const buttons= document.querySelectorAll(".colourButton");
const body=document.querySelector(".container")
buttons.forEach((bt)=>{
    bt.addEventListener('click', (et)=>{
       console.log("button clicked")
       switch (et.target.id) {
        case "blue":
            console.log(et.target.id)
            body.style.backgroundColor="blue";
            break;
        case "green":
            console.log(et.target.id)
            body.style.backgroundColor="green";
            break;
        case "red":
            console.log(et.target.id)
            body.style.backgroundColor="red";
            break;
        case "yellow":
            console.log(et.target.id)
            body.style.backgroundColor="yellow";
            break;
        case "black":
            console.log(et.target.id)
            body.style.backgroundColor="black";
            break;
      
        default:
            break;
       }
    })
})