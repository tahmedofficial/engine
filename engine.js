// Search function it's return a array
const getSearchResult = (products, search) => {

    let matched = [];
    for (const product of products) {

        const productName = product.name.toLowerCase();
        const searchName = search.toLowerCase();

        if (productName.includes(searchName)) {
            matched.push(product);
        }
    }
    return matched;
}


// Plus a number function
const plusNumber = (elementId) => {

    const element = document.getElementById(elementId);
    const elementValueStr = element.innerText;
    const value = parseInt(elementValueStr);
    const setValue = value + 1;
    element.innerText = setValue;

}

