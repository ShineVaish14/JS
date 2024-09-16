var ol = document.getElementById("ol");
var input = document.getElementById("input");
var button = document.getElementById("button");

button.addEventListener("click", function(){
    var li = document.createElement('li');
    li.innerHTML = input.value;
    ol.appendChild(li);
    input.value="";
});


