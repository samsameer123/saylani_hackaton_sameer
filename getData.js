

function addItemsToMyDiv(dishname,restName,dishprice,imagesrc){
var mainParty = document.getElementById('mainn')
 
var anchor = document.createElement('a')
var div1 = document.createElement('div')
div1.setAttribute('class', 'item')

var div2 = document.createElement('div')
div2.setAttribute('class', 'product_blog_img')
var div3 = document.createElement('div')
div3.setAttribute('class', 'product_blog_cont')

anchor.setAttribute('href', './html/ordernow.html')


 var img = document.createElement('img')
 var dishName = document.createElement('h3')
 var Price = document.createElement('h4')
 var RestName = document.createElement('h4');



 img.src = imagesrc;
 img.setAttribute('class','imagestyle')
 dishName.innerHTML = dishname;
 Price.innerHTML = dishprice;
 RestName.innerHTML = restName

 anchor.appendChild(div1)
 div1.appendChild(div2)
 div2.appendChild(img)
 div1.appendChild(div3)
 div3.appendChild(dishName)
 div3.appendChild(Price)
 div3.appendChild(RestName)


 mainParty.appendChild(anchor)

}

function getData(){
    firebase.database().ref('posts/').once('value',function(AllRecords){
        AllRecords.forEach(
            function(CurrentRecord){
                var dishname = CurrentRecord.val().name;
                var restName = CurrentRecord.val().rest;
                var dishprice = CurrentRecord.val().price;
                var imagesrc = CurrentRecord.val().url;
                console.log(imagesrc)
                addItemsToMyDiv(dishname,restName,dishprice,imagesrc) 
            }
        )

    })
}

window.onload = getData();