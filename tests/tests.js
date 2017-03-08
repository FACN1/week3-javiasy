/* --- RequestModule tests --- */

QUnit.test('test buildURL_GOTBooks function', function(assert){
    var expected = 'http://anapioficeandfire.com/api/books/1';
    var result = RequestModule.buildURL_GOTBooks(1);
    assert.equal(result, expected, 'both urls are the same')
});

QUnit.test('test buildURL_actorId function', function(assert){
    var expected = 'https://api.themoviedb.org/3/search/person?api_key=' + config.theMovieDBKey + '&query=maisie%20williams';
    var result = RequestModule.buildURL_actorId('maisie williams');
    assert.equal(result, expected,'both urls are the same');
});

QUnit.test('test buildURL_actorInfo function', function(assert){
    var expected = 'https://api.themoviedb.org/3/person/123?api_key=' + config.theMovieDBKey;
    var result = RequestModule.buildURL_actorInfo(123);
    assert.equal(result, expected, 'both urls are the same')
});

/* --- END --- */

/* --- Event listener tests --- */

QUnit.test("test addEventListener for click event on books", function(assert) {
    var bookItemNode = document.querySelector('#bookList li');
    var bookClicked = false;

    assert.equal(bookClicked, false, "check bookClicked is initially false");

    ListenerModule.initBookListener(function() {
        bookClicked = true;
    });

    bookItemNode.click();

    assert.equal(bookClicked, true, "check bookClicked is true, after adding event listener + clicking it");
});

/* --- END Event Listener tests --- */

/* --- ExtractDataModule.gameOfThrones --- */

QUnit.test("put text here", function(assert) {
    assert.equal(1, 1, "text goes here")
});

/* --- END ExtractDataModule.gameOfThrones tests --- */

/* --- ExtractDataModule.movieDB --- */

QUnit.test("put text here", function(assert) {
    assert.equal(1, 1, "text goes here")
});

/* --- END ExtractDataModule.movieDB tests --- */
