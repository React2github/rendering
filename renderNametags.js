function renderNametags(nametags) {

    var nameDivs = nametags.map(e => {
        return `
            <div>${e}</div>
        `
    });
    
    return nameDivs.join('');
}

function nametags() {
    var content = document.getElementById('content');

    var nameTags = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy",
    ]

    content.innerHTML = renderNametags(nameTags);

}