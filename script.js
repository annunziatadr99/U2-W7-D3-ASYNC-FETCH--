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
            img.style.width = "80%"
            img.src = char.img;

            row.appendChild(col)
            col.appendChild(img)
        
            
        });
        

    })
    .catch(err => console.log(err));

    
}
window.onload = () => {
    fetchBooks();
}