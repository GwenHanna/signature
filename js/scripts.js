window.onload = () => {

    let canvas = new Signature("#signature");

    document.querySelector("#clear").addEventListener("click", (e) => {
        e.preventDefault();
        canvas.clear();
    })

    document.querySelector("#register").addEventListener("click", (e) => {
        e.preventDefault();
      

        let data = {
            image : canvas.register()
        }

        fetch("s.php", {
            method : "POST",
            body : JSON.stringify(data)
        }).then((reponse) => {
            console.log(reponse);
        }) 
    })           
}  