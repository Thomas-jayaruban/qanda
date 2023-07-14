let account_number = 12345678;
let password = 1234;
let acc_name = "Thomas ";
let acc_num = document.querySelector("#acc-number");
let pass_word = document.querySelector("#pass-word");
let loginBtn = document.querySelector(".liveToastBtn");
let toastss = document.querySelector("#toast");

loginBtn.addEventListener("click", () => {
  if (
    parseInt(acc_num.value) == account_number &&
    parseInt(pass_word.value) == password
  ) {
    toastss.innerHTML = `
    
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div  class="toast" role="alert" aria-live="assertive" aria-atomic="true" id="notificationToast">
    <div class="toast-header">
      <img src="images/logo.png" class="rounded me-2" alt="logo" width="20px" height="20px">
      <strong class="me-auto">Thomas Bank</strong>
      
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      <span class="text-success">Login Successfull</span>
    </div>
  </div>
</div>

        `;
    setTimeout(() => {
      toastss.innerHTML = `
    
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div  class="toast" role="alert" aria-live="assertive" aria-atomic="true" id="notificationToast">
        <div class="toast-header">
          <img src="images/logo.png" class="rounded me-2" alt="logo" width="20px" height="20px">
          <strong class="me-auto">Thomas Bank</strong>
          
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          <span class="text-dark">Welcome ${acc_name}</span>
        </div>
      </div>
    </div>
    
            `;
      let toasting = {
        animation: true,
        delay: 2000,
      };

      let toastHTMLelement = document.getElementById("notificationToast");
      let toastElement = new bootstrap.Toast(toastHTMLelement, toasting);
      toastElement.show();
    }, 4000);
    setTimeout(() => {
      window.location.href = "submit.html";
    }, 7000);
    let toasting = {
      animation: true,
      delay: 3000,
    };

    let toastHTMLelement = document.getElementById("notificationToast");
    let toastElement = new bootstrap.Toast(toastHTMLelement, toasting);
    toastElement.show();
  } else {
    toastss.innerHTML = `
    
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div  class="toast" role="alert" aria-live="assertive" aria-atomic="true" id="notificationToast">
    <div class="toast-header">
      <img src="images/logo.png" class="rounded me-2" alt="logo" width="20px" height="20px">
      <strong class="me-auto">Thomas Bank</strong>
      
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      <span class="text-danger">Account number or Password Error</span>
    </div>
  </div>
</div>

        `;
    let toasting = {
      animation: true,
      delay: 3000,
    };

    let toastHTMLelement = document.getElementById("notificationToast");
    let toastElement = new bootstrap.Toast(toastHTMLelement, toasting);
    toastElement.show();
  }
});
