// Search function it's return a array
const searchResult = (products, search) => {

    let matched = [];

    for (const product of products) {

        let productName = product.name.toLowerCase();
        let searchName = search.toLowerCase();

        if (productName.includes(searchName)) {
            matched.push(product);
        }
    }
    return matched;
}

