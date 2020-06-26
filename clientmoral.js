var nouveau_client2 = document.getElementById("newclient2");
var client_existant2 = document.getElementById("clientexistant2");
nouveau_client2.addEventListener("click",(event)=>{
    event.preventDefault();
    var formulaire2 = document.getElementById("divform2");
    var recherche2 = document.getElementById("search2");
    var numero_compte = document.getElementById("numCompte");
    var cle_rib = document.getElementById("cleRib");
    var numero_agence = document.getElementById("numAgence");
    formulaire2.style.display="block";
    recherche2.style.display="none";
    numero_compte.style.display="none";
    cle_rib.style.display="none";
    numero_agence.style.display="none";
})
client_existant2.addEventListener("click",(event)=>{
    event.preventDefault();
    var formulaire2 = document.getElementById("divform2");
    var recherche2 = document.getElementById("search2");
    var numero_compte = document.getElementById("numCompte");
    var cle_rib = document.getElementById("cleRib");
    var numero_agence = document.getElementById("numAgence");
    formulaire2.style.display="block";
    recherche2.style.display="block";
    numero_compte.style.display="block";
    cle_rib.style.display="block";
    numero_agence.style.display="block";
})

var selection = document.getElementById("typeCompte");
selection.addEventListener("change",(event)=>{
     event.preventDefault();
     console.log(selection.value);
     var duree_blocage = document.getElementById("dureeblocage");
     var frais_ouverture = document.getElementById("frais");
     var agios = document.getElementById("agios");

    if(selection.value=="1"){
        /*prenom.setAttribute("readonly","on");*/
        document.getElementById("dureeblocage").style.display="none";
        document.getElementById("frais").style.display="none";
        document.getElementById("agios").style.display="inline-block";
       
    }
    else{
        /*prenom.removeAttribute("readonly");*/
        document.getElementById("dureeblocage").style.display="inline-block";
        document.getElementById("frais").style.display="inline-block";
        document.getElementById("agios").style.display="none";
      
    }
    if(selection.value=="2" || selection.value=="3"){
        
        document.getElementById("agios").style.display="none";
        if(selection.value=="2"){
            document.getElementById("dureeblocage").style.display="none";
        }
        else{
            document.getElementById("dureeblocage").style.display="inline-block";
        }

    }
    else{
        document.getElementById("agios").style.display="inline-block";
    }
})
