window.addEventListener('load', init, false);

function init() {
    var beeModal = document.getElementById('beeModal');
    var postModal = document.getElementById('postModal');
    var toDoModal = document.getElementById('toDoModal');
    var commentModal = document.getElementById('commentModal');

    var beeBtn = document.getElementById("beeBtn");
    var postBtn = document.getElementById("postBtn");
    var toDoBtn = document.getElementById("toDoBtn");
    var agregarComment = document.getElementById("agregarComment");

    var spanBee = document.getElementsByClassName("closeBee")[0];
    var spanPost = document.getElementsByClassName("closePost")[0];
    var spanToDo = document.getElementsByClassName("closeToDo")[0];
    var spanComment = document.getElementsByClassName("closeComment")[0];

    beeBtn.onclick = function () {
        beeModal.style.display = "block";
    }

    postBtn.onclick = function () {
        postModal.style.display = "block";
    }

    toDoBtn.onclick = function () {
        toDoModal.style.display = "block";
    }

    agregarComment.onclick = function () {
        commentModal.style.display = "block";
    }

    spanBee.onclick = function () {
        beeModal.style.display = "none";
    }

    spanPost.onclick = function () {
        postModal.style.display = "none";
    }

    spanToDo.onclick = function () {
        toDoModal.style.display = "none";
    }

    spanComment.onclick = function () {
        commentModal.style.display = "none";
    }

}