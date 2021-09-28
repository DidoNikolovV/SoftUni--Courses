function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
   let inputElement = document.querySelector('#inputs textarea').value;
   let restaurants = JSON.parse(inputElement);
   let avrgSalary = 0;
   let bestSalary = 0;

   let restObj = {};
   for(let rest of restaurants) {
      let[restName, workers] = rest.split(" - ");
      workers = workers.split(", ");
      if(restObj[restName] == undefined) {
         restObj[restName] = {};
      }
      for(let w of workers) {
         let[wName, wSalary] = w.split(" ");
         wSalary = Number(wSalary);

         restObj[restName][wName] = wSalary;
           
      }
      let sorted = Object.entries(restObj[restName]).sort((a, b) => b[1] - a[1]);
      console.log(sorted);
   }

   console.log(restObj);
   }
}




//let inputElement = document.querySelector('#inputs textarea').value;
   //    restaurants = JSON.parse(inputElement);

   //    let restaurantsObj = {};
   //    let addedFirst = "";
      
   //    for(let restaurant of restaurants) {

   //       let[restName, workers] = restaurant.split(" - ");
   //       workers = workers.split(", ");
   //       let salaries = [];
   //       let names = [];
   //       let totalSalary = 0;
   //       let counter = 0;
   //       addedFirst = restName;
         
   //       workers.forEach(element => {
   //          let spaceIndex = element.indexOf(' ');
   //          let name = element.slice(0, spaceIndex);
   //          let salary = Number(element.slice(spaceIndex));
   //          salaries.push(salary)
   //          names.push(name);
   //       });

   //       for(let i = 0; i < names.length; i++) {
   //          let workerName = names[i];
   //          let salary = salaries[i];
   //          if(restaurantsObj[restName] == undefined) {
   //             restaurantsObj[restName] = {
   //             };
   //          }

   //          restaurantsObj[restName][workerName]= salary;
   //          totalSalary += salary;
   //          counter++;
   //       }

   //       restaurantsObj[restName].avrgSalary = totalSalary / counter;
   //    }

   //    let values = Object.values(restaurantsObj);
   //    let sorted = [];
   //    for (let value of values) {
   //       sorted.push(Object.entries(value).sort((a, b) => b[1] - a[1]));
   //    }
   //    console.log(sorted);
   //    let output = document.querySelector('#bestRestaurant p');
   //    output.textContent = `Name: ${restaurantsObj[restName]} Average Salary: ${restaurantsObj[restName].avrgSalary} Best Salary: {restaurant bestSalary}`
   // }