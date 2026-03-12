import ErrorBase from "./ErrorBase.js";

export default class NaoEncontrado extends ErrorBase {
  constructor(mensagem = "Página não encontrada") {
    super(mensagem, 404);
  }
}
