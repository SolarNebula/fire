var identify = ""
document.getElementById("phoneNum").value = "+7";
var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget

    var recipient = button.getAttribute('id')
    identify = recipient

    var modalTitle = exampleModal.querySelector('.modal-title')
    var modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = recipient

    // var sub = document.getElementById('submit')
    (function () {
        'use strict'
        var forms = document.querySelectorAll('.needs-validation')
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    form.classList.add('was-validated')
                }, false)
            })
    })()


})


function clearer(){
    document.getElementById(identify).innerText = "";
}

function submit(){
    var first = document.getElementById("firstName").value
    var second = document.getElementById("secondName").value
    var num = document.getElementById("phoneNum").value
    document.getElementById(identify).innerText = first + " " + second+ " " + num;
    document.getElementById("firstName").value = "";
    document.getElementById("secondName").value = "";
    document.getElementById("phoneNum").value = "+7";
    document.getElementById(identify).disabled = true;


}



function active() {
    $('button').prop('disabled', false);
}
var input = document.getElementById("phoneNum");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
    }
});