const fs = require('fs');
const Product = require("./product");
const { deserialize } = require('v8');
const { ALL } = require('dns');
const { Console } = require('console');
const prompt = require("./node_modules/prompt-sync")();




// const p1 = new Product("hp","512SSD 8GB RAM",20,20000);
// const jsonString = JSON.stringify(p1);
// fs.writeFile('product.json',jsonString,(eror)=>{
//     if (eror) {
//         console.error('erroooooooooooor',eror);
//         return;
//     }
//     console.log('valider');
// });
// fs.readFile('product.json','utf-8',(errorr,rekkas)=>{
//     if(errorr){
//         console.error('erroooooooooor',errorr);
//         return;
//     }
//     // const data = JSON.parse(rekkas);
//     console.log(data);
// });


const products = fs.readFileSync("product.json");
let allProducts = JSON.parse(products); // convertir le contenu de json vers un tableau qui contient des objets


function ajoutter() {
    nom = prompt("entrer votre nom :");      
    description=prompt("entrer la description : ");
    quantite=parseInt(prompt("entrer leur quantite :"));
    prix = parseInt(prompt("entrer le prix:"));

    allProducts.push({"nom":nom,"description":description,"quantity":quantite,"price":prix});

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

    let id = Number(prompt("entrer le nombre de produit"));
    allProducts.splice(id - 1, 1);

}

function modiffier() {

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
            break;
            
    }
} while (choix <= 5);







