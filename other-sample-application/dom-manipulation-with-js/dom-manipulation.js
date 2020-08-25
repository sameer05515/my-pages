
var premLib = {
    styleLibrary: {},
    domManipulationLibrary: {}
};

premLib.styleLibrary.addStyle = function (styles){
    /* Create style document */ 
    let css = document.createElement('style'); 
    css.type = 'text/css'; 
    if (css.styleSheet) 
        css.styleSheet.cssText = styles; 
    else 
        css.appendChild(document.createTextNode(styles)); 
    /* Append style to the tag name */ 
    document.getElementsByTagName("head")[0].appendChild(css);
};

premLib.styleLibrary.addClassToElementById= function (elementId, className){
    let rootDiv = document.getElementById(elementId);
    rootDiv.classList.add(className);
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

premLib.domManipulationLibrary.appendUlLiFromJsonToElementById = function(elementId,parentChildJson,appender=''){
    let ulId=elementId+appender+'_U';
    
    // if(isRoot){
    let LIid=ulId+'_L';
    let spanId=LIid+'_S';

    console.log('  |  parentChildJson[\'data\'] - '+'\''+parentChildJson['data']+'\''
    +'  |  ulId - '+'\''+ulId+'\''
    +'  |  LIid - '+'\''+LIid+'\''
    +'  |  spanId - '+'\''+spanId+'\'');
    premLib.domManipulationLibrary.appendChildToElementById(elementId,'ul',ulId);
    premLib.domManipulationLibrary.appendChildToElementById(ulId,'li',LIid);
    premLib.domManipulationLibrary.appendChildToElementById(LIid,'span',spanId);
    premLib.domManipulationLibrary.createTextNodeElementById(spanId,parentChildJson['data']);

    premLib.styleLibrary.addStyleArrayToElementById(
        ulId,
        {
            "list-style-type": "none"
        }
    );
    // }
    if(parentChildJson['children'].length>0){
        premLib.styleLibrary.addStyleArrayToElementById(
            spanId,{ "cursor": "pointer", 
            "-webkit-user-select": "none", /* Safari 3.1+ */
            "-moz-user-select": "none", /* Firefox 2+ */
            "-ms-user-select": "none", /* IE 10+ */
            "user-select": "none"
        });

        let mm=0;
        for(mm=0;mm<parentChildJson['children'].length;mm++){            
            premLib.domManipulationLibrary.appendUlLiFromJsonToElementById(
                LIid,parentChildJson['children'][mm],'_'+(mm+1) );
        }
    }
}


