export default class Mp3Conversor {
  static async getMp4Url(req, res, next) {
    try {
      const { mp4 } = req.query;

      req.mp4 = mp4;

      await next();
    } catch (err) {
      console.err(err);
    }
  }
}
