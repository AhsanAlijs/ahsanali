import nodemailer, { createTransport } from "nodemailer";

export const sendMail = async function (
  name: string,
  email: string | "SELF",
  subject: string,
  message: string,
): Promise<{ status: number; message: string }> {
  const user = process.env.NODEMAILER_EMAIL;
  const pass = process.env.NODEMAILER_PASS;

  if (!user && !pass) {
    return new Promise((resolve) =>
      resolve({ status: 500, message: "Internal server error" }),
    );
  }

  const transporter = createTransport({
    service: "gmail",
    auth: {
      user:process.env.NODEMAILER_EMAIL,
      pass:process.env.NODEMAILER_PASS,
    },
  });
  // App Password oqgm qfiy edum mfwv

  // const transporter =createTransport({
  //   host: 'smtp.ethereal.email',
  //   port: 587,
  //   auth: {
  //     user: 'cecilia.macejkovic19@ethereal.email',
  //     pass: 'JJDFswJP6WJ9PqPrCU'
  //   }
  // });

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: "Portfolio: [" + subject + " ]",
    text: `${name}: <${email}>\n${message}`,
  };

  return new Promise((resolve) => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        resolve({ status: 500, message: "Failed to send mail" });
      } else {
        resolve({ status: 200, message: "Mail send successfully" });
      }
    });
  });
};
