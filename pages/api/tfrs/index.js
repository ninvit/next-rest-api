import dbConnect from "../../../utils/dbConnect";
import Tfr from "../../../models/Tfr";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const tfrs = await Tfr.find({});
        res.status(200).json({ sucess: true, data: tfrs });
      } catch (error) {
        res.status(400).json({ sucess: false });
      }
      break;

    case "POST":
      try {
        const tfr = await Tfr.create(req.body);

        res.status(201).json({ sucess: true, data: tfr });
      } catch (error) {
        res.status(400).json({ sucess: false });
      }
      break;
    default:
      res.status(400).json({ sucess: false });
      break;
  }
};
