function create(words) {
   let content = document.getElementById('content');
   content.addEventListener('click', displayParagraph);
   for(let word of words){
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);

      content.appendChild(div);
   }


   function displayParagraph(e) {
      if(e.target.tagName == 'DIV' && e.target != content) {
         let clickedParagraph =  e.target.children[0];
         clickedParagraph.style.display = 'block';
      }
   }

}