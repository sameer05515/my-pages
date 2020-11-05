function customTag(tagName, fn) {
    document.createElement(tagName);
    //find all the tags occurrences (instances) in the document
    var tagInstances = document.getElementsByTagName(tagName);
    //for each occurrence run the associated function
    for (var i = 0; i < tagInstances.length; i++) {
        fn(tagInstances[i]);
    }
}

function makeBoldPrem(element) {
    //code for rendering the element goes here
    if (element.attributes.email) {
        //get the email address from the element's email attribute
        let email = element.attributes.email.value; 
        
        let spanElem=document.createElement('span');
        spanElem.innerHTML='<b>'+email+'</b>';
        element.appendChild(spanElem);

        spanElem.setAttribute('title',email);
        spanElem.addEventListener('mouseover', function(){
            console.log(' Email - '+email+' mouse-hovered! - ');
        });
    }
}



//customTag("make-bold-prem",makeBoldPrem);

document.addEventListener("DOMContentLoaded", function (e) {
    customTag("make-bold-prem", makeBoldPrem);
});