function getAndupdate() {
    console.log("clicked");
     tit = document.getElementById("title").value;
     desc = document.getElementById("description").value;
     if (localStorage.getItem('itemsJson')==null) {
         itemJsonArray = [];
         itemJsonArray.push([tit, desc]);
         localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
     }
     else{
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
      }
      update();
}

function update(){
    if (localStorage.getItem('itemsJson')==null) {
        itemJsonArray = [];
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    }
    else{
       itemJsonArrayStr = localStorage.getItem('itemsJson');
       itemJsonArray = JSON.parse(itemJsonArrayStr);
     }
     // populate the table
     let tablebody = document.getElementById("tablebody");
     let str = "";
     itemJsonArray.forEach((element,index) => {
         str += `
         <tr>
         <th scope="row">${index + 1}</th>
         <td>${element[0]}</td>
         <td>${element[1]}</td>
         <td><button class="btn btn-sm btn-danger" onclick = "deleted(${index})">Delete</button></td>
         </tr> `  ;
      });
      tablebody.innerHTML = str;
 }

add = document.getElementById("add");
add.addEventListener("click", getAndupdate);
update();

function deleted(itemIndex) {
    console.log("deleted",itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.splice(itemIndex,1);

        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
        update();  
    }

function cleared() {
    if (confirm("Do you really Want to clear the list ?")) {
    localStorage.clear();
    update();
   }
}    
