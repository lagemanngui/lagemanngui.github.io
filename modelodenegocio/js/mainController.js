$(document).ready(function(){

  $(".box").click(function(evt){
    // console.log("Clicou na box");
  });

  $(".box-item").click(function(evt){
    evt.stopPropagation();
    // console.log("Clicou no box-item");
  });

  $(".box-body").click(function (evt){
    evt.stopPropagation();
    if($(evt.target).hasClass("delete-item"))
    {
      removeItem(evt.target);
    }
  });

  $(".add-button").click(function(evt){
    evt.stopPropagation();
    var curr_pressed = $(this);
    var curr_box = curr_pressed.parent().parent();

    var new_item = "<div class='box-item'><p><textarea rows='1' placeholder='Novo item..' spellcheck='false'></textarea></p>";
    new_item += "<div class = 'delete-item'>Remover</div></div>"
    curr_box.children(".box-body").append(new_item);
    autosize($('textarea'));

    // console.log("Adicionou item");
  });

});

function removeItem(target){
  var curr_delete = $(target);
  curr_delete.parent().remove();
}
