
function renderNametags(nameTags) {
    return `
        <div class="text-center mt-5">
        <div>${nameTags}</div>
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