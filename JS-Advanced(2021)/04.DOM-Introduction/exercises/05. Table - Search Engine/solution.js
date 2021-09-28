function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let inputValue = document.getElementById('searchField');
      let rowsElements = Array.from(document.querySelectorAll('tbody tr'));
      for (const row of rowsElements) {
         if(row.textContent.includes(inputValue.value)) {
            row.className = 'select';
         } else {
            row.className = "";
         }
      }
      inputValue.value = "";
   }

  
}