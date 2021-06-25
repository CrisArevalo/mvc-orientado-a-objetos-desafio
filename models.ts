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
    const filtrado = this.array.filter(t => {
      return t.id == id;
    }) 

    return filtrado;
  } // FUNCIONA //

  save(){
    fs.writeFile("contacts.json", JSON.stringify(this.array),"utf8", (err) => {
      if(err) throw err;
      console.log("Data has been saved!");      
    });
  } // FUNCIONA //
}
function main(){
  const con = new ContactsCollection();
  const persona = new Contact(5,"Cris");

  con.load();
  con.addOne(persona);
  con.save();

  
}
main();

//export { ContactsCollection };
