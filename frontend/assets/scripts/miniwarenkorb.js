const modal = document.getElementById('warenkorbModal');

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
        
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">bezahlen</button>
    </div>
</div>
</div>`;