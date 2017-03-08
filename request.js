var RequestModule = (function() {
    // make an API request
    function makeRequest(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callback(JSON.parse(xhr.responseText));
            }
        }
        xhr.open('GET', url);
        xhr.send();
    }

    // build a request for each GoT book - to get a character list
    function buildURL_GOTBooks(bookNumber) {
        var url = 'http://anapioficeandfire.com/api/books/' + bookNumber;
        return url;
    }

    // build a movieDB request for an actor - to get their id
    function buildURL_actorId(actorName) {
        // replace spaces in actorName with %20
        actorName = actorName.replace(/\s/gi, '%20');

        // build and return URL
        var url = 'https://api.themoviedb.org/3/search/person?api_key=' + config.theMovieDBKey + '&query=' + actorName;
        return url;
    }

    // build a movieDB request for an actor id - to get more info
    function buildURL_actorInfo(actorId) {
        var url = 'https://api.themoviedb.org/3/person/' + actorId + '?api_key=' + config.theMovieDBKey;
        return url;
    }

    // make these accessible outside the module
    return {
        makeRequest: makeRequest,
        buildURL_GOTBooks: buildURL_GOTBooks, // takes a book number
        buildURL_actorId: buildURL_actorId, // takes an actor name
        buildURL_actorInfo: buildURL_actorInfo // takes an actor id
    }
})();
