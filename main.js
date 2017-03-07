var ListenerModule = (function(){

    function initBookListener(){
        var bookListNode = document.getElementById("bookList");
        bookListNode.childNodes.forEach(function(childNode){
            childNode.addEventListener("click",function(){
                console.log(childNode.getAttribute("data-bookId"));
            })
        })
    }(); //only run after parallel functions maybe
})()
