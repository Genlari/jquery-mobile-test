var key = "";
var value = "";

document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#Data1").text(1);
	$("#Data2").text(2);
	$("#Data3").text(3);
    $("#Data4").text(4);
	$("#Data5").text(5);
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
	    
	alert("device ready");
    }


    function onPause() {
	
	//paused_count++;
	//updateDisplay();
	    
	alert("pause");
    }
	

    function onResume() {
		
	//resumed_count++;
	//updateDisplay();
	    
	alert("resume");
    }
