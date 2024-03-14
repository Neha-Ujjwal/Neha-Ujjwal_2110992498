const z = require("zod");

const validCities = ["0", "1", "2", "3", "4"];

const userSchema = z.object({
  email: z.string().email().nonempty(),
  source: z.string().refine((source) => validCities.includes(source), {
    message: "City not valid",
  }),
  destination: z
    .string()
    .refine((destination) => validCities.includes(destination), {
      message: "City not valid",
    }),
});

module.exports = userSchema;
