

// const cardNumber = document.getElementById("card-number");
// const userInput = document.getElementsByClassName("userInput");
// const btn = document.getElementById("btn");
// const form = document.getElementById("form");
// const btnDonateAmt = document.querySelector('#amount');

// $("#btn").click(function () {
//   let cardNumber = $("#card-number").val();
//   let cardHolder = $("#card-holder").val();
//   let expiry = $("#expiry").val();
//   let cvv = $("#cvv").val();
//   let amount = $("#amount").val();
  
 

  

//   if (cardNumber == "" || cardHolder == "" || expiry == "" || cvv == "" || amount == "" || cardNumber.length!=16 || expiry.substring(0,2) > 12 || 
//   expiry.substring(2,4) < 23 || cvv.length != 3 || cardHolder.length < 3) {
  
//     Swal.fire({
//       icon: 'error',
//       title: 'Oops...',
//       text: 'Please ensure all values are entered or the card number has 16 digits',

//     })
//   } else {
//     submitData();
   
//     Swal.fire({
//       icon: 'success',
//       title: 'Thank you for your contribution',
//       text: 'Donation has been sent',

//     })
//   }
// })

// function submitData(){
//   let formData = new FormData(form);
//   const data = {};
//   formData.forEach((value, key) => {
//     data[key] = value;
//   });
//   const jasonData = JSON.stringify(data);
//   console.log(jasonData);
// }


// // // navigation bar

// const navItemHover = document.querySelectorAll('.nav-item');

// navItemHover.forEach((item) => {
//   item.addEventListener('mouseover', () => {
//     item.style.color = 'black';
//   });

//   item.addEventListener('mouseout', () => {

//     item.style.color = '#808000'; // Restore the background color on mouseout

//   });
// });
// // Donate keyboard events
// // Donate keyboard events
// btnDonateAmt.addEventListener('keydown', function (e) {
// 	let cardNumber = $('#card-number').val();
// 	let cardHolder = $('#card-holder').val();
// 	let expiry = $('#expiry').val();
// 	let cvv = $('#cvv').val();
// 	let amount = $('#amount').val();

// 	if (e.key === 'Enter') {
// 		e.preventDefault();
//     if (
//       cardNumber == '' ||
//       cardHolder == '' ||
//       expiry == '' ||
//       cvv == '' ||
//       amount == '' ||
//       cardNumber.length != 16 ||
//       expiry.substring(0, 2) > 12 ||
//       expiry.substring(2, 4) < 23 ||
//       cvv.length != 3
//     ) {
      
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Please ensure all values are entered or the card number has 16 digits',
//       });
//     } else {
//       submitData(); 
//       Swal.fire({
//         icon: 'success',
//         title: 'Thank you for your contribution',
//         text: 'Donation has been sent',
//       });
//     }
// 	}
	
// });







const form = document.getElementById('form');
const cardNUm = document.getElementById('cardNUm');
const cardHolder = document.getElementById('cardHolder');
const mmyy = document.getElementById('mmyy');
const cvv = document.getElementById('cvv');
const amount = document.getElementById('amount');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const cardNoValue = cardNUm.value.trim();
	const cardHolderValue = cardHolder.value.trim();
	const mmyyValue = mmyy.value.trim();
	const cvvValue = cvv.value.trim();
	const amountValue = amount.value.trim();
	let regex = /^[a-zA-Z]+$/;
	let reg = new RegExp('^[0-9]+$');

 
	
	if(cardNoValue === '' ) {
		setErrorFor(cardNUm, 'Card number cannot be blank');
	} else if(reg.test(cardNoValue) === false) {
		setErrorFor(cardNUm, 'Card number cannot containt letters');
	}else if(cardNoValue.length != 16){
		setErrorFor(cardNUm, 'Card number should be 16 digits long');
	}else{
		setSuccessFor(cardNUm);
	}
	if(amountValue === '') {
		setErrorFor(amount, 'Amount cannot be blank');
	} else if(reg.test(amountValue) === false) {
		setErrorFor(amount, 'Amount cannot contain letters');
	}else{
		setSuccessFor(amount);
	}
	
	if(cardHolderValue === '') {
		setErrorFor(cardHolder, 'Card Holder cannot be blank');
	
	} else if(regex.test(cardHolderValue) === false){
		setErrorFor(cardHolder, 'Card Holder cannot contain digits');
	}else if(cardHolderValue.length < 3){
		setErrorFor(cardHolder, 'Card Holder should be three characters long');
	}else{
		setSuccessFor(cardHolder);
	}
	
	if(mmyyValue === '') {
		setErrorFor(mmyy, 'Month & Year cannot be blank');
	} else if(mmyyValue.substring(0, 2) > 12){
		setErrorFor(mmyy, 'Month cannot be greater than 12, invalid month');
	}else if(mmyyValue.substring(0, 2) < 1){
		setErrorFor(mmyy, 'Month cannot be less than 1, invalid month');
	}else if(mmyyValue.substring(2, 4) < 23){
		setErrorFor(mmyy, 'Year cannot be less than 2023, expired card');
	}else if(mmyyValue.substring(2, 4) === 23 && mmyyValue.substring(0, 2) < 11){
		setErrorFor(mmyy, 'Year cannot be less than 2023, , expired card');
	}else{
		setSuccessFor(mmyy);
	}
	
	if(cvvValue === '') {
		setErrorFor(cvv, 'cvv cannot be blank');
	} else if(reg.test(cvvValue) === false){
		setErrorFor(cvv, 'cvv cannot conatin letters');
	}else if(cvvValue.length !== 3) {
		setErrorFor(cvv, 'cvv should be 3 digits long');
	}else{
		setSuccessFor(cvv);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	


////////////////////////////////////////////////////////////////
//charts
