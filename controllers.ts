import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
  constructor(action, params){
    this.action = action;
    this.params = params;
  }
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    //this.contacts = contacts;
    this.contacts.load();

  }

  processOptions(options: ContactsControllerOptions) {
    if(options.action == "get" && options.params){
      const contacto = this.contacts.getOneById(options.params);
    }
  }
}
function main(){
  const mock = new ContactsControllerOptions("get",1);
  const prueba = new ContactsController();
}

main();
export { ContactsController };
