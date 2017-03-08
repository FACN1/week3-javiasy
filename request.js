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
    function buildRequest_GOTBooks(bookNumber) {
        var url = 'http://anapioficeandfire.com/api/books/' + bookNumber;
        makeRequest(url);
    }

    // build a movieDB request for an actor - to get their id
    function buildRequest_actorId(actorName) {
        // replace spaces in actorName with %20
        actorName.replace(/\s/gi, '%20');

        // build URL
        var myKey = config.theMovieDBKey;
        var url = 'https://api.themoviedb.org/3/search/person?api_key=' + myKey + '&query=' + actorName;

        // make the request
        makeRequest(url);
    }

    // build a movieDB request for an actor id - to get more info
    function buildRequest_actorInfo(actorId) {
        var url = 'https://api.themoviedb.org/3/person/' + actorId + '?api_key=' + myKey;
        makeRequest(url);
    }

    // make these accessible outside the module
    return {
        buildRequest_GOTBooks: buildRequest_GOTBooks, // takes a book number
        buildRequest_actorId: buildRequest_actorId, // takes an actor name
        buildRequest_actorInfo: buildRequest_actorInfo // takes an actor id
    }
})();
