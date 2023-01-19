function blackBackground() {
    document.body.innerHTML = "<body></body>";
    document.body.setAttribute("id", "color");

    setTimeout(() => {
        confirm("Attention le contenu de cette page est susceptible d'être inapproprié, souhaitez-vous continuer ?");
    }, "1000");


};

blackBackground();












