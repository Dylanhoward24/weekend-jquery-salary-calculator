console.log('in script.js');

// THE INCANTATION
$(document).ready(onReady);

// event handlers need to be in onReady
function onReady() {
    console.log('so ready');
    
    $('#submitButton').on('click', addToList);

}

let employees = [];

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
    
    console.log(employee);
    
    // push new object to employees array
    employees.push(employee);

    // empty the input fields
    $('#firstNameInputText').val('');
    $('#lastNameInputText').val('');
    $('#idInputText').val('');
    $('#titleInputText').val('');
    $('#annualSalaryInputText').val('');
}