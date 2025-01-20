const fs = require('fs');
const path = require('path');
const { Client, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Initialize the WhatsApp client
const client = new Client();

client.on('qr', (qr) => {
    // Generate and scan this QR code with your phone
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');

    // Folder containing the images
    const folderPath = path.join(__dirname, 'images');

    // WhatsApp number to send the images to (in international format)
    const whatsappNumber = '1234567890@c.us'; // Replace with the actual number

    // Read the image file names from the folder
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error('Error reading the folder:', err);
            return;
        }

        // Filter out non-image files (optional)
        const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

        // Send each image file to the WhatsApp number
        imageFiles.forEach(file => {
            const filePath = path.join(folderPath, file);
            const media = MessageMedia.fromFilePath(filePath);

            client.sendMessage(whatsappNumber, media).then(() => {
                console.log(`Sent ${file} to ${whatsappNumber}`);
            }).catch(err => {
                console.error('Error sending the image:', err);
            });
        });
    });
});

client.initialize();