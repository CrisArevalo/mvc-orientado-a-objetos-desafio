import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
  constructor(id:number,name:string){
    this.id = id;
    this.name = name;
  }
}

class ContactsCollection {
  array: Contact[] = [];

  load(){ //Meto los datos del JSON al array.
    /*contacts.forEach(t=> { //"contacts" es del import.
      this.array.push(t);
    }) SIN USAR LIBRERIAS*/
    
    /* CON LIBRERIA (JSON) */
    const data = jsonfile.readFileSync("./contacts.json");
    this.array = data;

  } // FUNCIONA //

  addOne(contact:Contact){
    this.array.push(contact);
  } // FUNCIONA //

  getAll(){
    return this.array;
  } // FUNCIONA //

  getOneById(id:number){
    const i = this.array.find(t =>{ //find te permite sacar 
      return t.id == id;            // del array el objeto limpio :D.
    })
    
    return i;
  } // FUNCIONA //

  save(){
    jsonfile.writeFileSync("./contacts.json",this.array);
  } // FUNCIONA //
}

export { ContactsCollection };
