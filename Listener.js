var ListenerModule = (function(){

    // Callback function is put into below function - this allows tests or other
    // modules to interact with the eventlistener and get the ids of clicked items.
    var initBookListener = function(callback) {
        var bookListNode = document.getElementById("bookList");
        var bookNodesArray = bookListNode.childNodes;
        bookNodesArray.forEach(function(book){
            book.addEventListener("click",function(event){
                event.preventDefault();
                callback(book);
            });
        });
    }; // only run after parallel functions maybe

    return {
        initBookListener: initBookListener // make initBookListener public - so function can be put into callback;
    }
})();
