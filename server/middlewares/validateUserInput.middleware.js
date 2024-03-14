const validate = (schema) => async (req, res, next) => {
  try {
    const validatedInput = await schema.parseAsync(req.body);
    req.body = validatedInput;

    next();
  } catch (error) {
    // console.log(error);
    return res.status(400).json(error.issues[0].message);
  }
};

module.exports = validate;
