import z from "zod";

const credentialSchema = z.object({
  fileName: z.string(),
  mimeType: z.string(),
  size: z.number(),
  url: z.string(),
});

export const registerSchema = z.object({
  pushToken: z.string(),
  email: z.string(),
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
  sex: z.enum(["MALE", "FEMALE"]),
  birthdate: z.string(),
  phone: z.string(),
  address: z.string(),
  password: z.string(),
  credentials: z.array(credentialSchema.nullable()),
});

export type RegisterForm = z.infer<typeof registerSchema>;
