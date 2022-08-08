//date of birth dropdown
var html=[]
    for(var d=1;d<32;d++){
        html.push("<option>" + d + "</option>")
    }
    document.getElementById("day").innerHTML = html.join("");

var html=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    for(var m=0;m<12;m++){
        html.push("<option>"+html[m]+"</option>")
    }
    document.getElementById("month").innerHTML = html.join("")

var html=[]
    for(var y=1905;y<2023;y++){
        html.push("<option>"+y+"</option>")
    }
    document.getElementById("year").innerHTML = html.join()


