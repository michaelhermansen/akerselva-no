import { NextApiRequest, NextApiResponse } from "next";
import { z, ZodError } from "zod";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST methods are allowed" });
  }

  try {
    const email = z.string().email().parse(JSON.parse(req.body).email);

    console.log(email);

    return res.status(200).json({ message: "Email successfully submitted" });
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json({ message: "Missing or invalid email address" });
    }

    return res.status(500).json({ message: "Unknown server error" });
  }
}
