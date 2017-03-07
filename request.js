var RequestModule = (function() {
    // make an API request
    function makeRequest(url) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(JSON.parse(xhr.responseText));
            }
        }
        xhr.open('GET', url);
        xhr.send();
    }

    // build a request for each Game of Thrones book
    function buildRequest_GOTBooks(bookNumber) {
        var url = 'http://anapioficeandfire.com/api/books/' + bookNumber;
        makeRequest(url);
    }

    // make these accessible outside the module
    return {
        buildRequest_GOTBooks: buildRequest_GOTBooks
    }
})();
