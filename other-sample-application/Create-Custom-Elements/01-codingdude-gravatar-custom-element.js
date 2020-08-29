function customTag(tagName, fn) {
    document.createElement(tagName);
    //find all the tags occurrences (instances) in the document
    var tagInstances = document.getElementsByTagName(tagName);
    //for each occurrence run the associated function
    for (var i = 0; i < tagInstances.length; i++) {
        fn(tagInstances[i]);
    }
}

function codingdudeGravatar(element) {
    //code for rendering the element goes here
    if (element.attributes.email) {
        //get the email address from the element's email attribute
        let email = element.attributes.email.value;
        //let functionImgMouseOverEventListerner=element.attributes.onMouseOverEvent.fn;

       // console.log('----------\nfunctionImgMouseOverEventListerner : \n'+functionImgMouseOverEventListerner);
        let gravatar = "http://www.gravatar.com/avatar/" + md5(email) + ".png";
        
        //element.innerHTML = "<img src='" + gravatar + "'>";
        let imgElem=document.createElement('img');
        imgElem.setAttribute('src',gravatar);
        imgElem.setAttribute('title',email);
        imgElem.addEventListener('mouseover', function(){
            console.log(' Email - '+email+' mouse-hovered! - ');
        });
        //imgElem.addEventListener('mouseover',functionImgMouseOverEventListerner);
        element.appendChild(imgElem);
        

        let spanElem=document.createElement('span');
        spanElem.innerHTML='<b>'+email+'</b>';
        element.appendChild(spanElem);
    }
}

// function funcImgMouseOverEventListerner(element,email){
//     console.log('External function : Email - '+email+' mouse-hovered! - ');
    
// }

//customTag("codingdude-gravatar",codingdudeGravatar);

document.addEventListener("DOMContentLoaded", function (e) {
    customTag("codingdude-gravatar", codingdudeGravatar);
});