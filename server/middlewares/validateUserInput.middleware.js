const validate = (schema) => async (req, res, next) => {
  try {
    const validatedInput = await schema.parseAsync(req.body);
    req.body = validatedInput;
   
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validate;
