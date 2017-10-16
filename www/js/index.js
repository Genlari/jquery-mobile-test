var key = "";
var value = "";

document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#D1").text(window.localStorage.getItem("Data1"));
	$("#D2").text(window.localStorage.getItem("Data2"));
	$("#D3").text(window.localStorage.getItem("Data3"));
    $("#D4").text(window.localStorage.getItem("Data4"));
	$("#D5").text(window.localStorage.getItem("Data5"));
}


// device APIs are available
//
    function onDeviceReady() {
        
    key = "Data1";
    value = "JSON";
    window.localStorage.setItem(key,value);
        
    key = "Data2";
    value = "Scrum";
    window.localStorage.setItem(key,value);
        
    key = "Data3";
    value = "Database";
    window.localStorage.setItem(key,value);
        
    key = "Data4";
    value = "Mouse";
    window.localStorage.setItem(key,value);
        
    key = "Data5";
    value = "Headache";
    window.localStorage.setItem(key,value);
    
	
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	
	//launched_count++;
	updateDisplay();
	    
	//alert("device ready");
    }


    function onPause() {
	
	//paused_count++;
	//updateDisplay();
	    
	//alert("pause");
    }
	

    function onResume() {
		
	//resumed_count++;
	//updateDisplay();
        
    key = "Data1";
    value = "Why did you leave us";
    window.localStorage.setItem(key,value);
        
    key = "Data2";
    value = "";
    window.localStorage.setItem(key,value);
        
    key = "Data3";
    value = "Did we do something wrong";
    window.localStorage.setItem(key,value);
        
    key = "Data4";
    value = "";
    window.localStorage.setItem(key,value);
        
    key = "Data5";
    value = "Maybe we should make it so you can never leave us again?";
    window.localStorage.setItem(key,value);
	    
	//alert("resume");
    }
