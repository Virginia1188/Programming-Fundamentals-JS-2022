function listOfProducts(productList) {
    let sortedList = productList.sort();
    for (let i = 0; i < sortedList.length; i++) {
        console.log(`${i + 1}.${sortedList[i]}`)
    }
}
listOfProducts(['Watermelon', 'Banana', 'Apples']);