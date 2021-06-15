var xhr;
var jsonData;
//write event handler
function clicks(){
    document.getElementById("button").onclick = function() {
        //create xmlhttpRequest object
        xhr = new XMLHttpRequest();

        xhr.onreadystatechange = tables;

        //sending request to server
        xhr.open("GET", "https://guadaluperangel.github.io/cs601_hw5/data/college_degrees.json", true);
        xhr.send();
    }
}
function tables(){
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            //console.log(xhr.response);
            alert(xhr.responseText);
            jsonData = xhr.responseText;
        }
    }
}