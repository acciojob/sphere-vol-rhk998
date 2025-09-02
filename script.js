// function volume_sphere() {
// 	var radius = document.getElementById('radius').value;
//     radius = parseFloat('radius').value;
//     if(isNaN(radius)||(radius<0)){
//         document.getElementById('volume').value = 'NaN'
//     }else{
//         var volume = (4/3) * Math.PI * Math.pow(radius, 3);
//         document.getElementById('volume').value = volume.toFixed(4);
//     }
// } 
// document.getElementById('submit').onclick = function() {
//     volume_sphere();
// };
function volume_sphere() {
    var radius = document.getElementById('radius').value;
    radius = parseFloat(radius);  // ✅ use the variable, not a string

    if (isNaN(radius) || radius < 0) {
        document.getElementById('volume').value = 'NaN';
    } else {
        var volume = (4/3) * Math.PI * Math.pow(radius, 3);
        document.getElementById('volume').value = volume.toFixed(4);
    }
}

document.getElementById('submit').onclick = function() {
	event.preventDefault(); 
    volume_sphere();
};

// document.getElementById('MyForm').onsubmit = function(event) {
//     event.preventDefault();  // Prevent the form from submitting
//     volume_sphere();         // Call the volume_sphere function
// };