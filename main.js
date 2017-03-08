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
        // functions go here: separated by commas
    }

    var movieDB = {
        // takes name search result output from movieDB request, and returns id
        getActorId: function(data) {
            return data.results[0].id;
        },

        // takes actor id output from movieDB request, and returns IMDb link
        getIMDBLink: function(data) {
            return 'http://imdb.com/name/' + data.imdb_id;
        }
    }

    return {
        gameOfThrones: gameOfThrones,
        movieDB: movieDB
    }
})();
