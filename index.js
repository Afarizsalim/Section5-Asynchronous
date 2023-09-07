import Table from "./Table.js";

function getData(url,callback){
    let http = new XMLHttpRequest();
    http.onload = function(){
        if(http.status === 200){
            return callback(JSON.parse(http.responseText));
        }
    }
    http.open("GET",url);
    http.send() 
}

getData("https://jsonplaceholder.typicode.com/users", function(data){
    console.log(data);
    let table = new Table(data)
    
    const app = document.getElementById("table")
    table.render(app)
})
    
