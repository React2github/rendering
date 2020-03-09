function renderNametags(nametags) {

    var nameDivs = nametags.map(e => {
        return `
            <div class="nameGroup">
            <div class="nametags"> Hello,  my name is: </div>
            <div id="name"> ${e} </div>
            <div>
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