function search() {
   let inputValue = document.getElementById('searchText').value;
   let townsElement = Array.from(document.getElementById('towns').children);
   let towns = [];
   townsElement.forEach(town => {
      towns.push(town);
   });

   let counter = 0;
   for (const town of towns) {
      if(town.textContent.includes(inputValue)) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         counter++;
      } else {
         town.style.textDecoration = 'none';
         town.style.fontWeight = 'normal'
      }

   }

   let resultArea = document.getElementById('result');
   resultArea.textContent = `${counter} matches found`;
   
}
