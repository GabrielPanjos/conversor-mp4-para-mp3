import ErrorBase from "../errors/ErrorBase.js";
import NotFound from "../errors/NotFound.js";
import IncorrectRequest from "../errors/IncorrectRequest.js";

export default function manipuladorDeErros(err, req, res, next) {
  if (err instanceof NotFound) {
    err.enviarResposta(res);
  } else if (err instanceof IncorrectRequest) {
    err.enviarResposta(res);
  } else {
    return new ErrorBase().enviarResposta(res);
  }
}
