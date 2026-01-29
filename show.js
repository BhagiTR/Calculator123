function show(){
    let x= document.getElementById("name").value;
    alert(x);
}


<input type="checkbox" id="agree">
<label for="agree"> I agree</label>

<input type="checkbox" ng-model="enableSSO" ng-disable="agr