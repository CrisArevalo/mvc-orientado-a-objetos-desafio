import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const resultado = minimist(argv); //MINIMIST es una libreria. npm install minimist
  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  const resu = controller.processOptions(params);
  console.log(resu);
}

main();
