

document.getElementById("myButton").addEventListener("click", function () {
    
    q = "finger guns"; // search query
    
    request = new XMLHttpRequest;
    request.open('GET',
                 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q,
                  true);
    
    request.onload = function() {
        if (request.status >= 200 && request.status < 400){
            var data = new Array("data1", "data2","data3","data4","data5");
            for (var i = 0; i < data.length; i++) {
                console.log(data[i]);
                data[i] = JSON.parse(request.responseText).data.image_url;
                document.getElementTagName("DIV").innerHTML = '<center><img src = "'+data[i]+'"  title="GIF via Giphy"></center>';
            }
           /* data = JSON.parse(request.responseText).data.image_url;
            console.log(data);
            document.getElementById("gifs").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';*/
        } else {
            console.log('reached giphy, but API returned an error');
         }
    };
    request.onerror = function () {
        console.log('connection error');
    };
    request.send();
});

/*
var arr = document.getElementsByTagName("p");
for (var x = 0; x < arr.length; x++) {
  arr[x].innerHTML = "Hi there";
}
 */
