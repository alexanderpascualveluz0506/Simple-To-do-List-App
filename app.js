function recount(){
    var table = document.getElementById('tblTask');
    var tBody = table.getElementsByTagName('tbody')[0];
    for (var i = 0; i < tBody.rows.length; i++) {
        var firstCol = tBody.rows[i].cells[0]; 
        firstCol.innerHTML = i+1; 
    }
}

function addTask() {
    var table = document.getElementById("tblTask");
    var tBody = table.getElementsByTagName('tbody')[0];
   
    if (document.getElementById("toDoInput").value.length>0){        
        const el1 = document.getElementById('noResult');
        if (el1 !== null) {
            document.getElementById("noResult").remove();
        } 
        var row = tBody.insertRow(tBody.rows.length);
        row.className="bg-white border-b border-gray-400";
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        
        cell1.innerHTML = tBody.rows.length;
        cell2.innerHTML = document.getElementById("toDoInput").value;
        cell3.innerHTML = "Pending";
        cell4.innerHTML += '<button id="doneBtn" class="inline-block px-4 py-2 mb-3 mt-3 uppercase rounded bg-green-600 text-white font-medium text-xs" onclick="Done(this)">Done</button>';
        cell4.innerHTML += '<button id="deleteBtn"  class="inline-block px-4 py-2 mb-3 ml-2 mt-3 uppercase rounded bg-red-600 text-white font-medium text-xs" onclick="Remove(this)">REMOVE</button>';
        document.getElementById("toDoInput").value="";  
    }
 };

function Remove(button) {
    //Determine the reference of the Row using the Button.
    var row = button.parentNode.parentNode;
    var name = row.getElementsByTagName("TD")[0].innerHTML;
    if (confirm("Do you want to delete task: " + name)) {
        //Get the reference of the Table.
        var table = document.getElementById("tblTask");
        //Delete the Table row using it's Index.
        table.deleteRow(row.rowIndex);
        recount();    
    }
};

function Done(button) {
    var row = button.parentNode.parentNode;
    row.style.background="gray";
    row.style.color="white";
    button.remove();
};







