const express = require('express');
const fs = require('fs-extra');
const multer = require('multer');
const csv = require('csv-parser');
const path = require('path');
const { Parser } = require('json2csv');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'weddingUI/dist')));



const upload = multer({ dest: 'uploads/' });

app.post('/post', upload.single('file'), (req, res) => {
    try {
        const filePath = req.file.path;
        const results = [];

        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                fs.unlinkSync(filePath);
                fs.writeFileSync('output.json', JSON.stringify(results, null, 2));
                res.json(results);
            })
            .on('error', (error) => {
                console.error(error);
                res.status(500).json({ error: 'An error occurred while processing the CSV file' });
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
    fs.readFile('output.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
    
        const jsonData = JSON.parse(data);
        jsonData.forEach(item => {
            const amount = parseFloat(item.Amount.replace(/,/g, ''));
            if (amount < 100000) {
                item.Status = 'single';
            } else if (amount === 100000) {
                item.Status = 'double';
            } else if (amount >= 150000) {
                item.Status = 'triple';
            }
        });
    
        fs.writeFileSync('output.json', JSON.stringify(jsonData, null, 2));
    });
});


app.get('/view', (req, res) => {
    try {
        const jsonData = fs.readFileSync('output.json', 'utf8');
        if (!jsonData) {
            res.status(400).json({ error: 'File is empty' });
            return;
        }
        let parsedData;
        try {
            parsedData = JSON.parse(jsonData);
        } catch (error) {
            res.status(400).json({ error: 'Invalid JSON' });
            return;
        }
        res.json(parsedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while reading the file' });
    }
});

app.get('/download', (req, res) => {
    fs.readFile('output.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while reading the file' });
            return;
        }

        const jsonData = JSON.parse(data);
        const json2csvParser = new Parser();
        const csvData = json2csvParser.parse(jsonData);

        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=output.csv');
        res.send(csvData);
    });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/weddingUI/dist/index.html'));
  });


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
