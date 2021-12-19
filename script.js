var ullist = $("#ullist");
var add = $("#add");
var Reset = $("#Reset");
var task = $("#task");
var clean= $("#Cleanup");
var sort= $("#sort");


function cleanup(){
  //console.log('hi');
 // console.log($('#ullist .done').remove());
  $('#ullist .done').remove()
  togglebutton()
}

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
  togglebutton()

}



function togglebutton(){
  
   Reset.prop('disabled',task.val() =='');
   add.prop('disabled',task.val() =='');
   sort.prop('disabled',ullist.children().length < 1);
   clean.prop('disabled',ullist.children().length < 1);
  
  
  
}
/*
 function togglebutton(valIsEmpty){
   if(!valIsEmpty){
    Reset.prop('disabled',false);
    add.prop('disabled',false);
   } 
   else {
     Reset.prop('disabled',true);
     add.prop('disabled',true);
   }
   
 }*/

task.keypress((e)=>{
//console.log(e.which);
if(e.which==13) additerm();
}),

task.on('input', togglebutton);
/*
task.on('input',()=>{
 // console.log(task.val())
  //togglebutton(task.val() !='');// it will call enabled functon
  togglebutton(task.val() =='');
})*/

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

function sorttask(){
  $('#ullist .done').appendTo(ullist);
}
Reset.click(() => {
  task.val("")
  togglebutton();
});


sort.click(sorttask);
clean.click(cleanup);