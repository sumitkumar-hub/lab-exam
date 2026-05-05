const express = require('express');
const app = express();
const port = 3000;

// Student Data
const students = [
  { name: "Aman", marks: 80 },
  { name: "Riya", marks: 45 },
  { name: "John", marks: 60 }
];

// Route to display table
app.get('/', (req, res) => {

  let table = `
    <html>
    <head>
      <title>Dynamic Table</title>
      <style>
        table { border-collapse: collapse; width: 50%; margin: auto; }
        th, td { border: 1px solid black; padding: 10px; text-align: center; }
        th { background-color: #f2f2f2; }
      </style>
    </head>
    <body>
      <h2 style="text-align:center;">Student Result Table</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Marks</th>
          <th>Result</th>
        </tr>
  `;

  students.forEach(s => {
    let result = s.marks >= 50 ? "Pass" : "Fail";

    table += `
      <tr>
        <td>${s.name}</td>
        <td>${s.marks}</td>
        <td>${result}</td>
      </tr>
    `;
  });

  table += `
      </table>
    </body>
    </html>
  `;

  res.send(table);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:3000`);
});