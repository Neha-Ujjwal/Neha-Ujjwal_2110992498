const z = require("zod");

const userSchema = z.object({
  email: z.string().email().nonempty(),
  source: z.enum(["A", "B", "C", "D", "E"]).refine(
    (source) => {
      return ["A", "B", "C", "D", "E"].includes(source);
    },
    { message: "City not valid" }
  ),
  destination: z
    .enum(["A", "B", "C", "D", "E"])
    .refine(
      (destination, data) => {
        // Check if data and data.source are defined and destination is not the same as source
        return !data || !data.source || destination !== data.source;
      },
      { message: "Destination cannot be the same as the source" }
    )
    .refine(
      (destination) => {
        // Validate destination against allowed values
        return ["A", "B", "C", "D", "E"].includes(destination);
      },
      { message: "City not valid" }
    ),
});

module.exports = userSchema;
