var RenderModule = (function() {
    var renderIMDbLink = function(link, name) {
        var charLiNode = document.createElement('li');
        var charLinkNode = document.createElement('a');
        charLinkNode.href = link;
        charLinkNode.textContent = name;
        charLiNode.appendChild(charLinkNode);

        var ulElement = document.getElementById('characterList');
        ulElement.appendChild(charLiNode);
    }

    return {
        renderIMDbLink: renderIMDbLink
    }
})();
