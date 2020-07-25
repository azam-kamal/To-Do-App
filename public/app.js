
var list=document.getElementById("list");

function addTodo(){
    var item=document.getElementById("items");
    var li=document.createElement("li");
    var liText=document.createTextNode(item.value);
    li.appendChild(liText);
    list.appendChild(li);
    li.setAttribute("style","color:white; font-weight:888;")
    item.value="";
    

    
//Edit
var editbtn=document.createElement("button");
var edittext=document.createTextNode("Edit")
editbtn.appendChild(edittext);
li.appendChild(editbtn);
editbtn.setAttribute("class","btn btn-warning")
editbtn.setAttribute("style","margin-left:10px; margin-top:10px;");
editbtn.setAttribute("onclick","editBtn(this)")


//Delete Button
    
var delbtn=document.createElement("button");
var delText=document.createTextNode("Delete");
delbtn.appendChild(delText);
li.appendChild(delbtn);
delbtn.setAttribute("class","btn btn-danger");
delbtn.setAttribute("style","margin-left:10px; margin-top:10px;");
delbtn.setAttribute("onclick","deleteItem(this)");

}

function deleteItem(e){
       e.parentNode.remove();
}

function deleteAll(){
    list.innerHTML =" ";

}

function editBtn(e){
    var value=prompt("Enter Edit Item");
    e.parentNode.firstChild.nodeValue=value

}