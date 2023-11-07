console.log("geo func called")
function getLocation() {
    let x:any
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position:any) {
    console.log(position)
  }

  getLocation();