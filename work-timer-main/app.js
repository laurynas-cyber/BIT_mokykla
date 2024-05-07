require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3333;
const fs = require('node:fs');
const startDate = '2024-05-01';

app.use(express.static('public'));
app.use(bodyParser.json());

const makeDateLine = date => {
  return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}-${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;
}

const fillWithFromStartDate = data => {
  const fillData = [];
  let fill = false;
  const currentDate = new Date(startDate);
  currentDate.setDate(currentDate.getDate() - 1);
  const end = new Date();
  end.setDate(end.getDate() - 1);
  end.setHours(0, 0, 0, 0);
  do {
    currentDate.setDate(currentDate.getDate() + 1);
    const date = makeDateLine(currentDate);
    const item = data.find(item => item.d === date);
    if (!item) {
      fillData.push({ d: date, l: [] });
      fill = true;
    } else {
      fillData.push(item);
    }
  } while (currentDate <= end);
  return { fillData, fill };
}


app.get('/get-data', (_, res) => {
  fs.readFile('db/data.json', 'utf8', (err, data) => {
    if (err) {
      const { fillData } = fillWithFromStartDate([]);
      fs.writeFile('db/data.json', JSON.stringify(fillData), (err) => {
        if (err) {
          res.status(400);
        } else {
          res.status(201).json(fillData.sort((a, b) => a.d > b.d ? -1 : 1));
        }
      });
    } else {
      const { fillData, fill } = fillWithFromStartDate(JSON.parse(data));
      if (fill) {
        fs.writeFile('db/data.json', JSON.stringify(fillData), (err) => {
          if (err) {
            res.status(400);
          } else {
            res.status(201).json(fillData.sort((a, b) => a.d > b.d ? -1 : 1));
          }
        });
      } else {
        res.json((JSON.parse(data)).sort((a, b) => a.d > b.d ? -1 : 1));
      }
    }
  });
});

app.post('/save-data', (req, res) => {
  fs.readFile('db/data.json', 'utf8', (err, data) => {
    if (err) {
      res.status(400);
    } else {
      const currentData = JSON.parse(data);
      const writeData = { s: req.body.started, e: req.body.stopped, t: req.body.time };
      const date = currentData.find(item => item.d === req.body.date);
      if (!date) {
        const newDate = { d: req.body.date, l: [writeData] };
        currentData.push(newDate);
      } else {
        date.l.unshift(writeData);
      }
      fs.writeFile('db/data.json', JSON.stringify(currentData), (err) => {
        if (err) {
          res.status(400);
        } else {
          res.status(201).json({ message: 'Data saved' });
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Timer is running on ${port}`);
})