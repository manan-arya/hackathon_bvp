function goToInput(){
console.log("working");
}

function sendData(){
  console.log("data");
  var pro=document.getElementById("problelm").value;
  console.log(pro);
}

function JsonCoverter(){
        var name=document.getElementById("name").value;
        var email=document.getElementById("email").value;
        var data={name:name,email:email}
        console.log(data);
        var myJson=JSON.stringify(data);
        console.log(myJson);
    }
