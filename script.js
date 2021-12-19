var ullist = $("#ullist");
var add = $("#add");
var Reset = $("#Reset");
var task = $("#task");
var clean = $("#Cleanup");
var sort = $("#sort");

/* click Event function  for Add Reset Sort Clean */
function cleanup() {
  $("#ullist .done").remove();
  togglebutton();
}

function additerm() {
  var item = $("<li>", {
    class: "list-group-item",
    text: task.val(),
  });

  item.click((event) => {
    item.toggleClass("done");
  });
  ullist.append(item);
  task.val("");
  togglebutton();
}

function togglebutton() {
  Reset.prop("disabled", task.val() == "");
  add.prop("disabled", task.val() == "");
  sort.prop("disabled", ullist.children().length < 1);
  clean.prop("disabled", ullist.children().length < 1);
}

function sorttask() {
  $("#ullist .done").appendTo(ullist);
}

//To check input length eq is 13
task.keypress((e) => {
  if (e.which == 13) additerm();
}),
  // input button task
  task.on("input", togglebutton);

/* click Event for Add Reset Sort Clean */
add.click(additerm);

Reset.click(() => {
  task.val("");
  togglebutton();
});

sort.click(sorttask);

clean.click(cleanup);
