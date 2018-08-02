window.addEventListener('load', init, false);

function init() {
    // Get the modal
    var beeModal = document.getElementById('beeModal');
    var postModal = document.getElementById('postModal');
    var toDoModal = document.getElementById('toDoModal');

    // Get the button that opens the modal
    var beeBtn = document.getElementById("beeBtn");
    var postBtn = document.getElementById("postBtn");
    var toDoBtn = document.getElementById("toDoBtn");

    // Get the <span> element that closes the modal
    var spanBee = document.getElementsByClassName("closeBee")[0];
    var spanPost = document.getElementsByClassName("closePost")[0];
    var spanToDo = document.getElementsByClassName("closeToDo")[0];

    // When the user clicks on the button, open the modal 
    beeBtn.onclick = function () {
        beeModal.style.display = "block";
    }

    postBtn.onclick = function () {
        postModal.style.display = "block";
    }

    toDoBtn.onclick = function () {
        toDoModal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spanBee.onclick = function () {
        beeModal.style.display = "none";
    }

    spanPost.onclick = function () {
        postModal.style.display = "none";
    }

    spanToDo.onclick = function () {
        toDoModal.style.display = "none";
    }

    /*window.onclick = function (event) {
        if (event.target == beeModal || event.target == postModal || event.target == toDoModal) {
            modal.style.display = "none";
        }
    }*/
}