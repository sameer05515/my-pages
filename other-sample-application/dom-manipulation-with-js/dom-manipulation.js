
var premLib = {
    styleLibrary: {},
    domManipulationLibrary: {}
};

premLib.styleLibrary.addStyleArrayToElementById = function (elementId, styleArray) {
    console.log('elementId : ' + elementId + ' styleArray : ' + styleArray);
    let rootDiv = document.getElementById(elementId);
    Object.assign(rootDiv.style, styleArray);
    console.log('rootDiv : ' + rootDiv);
}

premLib.styleLibrary.addStyleToElement = function (elementId, styleName, styleValue) {
    let rootDiv = document.getElementById(elementId);
    rootDiv.style[styleName] = styleValue;
}

premLib.styleLibrary.addBackgroundColor = function (elementId, colorStr) {
    console.log('elementId : ' + elementId + ' colorStr : ' + colorStr);
    let rootDiv = document.getElementById(elementId);
    rootDiv.style.backgroundColor = colorStr;
}

premLib.domManipulationLibrary.appendChildToElementById = function (elementId, childType, childId) {
    console.log('elementId : ' + elementId + ' childType : \'' + childType + '\' childId : \'' + childId + '\'');
    let rootDiv = document.getElementById(elementId);
    let childElement = document.createElement(childType);
    childElement.setAttribute("id", childId);
    rootDiv.appendChild(childElement);
}

premLib.domManipulationLibrary.setAttributeToElementById = function (elementId, attributeName, attributeValue) {
    let rootDiv = document.getElementById(elementId);
    rootDiv.setAttribute(attributeName, attributeValue);
}

premLib.domManipulationLibrary.createTextNodeElementById = function (elementId, textNodeContent) {
    let rootDiv = document.getElementById(elementId);
    let textNode = document.createTextNode(textNodeContent);
    rootDiv.appendChild(textNode);
}

premLib.domManipulationLibrary.appendUlLiFromJsonToElementById = function(elementId,parentChildJson,isRoot){
    let ulId=elementId+'_ul';
    premLib.domManipulationLibrary.appendChildToElementById(elementId,'ul',ulId);
    // if(isRoot){
        let spanId=ulId+'_span';
        premLib.domManipulationLibrary.appendChildToElementById(ulId,'span',spanId);
        premLib.domManipulationLibrary.createTextNodeElementById(spanId,parentChildJson['data']);
    // }
    if(parentChildJson['children'].length>0){
        let mm=0;
        for(mm=0;mm<parentChildJson['children'].length;mm++){
            let LIid=ulId+'_li_'+mm;
            let spanId=LIid+'_span';                    
            premLib.domManipulationLibrary.appendChildToElementById(ulId,'li',LIid);
            premLib.domManipulationLibrary.appendChildToElementById(LIid,'span',spanId);
            if(parentChildJson['children'][mm]['children'].length>0){
                premLib.styleLibrary.addStyleArrayToElementById(
                    spanId,{
                        "cursor": "pointer",
                        "-webkit-user-select": "none", /* Safari 3.1+ */
                        "-moz-user-select": "none", /* Firefox 2+ */
                        "-ms-user-select": "none", /* IE 10+ */
                        "user-select": "none"
                      }
                );
            }
            
            premLib.domManipulationLibrary.createTextNodeElementById(
                spanId,parentChildJson['children'][mm]['data']);
            premLib.domManipulationLibrary.appendUlLiFromJsonToElementById(
                LIid,parentChildJson['children'][mm],false );
        }
    }else{

    }
}


