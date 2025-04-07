const admin = require("firebase-admin");
const express = require('express');
const generateNumericOTP = require("./OTP");
const cors = require('cors');

const serviceAccount = require("./jayjobs-41b3d-firebase-adminsdk-fbsvc-6fbea98863.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const app = express();
app.use(express.json());

app.use(cors({
    origin: '*'
}));
console.log('this is it', admin.auth.applyActionCode)

const oobCodeStorage = {};

app.post('/api/storeOobCode', async (req, res) => {
    const { oobCode } = req.body;
    const uniqueId = generateNumericOTP();
    const timeStamp = new Date().getTime() + 5 * 60 * 1000; // Time stamp for this request only.
    oobCodeStorage[uniqueId] = { code: oobCode, expires: timeStamp }; // Store the oobcode and the expiration time.
    try {
        res.json({ uniqueId });
    } catch (error) {
        console.error("Error storing oobCode:", error);
        res.status(500).json({ error: "Failed to store oobCode." });
    }
});

app.post('/api/applyActionCode', async (req, res) => {
    const { uniqueId } = req.body;
    const storedOob = oobCodeStorage[uniqueId];
    console.log(storedOob)
    if (!storedOob) {
        return res.status(400).json({ error: 'oobCode not found' });
    }
    if (new Date().getTime() > storedOob.expires) {
        delete oobCodeStorage[uniqueId];
        return res.status(410).json({ error: 'oobCode expired' });
    }
    try {
        await admin.auth().applyActionCode(storedOob.code);
        delete oobCodeStorage[uniqueId];
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

//Background task to delete expired codes.
setInterval(() => {
    const now = new Date().getTime();
    for (const uniqueId in oobCodeStorage) {
        if (oobCodeStorage[uniqueId].expires < now) {
            delete oobCodeStorage[uniqueId];
            console.log(`Deleted expired oobCode: ${uniqueId}`);
        }
    }
}, 5000); // Check every minute.