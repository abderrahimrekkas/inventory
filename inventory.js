const fs = require('fs');
const Product = require("./product");
const prompt = require("./node_modules/prompt-sync")();

let allProducts = fs.readFileSync("product.json");

 allProducts = JSON.parse(allProducts); 
var id =1;
function ajoutter() {
   
    nom = prompt("entrer votre nom :");      
    description=prompt("entrer la description : ");
    quantite=parseInt(prompt("entrer leur quantite :"));
    prix = parseInt(prompt("entrer le prix:"));

    allProducts.push({"id":id,"nom":nom,"description":description,"quantite":quantite,"price":prix});
    id++;
}
function Menu() {
    console.log("1.ajoutter un produit");
    console.log("2.afficher les produit");
    console.log("3.modiffier un produit");
    console.log("4.supprimer un produit");
    console.log("5.quitter");
}
function afficher() {
    console.log(allProducts);

    }
function supprimer() {

    let id = parseInt(prompt("entrer le nombre de produit qui veux supprimer: "));
    const index = allProducts.find((p) => p.id === id);

    if (index === -1) {
        console.log('Produit introuvable.');
        return;
    }


    allProducts.splice(id - 1, 1);

}
function modiffier() {
    let id= parseInt(prompt("entrer le nombre que veux supprimer:"));
    const product = allProducts.find((p)=>p.id===id);
    if(!product){
        console.log("Produit introuvable");
        return;
    }
    let nom = prompt("Entrer nouveux nom");
    let description = prompt("Entrer nouveux description");
    let prix = Number(prompt("Entrer nouveux prix"));
    let quantite = Number(prompt("Entrer nouveux quantite"));

    allProducts[id - 1].nom= nom;
    allProducts[id - 1].description = description;
    allProducts[id - 1].prix = prix;
    allProducts[id - 1].quantite = quantite;

}


let choix;

do {
    Menu();
    choix = parseInt(prompt("ENTRER VOTRE CHOIX : "));
    switch (choix) {
        case 1:
            ajoutter ();
            break;
	    case 2:
            afficher();
            break;
	case 3:
            modiffier();
            break;
		      case 4:
            supprimer();
                break;
        case 5:
            fs.writeFileSync("product.json", JSON.stringify(allProducts, null, 4));
            return;
        default:
            console.log("Choix invalide !");
            
    }
} while (choix <= 5);
