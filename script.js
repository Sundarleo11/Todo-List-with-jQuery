var ullist = $("#ullist");
var add = $("#add");
var clear = $("#clear");
var task = $("#task");

function additerm(){
  var item = $("<li>", {
    class: "list-group-item",
    text: task.val(),
  })

  item.click((event) => {
   item.toggleClass("done");
  })
  ullist.append(item);
  task.val("");

}

task.keypress((e)=>{
//console.log(e.which);
if(e.which==13) additerm();
}),


add.click(additerm);
/*
add.click(() => {
  // alert('hi');
  // console.log(task.val());
  var item = $("<li>", {
    class: "list-group-item",
    text: task.val(),
  })

  item.click((event) => {
    //console.log("click",$(this));
   // console.log(event, $(this));
   //console.log("click", $(event.target));
   //  $(event.target).toggleClass("disabled");
   // item.toggleClass("disabled");
     item.toggleClass("done");
  })
  ullist.append(item);
  task.val("");
});
*/
clear.click(() => {
  task.val("");
});
