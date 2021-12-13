import { getAllFurniture, getMyFurniture } from '../api/data.js';
import { html, until } from '../lib.js';
import { getUserData } from '../util.js';

const catalogTemplate = (dataPromise, userPage) => html `
<div class="row space-top">
    <div class="col-md-12">
        ${userPage 
                ? html `
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>`
                : html 
                `<h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>`}

    </div>
</div>
<div class="row space-top">
    ${until(dataPromise, html `<p>Loading &hellip;></p>`)}
</div>
  
`

const furnitureCard = (furniture) => html `
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
                <img src=${furniture.img} />
                <p>${furniture.description}</p>
                <footer>
                    <p>Price: <span>${furniture.price} $</span></p>
                </footer>
                <div>
                    <a href="/details/${furniture._id}" class="btn btn-info">Details</a>
                </div>
        </div>
    </div>
</div>
`

export async function catalogPage(ctx) {
    const userPage = ctx.pathname == '/my-furniture'
    ctx.render(catalogTemplate(loadItems(userPage), userPage));
}

async function loadItems(userPage) {
    let items = [];
    if(userPage) {
        const userId = getUserData().id;
        items = await getMyFurniture(userId);
    } else {
        items = await getAllFurniture();
    }
    
    return items.map(furnitureCard)
}