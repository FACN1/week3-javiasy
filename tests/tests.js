QUnit.test("hello test", function(assert) {
    assert.ok(1 == "1", "Passed!");
});

/* --- RequestModule tests --- */



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
})

/* --- END Event Listener tests --- */
