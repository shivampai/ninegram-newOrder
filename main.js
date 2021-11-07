newOrders = [];
currentOrder = {};
addID = 0;
function load(){
    var starCountRef = firebase.database().ref('barcodes/length');
starCountRef.on('value', (snapshot) => {
  const data = snapshot.val();
  addID = data;
  console.log(data)
});
}
function add(){
   document.getElementById('table').innerHTML += '<tr id="'+addID+'-tr"><td>'+document.getElementById('product-name').value+'</td><td>'+document.getElementById('client-name').value+'</td><td>'+document.getElementById('client-address').value+'</td><td>'+document.getElementById('client-no').value+'</td><td>'+document.getElementById('product-color').value+'</td><td>'+document.getElementById('product-size').value+'</td><td>'+document.getElementById('ordered-date').value+'</td><td>'+document.getElementById('notes').value+'</td><td><button onclick="deleteRow('+addID+')" class="btn btn-danger" style="width: 100%;">Delete</button></td></tr>'
   currentOrder.productname = document.getElementById('product-name').value;
   currentOrder.receiversname = document.getElementById('client-name').value;
   currentOrder.address = document.getElementById('client-address').value;
   currentOrder.phoneNumber = document.getElementById('client-no').value;
   currentOrder.color = document.getElementById('product-color').value;
   currentOrder.size = document.getElementById('product-size').value;
   currentOrder.notes = document.getElementById('notes').value;
   currentOrder.ordered = document.getElementById('ordered-date').value;
   newOrders.push(currentOrder);
   console.log(newOrders);  
   addID+1;
}
function deleteRow(delID){
    document.getElementById(delID+'-tr').remove();
    newOrders[delID] = null;
}
function printBar(){
    localStorage.setItem('ninegram-orders' , JSON.stringify(newOrders));
    localStorage.setItem('length',addID)
    window.open('print.html' , '_blank' , '200x200');
}