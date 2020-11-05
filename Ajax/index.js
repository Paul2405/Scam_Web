

$.ajax({
    method: 'GET',
    url: 'https://scam2020.azurewebsites.net/api/Categories',
    success: function (response) {
        buldcate(response)
    }
})

function getProgetInCategory(id) {
    var list =  [];
    
    $.ajax({
        method: 'GET',
        url: 'https://scam2020.azurewebsites.net/api/Categories/' + id + '/products?pageIndex=1&pageSize=6',
        success: function (response) {
            list = response;
            $(".listProduct").empty();
            list.forEach(product => {
                $(".listProduct").append("<div class='col-lg-4 col-md-6 '>" +
                    " <div class='listing__item' style='height:250px;  width:220px'> " +
                    " <div class='listing__item__pic set-bg' style=height:150px ; width:100px>" +
                    "<img src='" + product.iconUrl + "' alt='' style='height:100px; width:100px'>" +
                    "<div class='listing__item__pic__tag'>Popular</div>" +
                    " </div>" +
                    "<div class='listing__item__text'>" +
                    "<div class='listing__item__text__inside' >" +
                    "<h5>" + product.name + "</h5>" +
                    "<a id='clickToGetDetail' href='file:///C:/Users/DELL/Desktop/Scam_Web/productDetail.html' onclick='" + product.id +"'>See Detail</a>" +
                    "<div class='listing__item__text__rating'>" +
                    "<div class='a' id='img-container'  onload='buildRating(" + product.rating + ")'>" +
                    "</div></div></div></div></div></div> "
                );
                //$("#clickToGetDetail").bind("click", getProDetail(product.id));
                //document.getElementById("clickToGetDetail").addEventListener('click', getProDetail(product.id)); 
                
                    document.getElementById("clickToGetDetail").onclick = getProDetail(product.id);
                
                //$('#clickToGetDetail').click(getProDetail(product.id));
                //$("clickToGetDetail").click(function () {
                //    $("div").each(getProDetail(product.id));
                //});
            });
            
        }
    })
}

function getProDetail(id) {

    $.ajax({
        method: 'GET',
        url: 'https://scam2020.azurewebsites.net/api/Products/' + id,
        success: function (response) {

            //$(".listdatahero").append("  <div class='listing - hero set - bg' data-setbg='img / listing / details / listing - hero.jpg'>" +
            //    "< div class= 'container' >" +
            //    "<div class='row'>" +
            //    "<div class='col-lg-8'>" +
            //    "<div class='listing__hero__option'>" +
            //    "<div class='prodetail'>" +

            //    "</div></div></div></div>" +
            //    "<div class='col-lg-4'>" +
            //    "<div class='listing__hero__btns'>" +
            //    "<a href='#' class='primary-btn share-btn'><i class='fa fa-mail-reply'></i> Share</a>" +
            //    "<a href='#' class='primary-btn'><i class='fa fa-bookmark'></i> Bookmark</a>" +
            //    "</div></div></div ></div> ");
            $(".listing-hero set-bg").attr("src", response.backgroundImageUrl);
            $(".prodetail").append("  <div class='listing__hero__text'><h2>" + response.name + "</h2></div> ");
            $(".prooverview").append("  <div class='listing__details__about'><h4>Overview</h4><p>" + response.overview + "</p><h4>Description</h4><p>" + response.description + "</p></div> ");

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
        $(".CusNav").append("<li class='nav-item' id='clickToGetProduct'><a class='nav-link active' data-toggle='tab' href='#tabs-" + count + "' role='tab'><span class='a' onclick='getProgetInCategory("+element.id+")'>" + element.name + "</span></a></li>");
        count++;
    });
    $("#clickToGetProduct").bind("click", getProgetInCategory(cateID));
    

}

$.ajax({
    method: 'GET',
    url: 'https://scam2020.azurewebsites.net/api/Products/',
    success: function (response) {
        buildRating(response);
    }
})

function buildRating(data) {
    //data.forEach(function (v) {
    createRatingElement(data.rating);
    //});
}

function createRatingElement( numberOfStars) {
    var wrapper = document.createElement('div');
    for (var i = 1; i <= 5; i++) {
        var span = document.createElement('span')
        span.innerHTML = (i <= numberOfStars ? '★' : '☆');
        span.className = (i <= numberOfStars ? 'high' : '');
        wrapper.appendChild(span);
    }
    document.getElementById('img-container').appendChild(wrapper);
}


//document.getElementById("clickToGetDetail").onclick = function fun() {
//    alert("hello");
//    //validation code to see State field is mandatory.  
//}

//function f1() {
//    alert("f1 called");
//    //form validation that recalls the page showing with supplied inputs.    
//}

