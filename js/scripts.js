

    function proc(){
        console.log("Entrou na função de processamento");
        let n = document.getElementById("nome").value;
        console.log(n);
        
        let res = document.getElementById("Resultados");
        res.innerHTML += "<li>Seja Bem-vindo, " + n + "!</li>";
        
        }
        