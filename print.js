length_total = 0;
function load(){
    array = JSON.parse(localStorage.getItem('ninegram-orders'));
    length_total = Number(localStorage.getItem('length'));
    for(let i = length_total;i<array.length;i++){
      document.getElementById('body').innerHTML+= '<img src="https://barcode.tec-it.com/barcode.ashx?data=ninegram-order-'+i+'&code=Code128&multiplebarcodes=false&translate-esc=true&unit=Fit&dpi=96&imagetype=Gif&rotation=0&color=%23000000&bgcolor=%23ffffff&codepage=Default&qunit=Mm&quiet=0&hidehrt=False"alt="">';
      firebase.database().ref('barcodes/' + i).set(array[i]);   
    }
    length_total = length_total + array.length;
    firebase.database().ref('barcodes/length').set(length_total);   
}
