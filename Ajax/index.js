$.ajax({
    method: 'GET',
    url: 'https://scam2020.azurewebsites.net/api/Categories',
    success: function (response) {
        buldcate(response)
    }
})

function getProgetInCategory(id) {
    var list = [];
    $.ajax({
        method: 'GET',
        url: 'https://scam2020.azurewebsites.net/api/Categories/' + id + '/products',
        success: function (response) {
            list = response;
            $(".listProduct").empty();
            list.forEach(product => {
                $(".listProduct").append("<div class='col-lg-4 col-md-6 '>"+
               " <div class='listing__item'>"+
                   " <div class='listing__item__pic set-bg'>"+
                        "<img src='"+product.iconUrl+"' alt='' style='height:100px; width:100px'>"+
                        "<div class='listing__item__pic__tag'>Popular</div>"+
                   " </div>"+
                    "<div class='listing__item__text'>"+
                        "<div class='listing__item__text__inside'>"+
                            "<h5>"+product.name+"</h5>"+
                            "<div class='listing__item__text__rating'>"+
                                "<div class='listing__item__rating__star'>"+
                                "</div></div></div></div></div></div>"
                );
            })
        }
    })
}

function buldcate(data) {
    var list = [];
    var count = 1;
    var cateID = 1;
    list = data;
    list.forEach(element => {
        $(".hero__categories__tags").append("<li><a href='#'>" + element.name + "</a></li>");
    });
    list.forEach(element => {
        $(".CusNav").append("<li class='nav-item' id='clickToGetProduct'><a class='nav-link active' data-toggle='tab' href='#tabs-" + count + "' role='tab'><span class='" + element.id + "' onclick='getProgetInCategory("+element.id+")'>" + element.name + "</span></a></li>");
        count++;
    });
    $("#clickToGetProduct").bind("click", getProgetInCategory(cateID));
}
