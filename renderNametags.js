
function renderNametags(nameTags, names) {
    var names = '';
    var i;
    for (i=0;i<nameTags.length;i++) {
        names += nameTags[i]+"<br>";
    }
    return `
        <div class="text-center mt-5">
        <div>${names}</div>
    `
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