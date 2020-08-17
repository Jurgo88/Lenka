$(document).ready(function(){
    console.log("load page");
    $(".profile-content").click(function(){
        console.log("kokot");
      });

    var dir = "/assets/img/Lenka";
    var fileextension = ".jpg";
    // $.ajax({
    //     //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    //     url: dir,
    //     success: function (data) {
    //         //List all .png file names in the page
    //         $(data).find("a:contains(" + fileextension + ")").each(function () {
    //             var filename = this.href.replace(window.location.host, "").replace("http://", "");
    //             $("body").append("<img src='" + dir + filename + "'>");
    //         });
    //     }
    // });


    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: dir,
        success: function (data) {
            var column =".left-images"
            i = 1;
            //List all .png file names in the page
            $(data).find("a:contains(" + fileextension + ")").each(function () {

                var filename = this.href.replace(window.location.host, "").replace("http://", "");
                if(i % 2 === 0 ){
                    $(".left-images").append("<img src='" + dir + filename + "' class='rounded' '>");
                }else{
                    $(".right-images").append("<img src='" + dir + filename + "' class='rounded' '>");     
                }
                i++;
                    
            });
        }
});

});


    var dir = "/assets/img/Lenka";
    var fileextension = ".jpg";
    