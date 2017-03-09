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

/*// helper functions to extract data from API responses
var ExtractDataModule = (function() {
    var gameOfThrones = {
        extractCharacters: function(response){
            return response.povCharacters;
        },

        extractActors: function(response){
            if (response.playedBy[0] !== undefined) {
                return response.playedBy[0];
            }
        }
    }

    var movieDB = {
        // takes name search result output from movieDB request, and returns id
        getActorId: function(data) {
            return data.results[0].id;
        },

        // takes actor id output from movieDB request, and returns IMDb link
        getIMDBLink: function(data) {
            if (data.imdb_id !== null) {
                return 'http://imdb.com/name/' + data.imdb_id;
            }
        }
    }

    return {
        gameOfThrones: gameOfThrones,
        movieDB: movieDB
    }
})();*/

var CallbackModule = (function() {
    // extracts char URLs from repsonse, and uses them to make requests for actor names
    var getCharURLs = function(response) {
        var characterList = response.povCharacters;
        // loop through characters
        characterList.forEach(function(charUrl) {
            RequestModule.makeRequest(charUrl, getActorName);
        });
    }

    // extracts actor name from response, uses it to build a URL, and makes request for actor id
    var getActorName = function(response) {
        if (response.playedBy[0] === undefined) {
            return;
        }
        var actorName = response.playedBy[0];
        var url = RequestModule.buildURL_actorId(actorName);
        RequestModule.makeRequest(url, getActorId);
    };

    // extracts actor id from response, uses it to build a URL, and makes request for IMDb link
    var getActorId = function(response) {
        var actorId = response.results[0].id;
        var url = RequestModule.buildURL_actorInfo(actorId);
        RequestModule.makeRequest(url, getIMDbLink);
    };

    // extracts IMDb link from response, and does render stuff
    var getIMDbLink = function(response) {
        if (response.imdb_id === null) {
            return;
        }
        var link = 'http://imdb.com/name/' + response.imdb_id;
        var name = response.name;

        RenderModule.renderIMDbLink(link, name);
    };

    return {
        getCharURLs: getCharURLs
    }
})();

var RenderModule = (function() {
    var renderIMDbLink = function(link, name) {
        var charLiNode = document.createElement('li');
        var charLinkNode = document.createElement('a');
        charLinkNode.href = link;
        charLinkNode.textContent = name;
        charLiNode.appendChild(charLinkNode);

        var ulElement = document.getElementById('characterList');
        ulElement.appendChild(charLiNode);
        document.getElementById('characterList').scrollIntoView();
    }

    return {
        renderIMDbLink: renderIMDbLink
    }
})();
