import express from "express";
import cors from "cors";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: `${__dirname}/.env` });
console.log("SendGrid API Key:", process.env.SENDGRID_API_KEY);
const app = express();
const port = 3001;

// CORS configuration - Allow all origins
const corsOptions = {
  origin: "*", // Allow all origins
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
    "Origin",
  ],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log("Request Headers:", req.headers);
  console.log("Request Body:", req.body);
  next();
});

// Initialize SendGrid
if (!process.env.SENDGRID_API_KEY) {
  console.error("SendGrid API Key is not set in environment variables");
  process.exit(1);
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Test endpoint
app.get("/test", (req, res) => {
  console.log("Test endpoint called");
  res.json({ message: "Server is running!" });
});

// Email endpoint
app.post("/send-email", async (req, res) => {
  console.log("Received email request:", JSON.stringify(req.body, null, 2));

  try {
    const { companyName, fullName, email, gameType, numberOfGames } = req.body;

    // Validate email field
    if (!email) {
      console.error("Email validation failed: email is missing");
      throw new Error("Recipient email is required");
    }

    // Log all received fields
    console.log("Parsed request fields:", {
      companyName,
      fullName,
      email,
      gameType,
      numberOfGames,
    });

    const msg = {
      to: email,
      from: "contact@bastaai.com",
      subject: "New Waitlist Registration",
      text: `
        Company Name: ${companyName}
        Full Name: ${fullName}
        Email: ${email}
        Game Type: ${gameType}
        Number of Games: ${numberOfGames}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            h3 { color: #2c3e50; }
            p { margin: 10px 0; }
            .label { font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <h3>New Waitlist Registration</h3>
            <p><span class="label">Company Name:</span> ${companyName}</p>
            <p><span class="label">Full Name:</span> ${fullName}</p>
            <p><span class="label">Email:</span> ${email}</p>
            <p><span class="label">Game Type:</span> ${gameType}</p>
            <p><span class="label">Number of Games:</span> ${numberOfGames}</p>
          </div>
        </body>
        </html>
      `,
    };
    console.log("Preparing to send email with SendGrid to:", email);
    await sgMail.send(msg);
    console.log("Email sent successfully");

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    console.error("Error stack:", error.stack);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.message,
    });
  }
});

// New endpoint for contact form
app.post("/send-contact", async (req, res) => {
  console.log(
    "Received contact form request:",
    JSON.stringify(req.body, null, 2)
  );

  try {
    const { email, company, firstName, location, lastName, enquiry, message } =
      req.body;

    // Log all received fields
    console.log("Parsed contact form fields:", {
      email,
      company,
      firstName,
      location,
      lastName,
      enquiry,
      message,
    });

    // Validate email field
    if (!email) {
      console.error("Contact form validation failed: email is missing");
      throw new Error("Recipient email is required");
    }

    const msg = {
      to: email,
      from: "contact@bastaai.com",
      subject: "New Contact Form Submission",
      text: `
        Email: ${email}
        Company: ${company}
        First Name: ${firstName}
        Location: ${location}
        Last Name: ${lastName}
        Enquiry Type: ${enquiry}
        Message: ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            h3 { color: #2c3e50; }
            p { margin: 10px 0; }
            .label { font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <h3>New Contact Form Submission</h3>
            <p><span class="label">Email:</span> ${email}</p>
            <p><span class="label">Company:</span> ${company}</p>
            <p><span class="label">First Name:</span> ${firstName}</p>
            <p><span class="label">Location:</span> ${location}</p>
            <p><span class="label">Last Name:</span> ${lastName}</p>
            <p><span class="label">Enquiry Type:</span> ${enquiry}</p>
            <p><span class="label">Message:</span> ${message}</p>
          </div>
        </body>
        </html>
      `,
    };

    console.log(
      "Preparing to send contact form email with SendGrid to:",
      email
    );
    await sgMail.send(msg);
    console.log("Contact form email sent successfully");

    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending contact form email:", error);
    console.error("Error stack:", error.stack);
    res.status(500).json({
      success: false,
      message: "Failed to send message",
      error: error.message,
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Global error handler caught:", err);
  console.error("Error stack:", err.stack);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: err.message,
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
