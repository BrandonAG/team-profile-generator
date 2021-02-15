module.exports = [
    {
        type: 'input',
        name: 'employee-name',
        message: "What is the employee's name?",
    },
    {
        type: 'input',
        name: 'employee-id',
        message: "What is the employee's ID?",
    },
    {
        type: 'input',
        name: 'employee-email',
        message: "What is the employee's email?",
    },
    {
        type: 'list',
        name: 'employee-role',
        message: "What is the employee's role?",
        choices: [
            {
                name: 'Manager',
            },
            {
                name: 'Engineer',
            },
            {
                name: 'Intern',
            },
        ]
    }
];