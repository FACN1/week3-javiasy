var CallbackModule = (function() {

    //call back for addEventListener to get list of character API URLs
    var getURLList = function(book) {
        var bookNumber = book.getAttribute("data-bookId");
        var url = RequestModule.buildUrl('book', bookNumber);

        // empty ul element
        var ulElement = document.getElementById('characterList');
        while (ulElement.firstChild) {
            ulElement.removeChild(ulElement.firstChild);
        }

        // kick off callback chain from here
        RequestModule.makeRequest(url, getCharURLs);
    }
    // extracts char URLs from repsonse, and uses them to make requests for actor names
    var getCharURLs = function(error, response) {
        if (error) {
            console.log('err: ' + error);
            return;
        }
        var characterList = response.povCharacters;
        // loop through characters
        characterList.forEach(function(charUrl) {
            RequestModule.makeRequest(charUrl, getActorName);
        });
    }

    // extracts actor name from response, uses it to build a URL, and makes request for actor id
    var getActorName = function(error, response) {
        if (error) {
            console.log('err: ' + error);
            return;
        }
        if (response.playedBy[0] === undefined) {
            return;
        }
        var actorName = response.playedBy[0];
        var url = RequestModule.buildUrl('name', actorName);
        RequestModule.makeRequest(url, getActorId);
    };

    // extracts actor id from response, uses it to build a URL, and makes request for IMDb link
    var getActorId = function(error, response) {
        if (error) {
            console.log('err: ' + error);
            return;
        }
        var actorId = response.results[0].id;
        var url = RequestModule.buildUrl('id', actorId);
        RequestModule.makeRequest(url, getIMDbLink);
    };

    // extracts IMDb link from response, and does render stuff
    var getIMDbLink = function(error, response) {
        if (error) {
            console.log('err: ' + error);
            return;
        }
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
