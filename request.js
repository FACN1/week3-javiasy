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

    // temporary callback function
    function logFunction(result) {
        console.log(result);
    }

    makeRequest('http://anapioficeandfire.com/api/books/1', logFunction);

    // make these accessible outside the module
    return {
        makeRequest: makeRequest
    }
})();
