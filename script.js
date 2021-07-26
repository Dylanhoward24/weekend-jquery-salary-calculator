console.log('in script.js');

// THE INCANTATION
$(document).ready(onReady);

// event handlers need to be in onReady
function onReady() {
    console.log('so ready');
    
    $('#submitButton').on('click', addToList);

    // declaration of monthly and annual variables
    // and division function after addToList code
    $('#totalMonthly').append(`${totalMonthlyCosts.toFixed(2)}`);

}

    // make sure the math works (it does)
    // let totalAnnualCosts = 144;
    // let totalMonthlyCosts = `${totalAnnualCosts}`/12;
    let totalAnnualCosts = 0;
    let totalMonthlyCosts = `${totalAnnualCosts}`/12;
    
// addToList function (this is what happens
// whenever the submit button is clicked)
function addToList() {
    console.log('added items to list');

    // assign the first name value to a variable
    let firstNameValue = $('#firstNameInputText').val();
    console.log('firstNameValue', firstNameValue);
    // assign the last name value to a variable
    let lastNameValue = $('#lastNameInputText').val();
    console.log('lastNameValue', lastNameValue);
    // assign the ID value to a variable
    let idValue = $('#idInputText').val();
    console.log('idValue',idValue);
    // assign the title value to a variable
    let titleValue = $('#titleInputText').val();
    console.log('titleValue', titleValue);
    // assign the annual salary value to a variable
    let annualSalaryValue = $('#annualSalaryInputText').val();
    console.log('annualSalaryValue', annualSalaryValue);

    $('#tableOfEmployees').append(`
        <tr>
            <th>${firstNameValue}</th>
            <th>${lastNameValue}</th>
            <th>${idValue}</th>
            <th>${titleValue}</th>
            <th>$${annualSalaryValue}</th>
                <th>
                    <button class="deleteBtn">Delete</button>
                </th>
        </tr>
    `)

    totalAnnualCosts+=annualSalaryValue;

    // empty the input fields
    $('#firstNameInputText').val('');
    $('#lastNameInputText').val('');
    $('#idInputText').val('');
    $('#titleInputText').val('');
    $('#annualSalaryInputText').val('');
}