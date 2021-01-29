import dbConnect from "../../../utils/dbConnect";
import Tfr from "../../../models/Tfr";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const tfr = await Tfr.findById(id);

        if (!tfr) {
          res.status(400).json({ sucess: false });
        }
        res.status(200).json({ sucess: true, data: tfr });
      } catch (error) {
        res.status(400).json({ sucess: false });
      }

      break;

    case "PUT":
      try {
        const tfr = await Tfr.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!tfr) {
          res.status(400).json({ sucess: false });
        }

        res.status(200).json({ sucess: true, data: tfr });
      } catch (error) {
        res.status(400).json({ sucess: false });
      }
      break;

    case "DELETE":
      try {
        const deletedTfr = await Tfr.deleteOne({ _id: id });

        if (!deletedTfr) {
          return res.status(400).json({ sucess: false });
        }

        res.status(200).json({ sucess: true, data: {} });
      } catch (error) {
        res.status(400).json({ sucess: false });
      }
      break;
    default:
      res.status(400).json({ sucess: false });
      break;
  }
};
