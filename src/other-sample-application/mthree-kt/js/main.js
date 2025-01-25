function toggleElement(elementId) {
    var x = document.getElementById(elementId);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function updateVisibilityForElement(elementId,action="show"){
    var x = document.getElementById(elementId);
    if(action==="show"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
  }

  function toggleDivAndUpdateArrow(divId,upArrowId,downArrowId){
    var x = document.getElementById(divId);
    var u = document.getElementById(upArrowId);
    var d = document.getElementById(downArrowId);
    if (x.style.display === "none") {
      x.style.display = "block";
      u.style.display = "block";
      d.style.display = "none";
    } else {
      x.style.display = "none";
      u.style.display = "none";
      d.style.display = "block";
    }
  }