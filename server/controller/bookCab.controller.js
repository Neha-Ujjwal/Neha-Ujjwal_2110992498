const bookCab = (req, res) => {
  try {
    return res.status(200).json({ msg: "successfull" });
  } catch (error) {
    res.status(400).json({ err: error });
  }
};

module.exports = bookCab;
