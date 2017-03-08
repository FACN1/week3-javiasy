var ListenerModule = (function(){

    // Callback function is put into below function - this allows tests, or other modules to interact with the eventlistener and get the ids of clicked items.
    var initBookListener = function(callback) {
        var bookListNode = document.getElementById("bookList");
        bookListNode.childNodes.forEach(function(childNode){
            childNode.addEventListener("click",function(event){
                event.preventDefault();
                callback(childNode);
            });
        });
    }; // only run after parallel functions maybe
    initBookListener(function(bookNode) {
        console.log(bookNode.getAttribute("data-bookId"));
    })
    return {
        initBookListener: initBookListener
    }
})();
