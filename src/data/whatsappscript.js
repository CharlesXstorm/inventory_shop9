// require('dotenv').config();
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const twilio = require("twilio");
const cloudinary = require("cloudinary").v2;

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: "dyftfueq7",
  api_key: "454858888883696",
  api_secret: "TuridC6wR5790otRph-YzFalTgU",
});

const accountSid = "AC549f2c6dd7cf9dabd0be0e4207aedb03";
const authToken = "1c030d20600e55db1bfd6a17affd960b";
const client = twilio(accountSid, authToken);

const from = "whatsapp:+14155238886";
const to = "whatsapp:+2348064780412";

// Folder containing the images
const folderPath = path.join(__dirname, "images");

// Read the image file names from the folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading the folder:", err);
    return;
  }

  // Upload each image file to Cloudinary and send to the WhatsApp number
  files.forEach((file) => {
    const filePath = path.join(folderPath, file);

    cloudinary.uploader.upload(filePath, (error, result) => {
      if (error) {
        console.error("Error uploading the image:", error);
        return;
      }

      const mediaUrl = result.secure_url;

      client.messages
        .create({
          body: `Sending you an image: ${file}`,
          from: from,
          to: to,
          mediaUrl: mediaUrl,
        })
        .then((message) => {
          console.log(`Sent ${file} to ${to}: ${message.sid}`);
        })
        .catch((err) => {
          console.error("Error sending the image:", err.message);
        });
    });
  });
});
