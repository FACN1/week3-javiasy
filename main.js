var ListenerModule = (function(){

    // Callback function is put into below function - this allows tests or other
    // modules to interact with the eventlistener and get the ids of clicked items.
    var initBookListener = function(callback) {
        var bookListNode = document.getElementById("bookList");
        bookListNode.childNodes.forEach(function(childNode){
            childNode.addEventListener("click",function(event){
                event.preventDefault();
                callback(childNode);
            });
        });
    }; // only run after parallel functions maybe

    // Initialise eventListener to log id.
    initBookListener(function(childNode) {
        var bookNumber = childNode.getAttribute("data-bookId");
        var url = RequestModule.buildURL_GOTBooks(bookNumber);

        // empty ul element
        var ulElement = document.getElementById('characterList');
        while (ulElement.firstChild) {
            ulElement.removeChild(ulElement.firstChild);
        }

        // kick off callback chain from here
        var callback = CallbackModule.getCharURLs;
        RequestModule.makeRequest(url, callback);
    });

    return {
        initBookListener: initBookListener // make initBookListener public - so function can be put into callback;
    }
})();
