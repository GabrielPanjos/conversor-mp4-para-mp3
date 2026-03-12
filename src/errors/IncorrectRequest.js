import ErrorBase from "./ErrorBase.js";

export default class RequisicaoIncorreta extends ErrorBase {
  constructor(mensagem = "Um ou mais dados fornecidos estão incorretos.") {
    super(mensagem, 400);
  }
}
