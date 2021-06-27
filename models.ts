import * as contacts from "./contacts.json";
const fs = require('fs');
class Contact {
  id: number;
  name: string;
  constructor(id:number,name:string){
    this.id = id;
    this.name = name;
  }
}

class ContactsCollection {
  array: any[] = [];
  constructor(){

  }

  load(){ //Meto los datos del JSON al array.
    contacts.forEach(t=> { //"contacts" es del import.
      this.array.push(t);
    })
  } // FUNCIONA //

  addOne(Contact:Contact){
    const contacto = {
      id:Contact.id,
      name:Contact.name
    }
    this.array.push(contacto);
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
    const saved = fs.writeFile("contacts.json", (this.array),"utf8", (err) => {
      if(err) throw err;
      console.log("Data has been saved!");      
    });

    return saved;
  } // Por arreglar //
}
function main(){
  const con = new ContactsCollection();
  const persona = new Contact(5,"Cris");

  con.load();
  const prueba = con.getOneById(5);
  console.log(prueba);
  
  
}
main();

export { ContactsCollection };
