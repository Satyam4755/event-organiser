const multer = require('multer');

const storage = multer.memoryStorage(); // Store files in memory buffer

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024 // Max 10MB per file
    },
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type'));
        }
    }
});

// ✅ Corrected field names
const multiFileUpload = upload.fields([
    { name: 'image', maxCount: 1 },           // for main event image
    { name: 'bannerImage', maxCount: 1 },     // corrected from 'Menuimage'
    { name: 'profilePicture', maxCount: 1 }   // for profile form
]);

module.exports = multiFileUpload;