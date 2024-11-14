const fetchBooks = () => {
    fetch(" https://striveschool-api.herokuapp.com/books")
    .then(responseObj => {
        console.log(responseObj);

        if (responseObj.ok) {
            return responseObj.json()
            
        }
    })

    .then(responseObj =>{
        const row = document.getElementById("card-container");
        console.log(responseObj)

        responseObj.forEach(char => {
            const col = document.createElement("div");
            col.className = "col"
            const img = document.createElement("img");
            img.style.width = "85%"
            img.src = char.img;
            const titleCard = document.createElement("h4");
            titleCard.className = "text-light"
            titleCard.style.width= "85%"
            titleCard.innerText = char.title;
            const btnCard = document.createElement("button");
            btnCard.className = "btn btn-success me-2";
            btnCard.innerText = "Buy";
            const btnRemove = document.createElement("button");
            btnRemove.className = "btn btn-danger";
            btnRemove.innerText = "Remove";
            const pPrice = document.createElement("p");
            pPrice.className = "text-success fs-2"
            pPrice.innerText = char.price + "$";


            




            row.appendChild(col)
            col.appendChild(img)
            col.appendChild(titleCard);
            col.appendChild(btnCard);
            col.appendChild(btnRemove)
            col.appendChild(pPrice)
            btnRemove.addEventListener ("click", function() {
                row.removeChild(col)
            })
        });
        

    })
    .catch(err => console.log(err));

    
}
window.onload = () => {
    fetchBooks();
}