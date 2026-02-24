import ErroBase from "../errors/ErroBase.js";
import NaoEncontrado from "../errors/NaoEncontrado.js";

export default function manipuladorDeErros(err, req, res, next) {
  if (err instanceof NaoEncontrado) {
    err.enviarResposta(res);
  } else {
    return new ErroBase().enviarResposta(res);
  }
}
