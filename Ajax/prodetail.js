
//$.ajax({
//    method: 'GET',
//    url: 'https://scam2020.azurewebsites.net/api/Products/2',
//    success: function (response) {
//        getProDetail(response)
//    }
//})

function getProDetail(id) {
    
    $.ajax({
        method: 'GET',
        url: 'https://scam2020.azurewebsites.net/api/Products/' + id,
        success: function (response) {
           
            $(".listdatahero").append("  <div class='listing - hero set - bg' data-setbg='img / listing / details / listing - hero.jpg'>"+
                "< div class= 'container' >"+
                "<div class='row'>"+
                    "<div class='col-lg-8'>"+
                        "<div class='listing__hero__option'>"+
                            "<div class='prodetail'>"+

                            "</div></div></div></div>"+
                "<div class='col-lg-4'>"+
                    "<div class='listing__hero__btns'>"+
                        "<a href='#' class='primary-btn share-btn'><i class='fa fa-mail-reply'></i> Share</a>"+
                        "<a href='#' class='primary-btn'><i class='fa fa-bookmark'></i> Bookmark</a>"+
                    "</div></div></div ></div> ");
            $(".prodetail").append("  <div class='listing__hero__text'><h2>" + response.name + "</h2></div> ");
            $(".prooverview").append("  <div class='listing__details__about'><h4>Overview</h4><p>" + response.overview + "</p></div> ");

           
        }
    })
}

//function builddetail(data) {    
    
        
    
//    $(".CusName").bind("load", getProgetInCategory(data.id));

//}