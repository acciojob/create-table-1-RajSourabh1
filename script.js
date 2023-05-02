function insert_Row() {
    //Write your code here
  let table = document.getElementById("sampleTable");
  let newRaw = table.insertRow(0);	

  let leftcell = newRaw.insertCell(0);
  let rightcell = newRaw.insertCell(1);	

  leftcell.innerText = "New Cell1";
  rightcell.innerText	= "New Cell2";
}
