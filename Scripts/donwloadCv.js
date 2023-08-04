document.getElementById("downloadButton").addEventListener("click", function() {
    // Substitua "seu_curriculo.pdf" pelo URL do seu currículo
    var downloadURL = "https://drive.google.com/uc?export=download&id=1Oa_5fiotaF-mrJPPWN7Y9zopHK0tG-vT";
    
    // Crie um elemento de link temporário
    var link = document.createElement("a");
    link.href = downloadURL;
    link.target = "https://drive.google.com/uc?export=download&id=1Oa_5fiotaF-mrJPPWN7Y9zopHK0tG-vT"; // Abre o link em uma nova aba
    link.download = "Cv_Dev.Jhon"; // Especifica o nome do arquivo a ser baixado

    // Simula o clique no link para iniciar o download
    link.click();
});
