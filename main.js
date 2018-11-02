//******************************************/
//Cheque Account
//*****************************************/
var chequeBalance
var cheqInput
var cheqDepAmt
var cheqWitAmt

//****Cheque-Deposit****/

//trigger click on dep-button-c on enter key
$('#dep-amount-c').keypress(function(event){
    if (event.keyCode === 13) {
     $('.dep-button-c').click();   
    }
})
//get cheque account deposit amount
$('.dep-button-c').click(function(){
    cheqInput = $('#dep-amount-c').val(); 
    $('#dep-amount-c').val('');
    //transform string to integer
    cheqDepAmt = parseInt (cheqInput);
    //check integer if non-negative
    if (cheqDepAmt >= 0) {
        //if non-negative update balace
        chequeBalance += cheqDepAmt;
        $('.cheque-bal').text(chequeBalance);
    } else
        //if negative prompt error
        alert('INVALID INPUT\nPlease enter non-negative value.');
    })

//****Cheque-Withdraw****/

$('#wit-amount-c').keypress(function(event){
    if (event.keyCode === 13) {
     $('.wit-button-c').click();   
    }
})
//get cheque account deposit amount
$('.wit-button-c').click(function(){
    cheqInput = $('#wit-amount-c').val(); 
    $('#wit-amount-c').val('');
    //transform string to integer
    cheqWitAmt = parseInt (cheqInput);
    //check integer if non-negative
    if (cheqWitAmt >= 0) {
        //if non-negative check if sufficient funds
        if (chequeBalance >= cheqInput){
        //if true update balance
        chequeBalance -= cheqWitAmt;
        $('.cheque-bal').text(chequeBalance);
        }
        else {
            //if false prompt error
            alert('INSUFFICIENT FUNDS.\nCannot process withdrawal.');
        }
    } else
        //if negative prompt error
        alert('INVALID INPUT\nPlease enter non-negative value.');
    })

//******************************************/
//Savings Account
//*****************************************/
var savBalance 
var savInput
var savDepAmt
var savWitAmt

//****Savings-Deposit****/

//trigger click on dep-button-c on enter key
$('#dep-amount-s').keypress(function(event){
    if (event.keyCode === 13) {
     $('.dep-button-s').click();   
    }
})
//get cheque account deposit amount
$('.dep-button-s').click(function(){
    savInput = $('#dep-amount-s').val(); 
    $('#dep-amount-s').val('');
    //transform string to integer
    savDepAmt = parseInt (savInput);
    //check integer if non-negative
    if (savDepAmt >= 0) {
        //if non-negative update balace
        savBalance += savDepAmt;
        $('.savings-bal').text(savBalance);
    } else
        //if negative prompt error
        alert('INVALID INPUT\nPlease enter non-negative value.');
    })

//****Cheque-Withdraw****/

$('#wit-amount-s').keypress(function(event){
    if (event.keyCode === 13) {
     $('.wit-button-s').click();   
    }
})
//get cheque account deposit amount
$('.wit-button-s').click(function(){
    savInput = $('#wit-amount-s').val(); 
    $('#wit-amount-s').val('');
    //transform string to integer
    savWitAmt = parseInt (savInput);
    //check integer if non-negative
    if (savWitAmt >= 0) {
        //if non-negative check if sufficient funds
        if (savBalance >= savInput){
        //if true update balance
        savBalance -= savWitAmt;
        $('.savings-bal').text(savBalance);
        }
        else {
            //if false prompt error
            alert('INSUFFICIENT FUNDS.\nCannot process withdrawal.');
        }
    } else
        //if negative prompt error
        alert('INVALID INPUT\nPlease enter non-negative value.');
    })

//******************************************/
//Account Profile
//*****************************************/
$('.avatar-jane').click(function(){
    $('.modal-container').hide();
    $('.account-number').text('B-012-345');
    $('.account-owner').text('Jane Doe');
    $('.cheque-bal').text(1500);
    $('.savings-bal').text(2000);
    chequeBalance = parseInt($('.cheque-bal').text());
    savBalance = parseInt($('.savings-bal').text());
})
$('.avatar-john').click(function(){
    $('.modal-container').hide();
    $('.account-number').text('B-067-891');
    $('.account-owner').text('John Smith');
    $('.cheque-bal').text('3000');
    $('.savings-bal').text('15000');
})

//******************************************/
//Modal
//*****************************************/
$('.switch').click(function(){
    $('.modal-container').show();
    $('.close').show();
})
$('.close').click(function(){
    $('.modal-container').hide();
})