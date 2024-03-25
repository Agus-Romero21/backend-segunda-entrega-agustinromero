const fs = require ('fs');

class ProductManager {
    #product;
    
    constructor(){
        this.#product = [];
    }
    
    

   getProduct(){
    return this.#product;
   }

   /**
    * 
    * @param {string} title 
    * @param {string} description 
    * @param {number} price 
    * @param {string} thumbnail
    * @param {number} stok 
    */
   agregarProductos(title, description, price, thumbnail, stok){
        const product= {
            id: this.#getNextId(),
            title,
            description,
            price,
            thumbnail,
            code: this.#getNextCode(),
            stok,
        };
        if (!title || !description || !price ||!thumbnail ||!stok){
            throw new Error("Faltan parametros por completar")
        }
        this.#product.push(product);

        

    }

    #getNextId(){
        if (this.#product.length === 0){
            return 1;
        }
        return this.#product.at(-1).id +1;
    }

    #getNextCode(){
        if (this.#product.length === 0){
            return 10;
        }
        return this.#product.at(-1).code +5;
    }

    codeValue(){
        const productos = producto.reduce((acumulador, elemento) => {
            Objet.keys(elemento).forEach(code => {
                if(!acumulador.includes(code)){
                    acumulador.push(code)
                }
            })
            return acumulador;
        }, []);
    }

    

    getProductById(x){
        const p = this.#product;

        const buscarId  = p.find(objeto => objeto.id === x);
                if(buscarId){
                    return console.log(buscarId.title);
                } else {
                    return console.log("ERROR")
                }
    }


}

const productManager = new ProductManager();
productManager;
productManager.getProduct();

productManager.agregarProductos(`arroz`, `made in china`, 200, `../img/arroz.jpeg`, 40);
productManager.agregarProductos(`bubbaloo`, `chicle`, 40, `../img/bubbaloo.jpeg`,200 );
productManager.agregarProductos(`cocacola`, `bebida`, 2500, `../img/cocacola.jpeg`, 20);
productManager.agregarProductos(`fideos`, `tallarines`, 700, `../img/fideos.jpeg`, 60);
productManager.agregarProductos(`flynn paff`, `caramelos`, 150, `fylnn-paff.jpeg`, 200);
productManager.agregarProductos(`gomitas`, `dulces`, 20, `../img/gomitas.jpeg`, 200);
productManager.agregarProductos(`vino`, `contenido alcoholico`, 2500, `../img/vino.jpeg`, 40);

producto = productManager.getProduct();

const writeFile = async() => {
            try{
                await fs.promises.writeFile('./data.json', '', 'utf-8');
                console.log('se creo el archivo "data.json"');

                await fs.promises.appendFile('./data.json', JSON.stringify(producto, null, '\n'))
                console.log('Se modifico el archivo "data.json"')
            } catch (error) {
                console.log(error.message)
            }
        }
        writeFile();

console.log("----------------------------------------------------------------------");

productManager.getProductById(5); //CAMBIE EL NUMERO DEL PARAMATRO PARA VER EL NOMBRE DEL PRODUCTO O EL MENSAJE DE ERROR
console.log("----------------------------------------------------------------------");
