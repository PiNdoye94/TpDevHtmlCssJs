var selection = document.getElementById("type");
selection.addEventListener("change",(event)=>{
     event.preventDefault();
     console.log(selection.value);
     var prenom = document.getElementById("fname");
     var statut_juri = document.getElementById("statutj");
     var N_registre = document.getElementById("Nregistre");
     var D_activite = document.getElementById("Dactivite");
    if(selection.value=="2"){
        /*prenom.setAttribute("readonly","on");*/
        document.getElementById("fname").style.display="none";
        document.getElementById("statutj").style.display="inline-block";
        document.getElementById("Nregistre").style.display="inline-block";
        document.getElementById("Dactivite").style.display="inline-block";
    
    }
    else{
        /*prenom.removeAttribute("readonly");*/
        document.getElementById("fname").style.display="inline-block";
        document.getElementById("statutj").style.display="none";
        document.getElementById("Nregistre").style.display="none";
        document.getElementById("Dactivite").style.display="none";
    }
})
var type_compte = document.getElementById("typeCompte");
type_compte.addEventListener("change",(event)=>{
     event.preventDefault();
     console.log(type_compte.value);
     var nom_employeur = document.getElementById("nameEmp");
     var raison_social = document.getElementById("rsocial");
     var id_employeur = document.getElementById("identifiant");
     var adresse_employeur = document.getElementById("adressEmp");
     var type_compte_epargne = document.getElementById("typeEpargne");
    if(type_compte.value=="epargne" || type_compte.value=="bloque"){
        document.getElementById("nameEmp").style.display="none";
        document.getElementById("rsocial").style.display="none"; 
        document.getElementById("identifiant").style.display="none";
        document.getElementById("adressEmp").style.display="none";
    }
    else{
        document.getElementById("nameEmp").style.display="inline-block";
        document.getElementById("rsocial").style.display="inline-block"; 
        document.getElementById("identifiant").style.display="inline-block";
        document.getElementById("adressEmp").style.display="inline-block";
    }
})

var bouton_enregistre = document.getElementById("boutonsave");
var champ_texte = document.getElementsByClassName("texte")
bouton_enregistre.addEventListener("click",validation);
function validation(event){
    /*if(texte.validity.valueMissing){
        event.preventDefault();
        texte.textContent="champ obligatoire";
        texte.style.color="red";
    }*/
}
/*var type_compte_epargne = document.getElementById("typeEpargne");
type_compte_epargne.addEventListener("change",(event)=>{
    event.preventDefault();
    console.log(type_compte_epargne.value);


function Verification() {
    var Nom = document.getElementById('fname').value;
    var Email = document.getElementById('email').value;
if(Nom==''){
    alert('Vous devez remplir le champ nom !');
    document.getElementById('fname').style.backgroundColor="red";
    document.getElementById('fname').style.color="#FFF";
    return false;
}
else{
    document.getElementById('fname').style.backgroundColor="#9C6";
    }
}*/