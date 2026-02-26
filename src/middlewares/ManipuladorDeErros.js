import ErroBase from "../errors/ErroBase.js";
import NaoEncontrado from "../errors/NaoEncontrado.js";
import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js";

export default function manipuladorDeErros(err, req, res, next) {
  if (err instanceof NaoEncontrado) {
    err.enviarResposta(res);
  } else if (err instanceof RequisicaoIncorreta) {
    err.enviarResposta(res);
  } else {
    return new ErroBase().enviarResposta(res);
  }
}
