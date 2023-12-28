const Camp = require("../../models/Camp");
const fs = require("fs");
const path = require("path");
module.exports = async (req, res) => {
  try {
    let { campId } = req.query;
    // const imgBuffer = fs.readFileSync(
    //   path.join(
    //     "D:/Dévelopement WEB/campapp/backend/",
    //     "uploads",
    //     req.file.filename
    //   )
    // );
    // const base64Image = await imgBuffer.toString("base64");
    const imgUrl = `/uploads/${req.file.filename}`;
    const newCamp = await Camp.findByIdAndUpdate(
      campId,
      {
        $set: { imgUrl },
      },
      { new: true }
    );
    res.status(200).json({ status: true, message: "Photo has been updated" });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
