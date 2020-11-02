$(document).ready(function(){

    $(".navbar-toggler").click(function(){
        $(".title").slideToggle();
    });


    // Modal window
    $('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var id = button.data('id');
    //var src = button.data('image') // Extract info from data-* attributes
    var src = $("#"+id+"").attr('src'); // Get src from image 
    var viewportW = $(window).width();
    var viewportH = $(window).height();
    var textik = $("#text"+id+"").text();
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    console.log(button);
    console.log("This is id " + id);
    console.log(src);
    // console.log($("#"+button.data('id')+"").height());
    // console.log($("#"+button.data('id')+"").width());
    // console.log($("#"+button.data('id')+"").attr('src'));

    if(viewportW > 500){
        modal.find('.modalImage').html($('<img>',{id: id, src: src}))
        modal.find('.modalText').html('<h2>' + textik + '</h2>');
        
    }
    else{
        modal.find('.modalImage').html('')
        modal.find('.modalText').html('<h2>' + textik + '</h2>');
    }
    
        


    });
 

    $(window).resize(function() {
        console.log("W : "+ $(window).width() + "px    H : " + $(window).height());
        console.log();
    });

});