function openSidebar() {
   
  var job__res__container = document.getElementById('job__res__container');
  var sidebar = document.getElementById("sidebar");
   if(sidebar.style.display == "block"){
    sidebar.style.display = "none";
    job__res__container.style.display = "block";
  }

  else{
    sidebar.style.display = "block";
    job__res__container.style.display = "none";
  }

}