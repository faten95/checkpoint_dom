

    let plus=document.getElementsByClassName("add-article");
    for (let add of plus) {
        add.addEventListener("click", function () {
          add.nextElementSibling.innerHTML++;
          somme();
        });
}

    let minus=document.getElementsByClassName("substract");
    for (let sub of minus){
     sub.addEventListener("click", function () {
        if (sub.previousElementSibling.innerHTML > 0) {
          sub.previousElementSibling.innerHTML--;
          somme(); 
      }});
     }

     let remove=document.getElementsByClassName("remove");
for (let rmv of remove) {
  rmv.addEventListener("click", function () {
    rmv.parentNode.remove();
    somme();
  });
}

let hearts = document.getElementsByClassName("heart");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    if (heart.style.color == "red") {
      heart.style.color = "gray";
    } else {
      heart.style.color = "red";
    }

  });
}

function somme(){
    let quantity = document.getElementsByClassName("nbr");
    let price = document.getElementsByClassName("prix");
    let sum=0;
    for(let i=0 ; i < price.length; i++){
  
        sum+= quantity[i].innerHTML*price[i].innerHTML;
    }
   return(document.getElementById("totalprice").innerHTML = sum);
    

}