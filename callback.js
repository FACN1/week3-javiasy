var CallbackModule = (function() {

    //call back for addEventListener to get list of character API URLs
    var getURLList = function(book) {
        var bookNumber = book.getAttribute("data-bookId");
        var url = RequestModule.buildURL_GOTBooks(bookNumber);

        // empty ul element
        var ulElement = document.getElementById('characterList');
        while (ulElement.firstChild) {
            ulElement.removeChild(ulElement.firstChild);
        }

        // kick off callback chain from here
        RequestModule.makeRequest(url, getCharURLs);
    }
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
        getURLList: getURLList
    }
})();
