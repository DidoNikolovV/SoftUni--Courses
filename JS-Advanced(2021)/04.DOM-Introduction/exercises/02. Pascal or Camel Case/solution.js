function solve(text, givenCase) {
      let textElement = document.getElementById('text').value.toLowerCase();
      let caseElement = document.getElementById('naming-convention').value;
      let newWords = "";
      let word = "";
      let isInvalid = false;
      if(caseElement == 'Pascal Case') {
          let words = textElement.split(" ");
          words.forEach(w => {
              w = w[0].toUpperCase() + w.slice(1);
              newWords += w;
          });
      } else if(caseElement == 'Camel Case') {
          let words = textElement.split(" ");
          for(let i = 0; i < words.length; i++) {
              if(i == 0) {
                newWords += words[i];
              } else {
                word = words[i][0].toUpperCase() + words[i].slice(1);
                newWords += word;
              }
          }
      } else {
          newWords = "Error!"
          isInvalid = true;
      }

      let resultArea = document.getElementById('result');
      resultArea.textContent = newWords;
      
}