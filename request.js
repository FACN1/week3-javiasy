var RequestModule = (function() {
    // make an API request
    function makeRequest(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callback(null, JSON.parse(xhr.responseText));
            }
        }
        xhr.open('GET', url);
        xhr.send();
    }

    // build url string
    function buildUrl(type, params) {
        var urls = {
            book: 'http://anapioficeandfire.com/api/books/' + params,
            name: 'https://api.themoviedb.org/3/search/person?api_key=' + config.theMovieDBKey + '&query=' + params,
            id: 'https://api.themoviedb.org/3/person/' + params + '?api_key=' + config.theMovieDBKey
        };

        return urls[type];
    }

    // make these accessible outside the module
    return {
        makeRequest: makeRequest,
        buildUrl: buildUrl
    }
})();
