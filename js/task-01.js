const catagoriesQTY = document.querySelectorAll(".item");
console.log(`Number of categories: ${catagoriesQTY.length}`)

catagoriesQTY.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
}
);