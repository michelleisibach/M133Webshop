const cart = document.getElementById('cart');

getItem();

function getItem() {
    fetch("/api/warenkorb/get")
        .then(r => r.json())
        .then(r => {
            console.log(r);
            myList = Object.keys(r).map(function(key) {
                return { label: key, value: r[key] }
            });
            let grup = groupBy(myList, myList => r.id);
            console.log(grup);
            cart.innerHTML =
                `
            
            `
        })
}

function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach(item => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
}