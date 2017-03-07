var ListenerModule = (function(){

    var bookListNode = document.getElementById("bookList");
    bookListNode.childNodes.forEach(function(childNode){
        childNode.addEventListener("click",function(){
            console.log(childNode.getAttribute("bookId"));
        })
    })

})()
