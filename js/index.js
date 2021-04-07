$(".agregar").on("click", function(e){
    e.preventDefault();

    item = $("#newText").val();
    $(".Lista").append(
    `<li class = inList>
        <label>
            ${item}
        </label>
        <div>
        <button class = check>
            check
        </button>
        <button class = delete>
            delete
        </button>
        </div>
    </li>`);
    $("#newText").val("");
})

$(document).on("click", ".check", function(e){
    parent = $(this).parent().parent();
    label = $(parent).children("label");
    
    if (label.css("text-decoration") == "line-through solid rgb(0, 0, 0)"){
        label.css("text-decoration", "none");
    }else {
        label.css("text-decoration", "line-through");
    }
})

$(document).on("click", ".delete", function(e){
    parent = $(this).parent().parent();
    parent.remove();
})