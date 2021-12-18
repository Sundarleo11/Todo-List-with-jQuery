var ullist = $("#ullist");
var add = $("#add");
var clear = $("#clear");
var task = $("#task");

add.click(() => {
  // alert('hi');
  // console.log(task.val());
  let item = $("<li>", {
    class: "list-group-item",
    text: task.val(),
  });
  ullist.append(item);
  task.val("");
});

clear.click(() => {
  task.val("");
});
