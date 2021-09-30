function deleteByEmail() {
   let rows = document.querySelectorAll('tbody tr');
   let inputElement = document.querySelector('input[name=email]');

   let removed = false;
   for(let row of rows) {
       let email = row.children[1].textContent;
       if(inputElement.value == email) {
           row.remove();
           removed = true;
       }
   }


   let resultElement = document.getElementById('result');
   if(removed) {
       resultElement.textContent = 'Deleted.';
   } else {
       resultElement.textContent = 'Not found.';
   }

   inputElement.value = '';
}