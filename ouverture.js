var nouveau_client = document.getElementById("newclient");
var client_existant = document.getElementById("clientexistant");

nouveau_client.addEventListener("click",(event)=>{
    event.preventDefault();
    var formulaire = document.getElementById("divform");
    var recherche = document.getElementById("search");
    var numero_compte = document.getElementById("numCompte");
    var cle_rib = document.getElementById("cleRib");
    var numero_agence = document.getElementById("numAgence");
    formulaire.style.display="block";
    recherche.style.display="none";
    numero_compte.style.display="none";
    cle_rib.style.display="none";
    numero_agence.style.display="none";
})
client_existant.addEventListener("click",(event)=>{
    event.preventDefault();
    var formulaire = document.getElementById("divform");
    var recherche = document.getElementById("search");
    var numero_compte = document.getElementById("numCompte");
    var cle_rib = document.getElementById("cleRib");
    var numero_agence = document.getElementById("numAgence");
    formulaire.style.display="block";
    recherche.style.display="block";
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
     var nom_employeur = document.getElementById("nameEmp");
     var raison_social = document.getElementById("rsocial");
     var ID_employeur = document.getElementById("identifiant");
     var adresse_employeur = document.getElementById("adressEmp");
     var agios = document.getElementById("agios");

    if(selection.value=="1"){
        /*prenom.setAttribute("readonly","on");*/
        document.getElementById("dureeblocage").style.display="none";
        document.getElementById("frais").style.display="none";
       
    }
    else{
        /*prenom.removeAttribute("readonly");*/
        document.getElementById("dureeblocage").style.display="inline-block";
        document.getElementById("frais").style.display="inline-block";
      
    }
    if(selection.value=="2" || selection.value=="3"){
        document.getElementById("nameEmp").style.display="none";
        document.getElementById("rsocial").style.display="none";
        document.getElementById("identifiant").style.display="none";
        document.getElementById("adressEmp").style.display="none";
        document.getElementById("agios").style.display="none";
        if(selection.value=="2"){
            document.getElementById("dureeblocage").style.display="none";
        }
        else{
            document.getElementById("dureeblocage").style.display="inline-block";
        }

    }
    else{
        document.getElementById("nameEmp").style.display="inline-block";
        document.getElementById("rsocial").style.display="inline-block";
        document.getElementById("identifiant").style.display="inline-block";
        document.getElementById("adressEmp").style.display="inline-block";
        document.getElementById("agios").style.display="inline-block";
    }
})
