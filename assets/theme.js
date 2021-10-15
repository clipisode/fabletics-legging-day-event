// const urlParams = new URLSearchParams(window.location.search);
// const thisTag = urlParams.get('tag');

window.onload = function() {
    if (document.getElementById("introScreen")) {
        document.getElementById("introHostName").innerHTML = "Fabletics"
        document.getElementById("introHostName").id = "introHostName2";
        document.getElementById("introHostName2").style.display = "block";
        document.getElementById("introTitle").innerHTML = "<p>Send us a video.</p><p>Tell us what you think about our leggings.</p>";
        document.getElementById("introTitle").id = "introTitle2";
        document.getElementById("introTitle2").style.display = "block";
    }
};
