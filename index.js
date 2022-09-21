let myTable = document.getElementById("myTable");
let row;
let column;

for(let i = 0; i < 200; i++){
  row = myTable.insertRow(i);
  row.classList = "row";
  
  for(let j = 0; j < 200; j++){
    column = row.insertCell(j);
    column.classList = "pixel";
  }
  
}

document.getElementById("myTable").addEventListener('mousedown', function(event){
    event.preventDefault();
    if(event.target.classList == "pixel"){
        event.target.style.backgroundColor = "red";
    }

    if(event.target.classList == "row"){
      event.target.style.backgroundColor = "red";
    }
})

document.getElementById("myTable").addEventListener('mouseover', function(event){
    
    if(event.target.classList == "pixel" && event.buttons==1){
        event.target.style.backgroundColor = "red";
    }

    if(event.target.classList == "row" && event.buttons==1){
      event.target.style.backgroundColor = "red";
  }
})

