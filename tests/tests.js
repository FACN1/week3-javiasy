/* --- RequestModule tests --- */

/*QUnit.test('test buildURL_GOTBooks function returns correct URL', function(assert){
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
});*/

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

/* --- RenderModule tests --- */

QUnit.test("test renderIMDbLink returns link", function(assert) {
    var done = assert.async();
    var bookItemNode = document.querySelector('#bookList li');
    bookItemNode.click();
    var expected = 'http://imdb.com/name/nm3586035';

    setTimeout(function(){
        var characterLinkNode = document.querySelector('#characterList a');
        var result = characterLinkNode.href;
        assert.equal(result, expected, "should get the name of the actor from the book");
        done();
    },2000);
});
