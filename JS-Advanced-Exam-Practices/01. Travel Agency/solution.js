window.addEventListener('load', solution);

function solution() {
    
    let previewSection = document.getElementById('infoPreview');

    let blockDiv = document.getElementById('block');

    // Get inputs
    let fname = document.getElementById('fname');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let address = document.getElementById('address');
    let code = document.getElementById('code');

    let form = Array.from(document.getElementById('form').children);
    form.pop();


    let submitBtn = document.getElementById('submitBTN');
    submitBtn.addEventListener('click', submitFunction);

    let continueBtn = document.getElementById('continueBTN');
    continueBtn.addEventListener('click', continueMessage);

    let editBtn = document.getElementById('editBTN');
    editBtn.addEventListener('click', editInformation);

   
    



    function submitFunction(e){
      e.preventDefault();
      
      if(fname.value !== "" && fname.value !== null  &&  fname.value !== undefined && 
      email.value !== ""  &&   email.value !== null  &&   email.value !== undefined) {
        for(let i of form) {
          let li = document.createElement('li');
          li.textContent = `${i.children[0].textContent} ${i.children[1].value}`
          previewSection.appendChild(li);
        } 
        fname.value = '';
        email.value = '';
        phone.value = '';
        address.value = '';
        code.value = '';

        submitBtn.disabled = true;
        continueBtn.disabled = false;
        editBtn.disabled = false;
      } else {
        console.log("Invalid")
      }
    }

    function editInformation(e){
         let form2 = document.getElementById('form').children;
         for(let i = 0; i < previewSection.children.length; i++) {
            let currentFormElement = form2[i].children[1];
            let [field, info] = previewSection.children[i].textContent.split(": ");
            currentFormElement.value = info;  
            previewSection.children[i].innerHTML = '';
        } 
        submitBtn.disabled = false;
        continueBtn.disabled = true;
        editBtn.disabled = true;
    }

    function continueMessage() {
        let h3 = document.createElement('h3');
        h3.textContent = 'Thank you for your reservation!';
        blockDiv.textContent = "";
        blockDiv.appendChild(h3);
    }
  
}
