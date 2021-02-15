module.exports = (employees) => {
    console.log(employees);
    let htmlContent = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Team</title>
</head>
<body>
    <header>
        <h1>Team</h1>
    </header>
    <div class="flex">\n`;

    for (var num = 0; num < employees.length; num++) {
        if (employees[num].getRole() === "Manager") {
            var lastRow = `Office Number: ${employees[num].getOfficeNumber()}`;
        }
        else if (employees[num].getRole() === "Engineer") {
            var lastRow = `GitHub: <a href="https://github.com/${employees[num].getGithub()}">${employees[num].getGithub()}</a>`;
        }
        else {
            var lastRow = `School: ${employees[num].getSchool()}`;
        }
        htmlContent = htmlContent + 
`       <div class="employee">
            <div class="title">
                <h2>${employees[num].getName()}</h2>
                <h3>${employees[num].getRole()}</h3>
            </div>
            <div class="details">
                <p>ID: ${employees[num].getId()}</p>
                <p>Email: <a href="mailto:${employees[num].getEmail()}">${employees[num].getEmail()}</a></p>
                <p>${lastRow}</p>
            </div>
        </div>\n`
    }
    htmlContent = htmlContent + 
`   </div>
</body>
</html>`
    return htmlContent;
}