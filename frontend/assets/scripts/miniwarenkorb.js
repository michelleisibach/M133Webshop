const modal = document.getElementById('warenkorbModal');
getItem();

modal.innerHTML = `    <div class="modal-dialog" role="document">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Ihr Warenkorb</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
    </div>
    <div class="modal-body">
        <h6>Ihre Produkte </h6>
            <div id="cart"> </div>
        </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">bezahlen</button>
    </div>
</div>
</div>`;

function getItem() {
    const cart = document.getElementById('cart');
    fetch("/api/warenkorb/get")
        .then(r => r.json())
        .then(r => {
            console.log(r);
            myList = Object.keys(r).map(function(key) {
                return { label: key, value: r[key] }
            });
            let grup = groupBy(r, r => r.id);
            console.log(grup);
        });
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