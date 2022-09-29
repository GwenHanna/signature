class Signature{
    constructor(canvas){
        // Initialisation
        this.sign = false;
        this.prevX = 0;
        this.prevY = 0;

        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 2;

        // Ecouteur d'event au moment du click
        this.canvas.addEventListener("mousedown", (e) => {
            // Je signe
            this.sign = true;
            console.log(e);

            //Je stock mes coordonée
            this.prevX = e.clientX - this.canvas.offsetLeft;
            this.prevY = e.clientY - this.canvas.offsetTop;
            console.log(this);
        })

        //Ecouteur d'event souri reste appuyer
        this.canvas.addEventListener("mousemove", (e) => {
            // Si je signe
            if(this.sign){
                // Déclaration currX et currY sur les coordonnée client 
                let currX = e.clientX - this.canvas.offsetLeft;
                let currY = e.clientY - this.canvas.offsetTop;
                // On applique la méthode du dessin
                this.draw(this.prevX, this.prevY, currX, currY);
                // On stock les nouvelle coordonnée sur prevY et prevX
                this.prevX = currX;
                this.prevY = currY;
            }
        })

        // Ecouteur d'event relache la souri
        this.canvas.addEventListener("mouseup", () => {
            this.sign = false 
        })
        // Ecouteur d'event on sort du canvas
        this.canvas.addEventListener("mouseout" , () => {
            this.sign = false 
        })
    }

    // METHODES

    // Methode dessin
      draw(depX, depY, destX, destY){
        this.ctx.beginPath()
        this.ctx.moveTo(depX, depY)
        this.ctx.lineTo(destX, destY)
        this.ctx.closePath()
        this.ctx.stroke()
    }

    //Methode effacer
    clear(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // Méthode enregistrer
    register(){
        // Pour telecharger la signature coté client(PC)
        /* let image = this.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
        location.href = image;
        */

         // Pour telecharger la signature coté serveur(SERVEUR)
         let image = this.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
         
         return image;
    }
}