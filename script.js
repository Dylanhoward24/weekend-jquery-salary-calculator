console.log('in script.js');

// THE INCANTATION
$(document).ready(onReady);

// global variables
let employees = [];
let salarySum = 0;

// event handlers need to be in onReady
function onReady() {
    console.log('so ready');
    
    $('#submitButton').on('click', addToList);

    // delegation
    $(document).on('click', '#deleteBtn', removeFromList);

}

// addToList function (this is what happens
// whenever the submit button is clicked)
function addToList() {
    console.log('added items to list');

    let employee = {
        firstName: $('#firstNameInputText').val(),
        lastName: $('#lastNameInputText').val(),
        id: $('#idInputText').val(),
        title: $('#titleInputText').val(),
        annualSalary: $('#annualSalaryInputText').val()
    };
    
    // push new object to employees array
    employees.push(employee);
    // log array employees to make sure everything worked
    console.log(employees);

    // empty the input fields
    $('#firstNameInputText').val('');
    $('#lastNameInputText').val('');
    $('#idInputText').val('');
    $('#titleInputText').val('');
    $('#annualSalaryInputText').val('');

    // empty out the table
    let el = $('#tableOfEmployees');
    el.empty();

    // empty the total monthly
    $('#totalMonthly').empty();

    // append the outline of the table's contents
    $('#tableOfEmployees').append(`
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>ID</th>
            <th>Title</th>
            <th>Annual Salary</th>
            <th></th>
        </tr>
    `)

    // append to DOM (loop through employees array each time button is clicked)
    for (let employee of employees) {
        $('#tableOfEmployees').append(`
            <tr>
                <th>${employee.firstName}</th>
                <th>${employee.lastName}</th>
                <th>${employee.id}</th>
                <th>${employee.title}</th>
                <th>$${employee.annualSalary}</th>
                <th><button id="deleteBtn">Delete</button></th>
            </tr>
        `);
        salarySum += Number(employee.annualSalary);
        console.log('salary sum', salarySum);
    } // end for loop

    // append the monthly onto the DOM
    $('#totalMonthly').append(`Total Monthly: $${(salarySum/12).toFixed(2)}`);

} // end addToList

function removeFromList() {
    console.log('in removeFromList');
    
    let el = $(this).parent();
    el.parent().remove();

    employees.splice(el, 1);
} // end removeFromList