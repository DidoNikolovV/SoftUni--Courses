window.addEventListener('load', solve);

function solve() {
    let addButtonElement = document.getElementById('add');
    addButtonElement.addEventListener('click', addFurnitureHandler);

    let furnitureListElement = document.getElementById('furniture-list');

    let totalStoreProfit = document.querySelector('.total-price');

    function addFurnitureHandler(e){
        e.preventDefault();

        let modelInputElement = document.getElementById('model');
        let yearInputElement = document.getElementById('year');
        let descriptionInputElement = document.getElementById('description');
        let priceInputElement = document.getElementById('price');

        if(modelInputElement.value != "" && Number(yearInputElement.value) >= 0 && Number(yearInputElement.value) != undefined &&
        descriptionInputElement.value != "" && Number(priceInputElement.value) >= 0 && Number(priceInputElement.value) != undefined) {
            let trModelPriceElement = document.createElement('tr');
            trModelPriceElement.classList.add('info');
            let trYearDescriptionElement = document.createElement('tr');
            trYearDescriptionElement.classList.add('hide');
            let tdModel = document.createElement('td');
            let tdPrice = document.createElement('td');
            tdModel.textContent = modelInputElement.value;
            tdPrice.textContent = Number(priceInputElement.value).toFixed(2);


            let tdButtons = document.createElement('td');
            let moreBtn = document.createElement('button');
            let buyBtn = document.createElement('button');
            moreBtn.addEventListener('click', moreInfoHandler)
            buyBtn.addEventListener('click', buyButtonHandler);
            moreBtn.classList.add('moreBtn');
            moreBtn.textContent = 'More Info';
            buyBtn.classList.add('buyBtn');
            buyBtn.textContent = 'Buy it';
            tdButtons.appendChild(moreBtn);
            tdButtons.appendChild(buyBtn);

            let tdYear = document.createElement('td');
            let tdDescription = document.createElement('td');
            tdYear.textContent = `Year: ${yearInputElement.value}`;
            tdDescription.setAttribute('colspan', 3);
            tdDescription.textContent = `Description: ${descriptionInputElement.value}`;

            trModelPriceElement.appendChild(tdModel);
            trModelPriceElement.appendChild(tdPrice);
            trModelPriceElement.appendChild(tdButtons);

            trYearDescriptionElement.appendChild(tdYear);
            trYearDescriptionElement.appendChild(tdDescription);

            furnitureListElement.appendChild(trModelPriceElement);
            furnitureListElement.appendChild(trYearDescriptionElement);
        } 

        modelInputElement.value = "";
        yearInputElement.value = "";
        descriptionInputElement.value = "";
        priceInputElement.value = "";

        function moreInfoHandler(e){
            let moreInfoBtn = e.target;
            let hiddenElement = e.target.parentElement.parentElement.nextSibling;
            if(moreInfoBtn.textContent == 'More Info') {
                moreInfoBtn.textContent = 'Less Info';
                hiddenElement.style.display = 'contents';
            } else {
                moreInfoBtn.textContent = 'More Info';
                hiddenElement.style.display = 'none';
            }
        }

        function buyButtonHandler(e){
            let currentTotal = Number(totalStoreProfit.textContent);
            currentTotal += Number(e.target.parentElement.previousSibling.textContent);
            totalStoreProfit.textContent = currentTotal.toFixed(2);
            let furnitureInfo = e.target.parentElement.parentElement;
            let furnitureDescription = document.querySelector('#furniture-list tr.hide');
            furnitureInfo.remove();
            furnitureDescription.remove();

           

        }
    }
}
