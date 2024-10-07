const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const profilesFilePath = './profiles.json';

app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}.`);
});

app.post('/profile', (req, res) => {
    const { Name, Title, TargetedKeywords, Education, Certification, Contact } = req.body;

    if (!Name || !Title || !TargetedKeywords || !Education || !Certification || !Contact) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    fs.readFile(profilesFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read profiles file' });
        }

        const profiles = JSON.parse(data);
        profiles.push(req.body);

        fs.writeFile(profilesFilePath, JSON.stringify(profiles, null, 2), 'utf8', (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save profiles' });
            }
            res.status(201).json({ message: 'Profile saved successfully' });
        });
    });
});

app.get('/profiles', (req, res) => {
    fs.readFile(profilesFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read profiles file' });
        }

        res.status(200).json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
