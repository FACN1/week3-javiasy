var RequestModule = (function() {
    // make an API request
    function makeRequest(callback) {
        // create the URL
        var url = '';

        // make the request
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callback(JSON.parse(xhr.responseText));
            }
        }
        xhr.open('GET', url);
        xhr.send();
    }

    // make these accessible outside the module
    return {
        makeRequest: makeRequest
    }
})();
