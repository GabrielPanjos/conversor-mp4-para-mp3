export default class conversor {
  static async getMp4Url(req, res, next) {
    try {
      const { mp4 } = req.query;

      res.status(200).send("Arquivo mp4 enviado com sucesso.");
      next(mp4);
    } catch (err) {
      console.err(err);
    }
  }
}
