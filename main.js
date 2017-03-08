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

    // Initialise eventListener to log id.
    initBookListener(function(bookNode) {
        console.log(bookNode.getAttribute("data-bookId"));
    });

    return {
        initBookListener: initBookListener // make initBookListener public - so function can be put into callback;
    }
})();

var ExtractDataModule = (function() {
    var gameOfThrones = {
        extractCharacters: function(response){
            return response.povCharacters;
        },

        extractActors: function(response){
            return response.playedBy;
        }
    }

    var movieDB = {
        // functions go here: separated by commas
    }

    return {
        gameOfThrones: gameOfThrones,
        movieDB: movieDB
    }
})();
