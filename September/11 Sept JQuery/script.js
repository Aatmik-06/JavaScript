// JQuery
// $(document).ready(function(){
//     code goes here
// })

// tag Selector
$(document).ready(function(){
    $("#click").click(function(){
        $("p").hide()
    })
})

// ID selector 
$(document).ready(function(){
    $("#dblclick").dblclick(function(){
        $("#p2").hide()
    })
})

// Class Selector
$(document).ready(function(){
    $("#click2").mouseenter(function(){
        $("h5.new").hide()
    })
})

// applying css 
$(document).ready(function(){
    $("#focus").click(function(){
        $("input").focus(function(){
            $(this).css("background-color","yellow");
      })
    })
    $("#focus").click(function(){
        $("input").blur(function(){
            $(this).css("background-color","red");
      })
    })
    $("#hover").hover(function () {
            alert("hover on")
            
        }, function () {
            alert("hover out")
        });
});
