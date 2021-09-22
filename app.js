let userDate = document.getElementById('input-date')
let userNum = document.getElementById('input-number')
let submitBtn = document.getElementById('submit-btn')
let outputDiv = document.getElementById('output')
console.log(userDate)

function checkDate(){
  outputDiv.innerHTML=''
  let birthdate=  Number(userDate.value.split('-').join(''))
  let sumOfDob = 0
  while(birthdate>0){
    let rem = birthdate%10;
    sumOfDob += rem;
    birthdate = Math.floor(birthdate/10)
  }
  console.log(sumOfDob)
  console.log(typeof sumOfDob)
  if(sumOfDob % Number(userNum.value) === 0){
    outputDiv.innerHTML=`<img src="https://codesandbox.io/api/v1/sandboxes/rv9hp/fs/src/happy.svg"><h2>Congrats your birthday is lucky</h2>`
  }else{
    outputDiv.innerHTML=`<img src="https://codesandbox.io/api/v1/sandboxes/rv9hp/fs/src/unhappy.svg"><h2>Sorry you have an unlucky birthday!!</h2>`
  }
}
submitBtn.addEventListener('click', checkDate)