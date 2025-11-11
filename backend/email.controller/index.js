const nodemailer = require("nodemailer");
const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  email: Joi.string().email().required(),
  subject: Joi.string().min(1).max(150).required(),
  message: Joi.string().min(1).required(),
});

const generateEmail = async (req, res) => {
  try {
    // Validate request body
    const { error } = contactSchema.validate(req.body, { abortEarly: false });
    if (error) {
      // Collect all validation messages
      const messages = error.details.map((err) => err.message);
      return res.status(400).json({ success: false, errors: messages });
    }

    const { email, name, subject, message } = req.body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // HTML email layout
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #4CAF50;">📩 New Contact Message</h2>
        <p>You have received a new message from your website contact form:</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Subject:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${subject}</td>
          </tr>
        </table>
        <div style="margin-top: 20px;">
          <h3 style="margin-bottom: 10px;">Message:</h3>
          <p style="background: #f9f9f9; border-left: 4px solid #4CAF50; padding: 10px; white-space: pre-line;">
            ${message}
          </p>
        </div>
        <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;" />
        <p style="font-size: 12px; color: #777;">
          This message was sent automatically from your website contact form.
        </p>
      </div>
    `;

    // Send email
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: `New Message from ${name} - ${subject}`,
      html: htmlContent,
    });

    console.log("Message sent:", info.messageId);
    res.status(200).json({ success: true, message: "Email sent successfully" });

  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending email", error });
  }
};

module.exports = generateEmail ;
