export default class Mp3Conversor {
  static async getMp4Url(req, res, next) {
    try {
      const { fileMp4 } = req.query;

      req.fileMp4 = fileMp4;

      await next();
    } catch (err) {
      console.err(err);
    }
  }
}
