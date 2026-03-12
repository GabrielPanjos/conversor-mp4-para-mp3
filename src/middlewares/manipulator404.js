import NotFound from "../errors/NotFound.js";

export default function manipulador404(req, res, next) {
  const erro404 = new NotFound();
  next(erro404);
}
