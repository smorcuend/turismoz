
$('#ir').click(function(event){

  var stringBuffer = $('#inputdata input').attr('value');
  console.log(stringBuffer);
  searchPlace(stringBuffer);



});

$('#inputdata #irgps').click(function(){
	console.log('button pulsado');
	getLocation();
	
});


function searchPlace(place){

	if(typeof(place) == "string"){

		if(place == "Madrid"){
			
		}

	}

}

$("#city").jeoCityAutoComplete();

function getLocation(){
	if (navigator.geolocation){
    	navigator.geolocation.getCurrentPosition(showPosition);
	}else{
		console.log("Geolocation is not supported by this browser.");
	}
}

function showPosition(position){
	//x.innerHTML="Latitude: " + position.coords.latitude +"<br>Longitude: " + position.coords.longitude;
	$('#grid').text("Latitude: " + position.coords.latitude +" , Longitude: " + position.coords.longitude);
	console.log("Latitude: " + position.coords.latitude +" , Longitude: " + position.coords.longitude);
}