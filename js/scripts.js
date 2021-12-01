function Ticket(oldrelease, senior, daytime){
  this.oldrelease = oldrelease;
  this.senior = senior;
  this.daytime = daytime;
}


$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    const release = $("#movieSelect").val();
    const time = $("#timeSelect").val();
    const age = $("#ageSelect").val();

    let newTicket = new Ticket (release, age, time);

    if(newTicket.oldrelease === "true" || newTicket.senior === "true" || newTicket.daytime === "true"){
      $(".ticket-price").html("$10");      
    } else{
      $(".ticket-price").html("$15");
    }
  })
})