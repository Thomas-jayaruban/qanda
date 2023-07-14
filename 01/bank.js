let depositBtn = document.querySelector(".depositAmt");
let depositModal = document.createElement("div");
let amountAccount = document.querySelector(".amountAccount");
let depositedAmounte = document.querySelector(".amountDeposit");
let withdrawalBtn = document.querySelector(".withdrawalAmt");
let accountDetails = document.getElementById("AccountDetails");
let names = "Thomas JayaRuban J";
let cBal = 12000;
let amountDepositing = 0;
let amountWithdrawing = 0;
depositModal.classList.add("depositModal");

depositBtn.addEventListener("click", () => {
  depositModal.innerHTML += `
    <div class="container py-5">
    
      
        
        <div class="container mx-auto d-flex justify-content-center">
        <div class="card text-center" style="width:25rem">
          
          <div class="card-body">
           
            <div class="container d-flex justify-content-around">
            <h5 class="card-title"> Deposit: </div>
            <p class="card-text">Type the amount to be deposited</p>
            <div class="d-flex justify-content-around ">
              <h3 class="  float-start ">₹ <input type="number" class="numAmount my-3 border border-info-subtle " tabindex="-1"> </h3>
              <button class="btn btn-primary depositedBtn">Deposit</button>
            </div>

           

            </div>
          </div>
        </div>
        </div> 
      </div>

`;
  document.body.appendChild(depositModal);
  let depositAmount = document.querySelector(".numAmount");
  let deposittBtn = document.querySelector(".depositedBtn");

  deposittBtn.addEventListener("click", () => {
    let amountDeposited = parseInt(depositAmount.value);
    amountDepositing += amountDeposited;
    alert(`${amountDeposited} successfully Deposited `);
    cBal += amountDeposited;
    depositedAmounte.innerText = ` Your current Balance is ₹ ${cBal} `;
    depositModal.innerHTML = ``;
  });
});
withdrawalBtn.addEventListener("click", () => {
  depositModal.innerHTML += `
    <div class="container py-5">
    
      
        
        <div class="container mx-auto d-flex justify-content-center">
        <div class="card text-center" style="width:25rem">
          
          <div class="card-body">
           
            <div class="container d-flex justify-content-around">
            <h5 class="card-title"> WithDrawal: </div>
            <p class="card-text">Type the amount to be WithDrawal</p>
            <div class="d-flex justify-content-around ">
              <h3 class="  float-start ">₹ <input type="number" class="numAmount my-3 border border-info-subtle " tabindex="-1"> </h3>
              <button class="btn btn-danger depositedBtn withDrawalBtn">WithDrawal</button>
            </div>

           

            </div>
          </div>
        </div>
        </div> 
      </div>

`;
  document.body.appendChild(depositModal);
  let depositAmount = document.querySelector(".numAmount");
  let withDrawalBtn = document.querySelector(".withDrawalBtn");
  withDrawalBtn.addEventListener("click", () => {
    let amountDeposited = parseInt(depositAmount.value);
    amountWithdrawing += amountDeposited;
    alert(`${amountDeposited} successfully Withdraw `);
    cBal -= amountDeposited;
    depositedAmounte.innerText = ` Your current Balance is ₹ ${cBal} `;
    depositModal.innerHTML = ``;
  });
});
accountDetails.addEventListener("click", () => {
  depositModal.innerHTML += `
  <div class="container py-5">
  
    
      
      <div class="container mx-auto d-flex justify-content-center">
      <div class="card text-center" style="width:25rem">
        
        <div class="card-body">
         
          <div class="container d-flex justify-content-around">
          <h5 class="card-title"> Account Info</div>
          <p class="card-text">Your Name : ${names}</p>
          <p class="card-text">Your current Balance : ₹ ${cBal}</p>
          <p class="card-text">Your WithDrawal Amount : ₹ ${amountWithdrawing}</p>
          <p class="card-text">Your Deposited Amount : ₹ ${amountDepositing}</p>
          <div class="d-flex justify-content-around ">
         
            <button class="btn btn-info depositedBtn infoBtn">Done</button>
          </div>

         

          </div>
        </div>
      </div>
      </div> 
    </div>

`;
  let accountInfo = document.querySelector(".infoBtn");
  accountInfo.addEventListener("click", () => {
    depositModal.innerHTML = ``;
  });
});
