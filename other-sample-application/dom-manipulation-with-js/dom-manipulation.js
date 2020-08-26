
var premLib = {
    styleLibrary: {},
    domManipulationLibrary: {},
    eventLibrary:{},
};

/** EVENT LIBRAY */

premLib.eventLibrary.addEventListenerToElementById = function(elementId,eventName,eventFunc){
    //console.log( 'elementId - '+elementId+' | '+' eventName - '+eventName)
    let rootDiv = document.getElementById(elementId);
    rootDiv.addEventListener(eventName,eventFunc);
};






/** STYLE LIBRAY */
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

premLib.styleLibrary.toggleClassToElementById = function (elementId,className){
    let rootDiv = document.getElementById(elementId);
    rootDiv.classList.toggle(className)
}

premLib.styleLibrary.addStyleArrayToElementById = function (elementId, styleArray) {
    //console.log('elementId : ' + elementId + ' styleArray : ' + styleArray);
    let rootDiv = document.getElementById(elementId);
    Object.assign(rootDiv.style, styleArray);
    // console.log('rootDiv : ' + rootDiv);
}

premLib.styleLibrary.addStyleToElement = function (elementId, styleName, styleValue) {
    let rootDiv = document.getElementById(elementId);
    rootDiv.style[styleName] = styleValue;
}

premLib.styleLibrary.addBackgroundColor = function (elementId, colorStr) {
    // console.log('elementId : ' + elementId + ' colorStr : ' + colorStr);
    let rootDiv = document.getElementById(elementId);
    rootDiv.style.backgroundColor = colorStr;
}













/** DOM MANIPULATION LIBRARY */

premLib.domManipulationLibrary.appendChildToElementById = function (elementId, childType, childId) {
    // console.log('elementId : ' + elementId + ' childType : \'' + childType + '\' childId : \'' + childId + '\'');
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
    
    
    let LIid=ulId+'_L';
    let spanId=LIid+'_S';

    // console.log('  |  parentChildJson[\'data\'] - '+'\''+parentChildJson['data']+'\''
    // +'  |  ulId - '+'\''+ulId+'\''
    // +'  |  LIid - '+'\''+LIid+'\''
    // +'  |  spanId - '+'\''+spanId+'\'');

    premLib.domManipulationLibrary.appendChildToElementById(elementId,'ul',ulId);
    premLib.domManipulationLibrary.appendChildToElementById(ulId,'li',LIid);
    premLib.domManipulationLibrary.appendChildToElementById(LIid,'span',spanId);
    premLib.domManipulationLibrary.createTextNodeElementById(LIid,parentChildJson['data']);

    // premLib.styleLibrary.addStyleArrayToElementById(
    //     ulId, { "list-style-type": "none" } );

        // console.log('  |  parentChildJson[\'parent\'] - '+'\''+parentChildJson['parent']+
        // '  |  \'null\'!==parentChildJson[\'parent\']  - '+('null'!==parentChildJson['parent']) );

    if('null'!==parentChildJson['parent']){
        premLib.styleLibrary.addClassToElementById(ulId,'nested');
        
    }else{
        premLib.styleLibrary.addStyleArrayToElementById(ulId,{ margin: 0, padding: 0 });
    }
    
    if(parentChildJson['children'].length>0){
        
        premLib.styleLibrary.addClassToElementById(spanId,'caret');
        premLib.eventLibrary.addEventListenerToElementById(spanId, "click", 
        function() {
            
            let ulDiv = document.getElementById(ulId);
            //ulDiv.classList.toggle("active");            
            
            let spanDiv = document.getElementById(spanId);
            spanDiv.classList.toggle("caret-down");
            let mmm=0;
            for(mmm=0;mmm<parentChildJson['children'].length;mmm++){
                let cUlDivId=LIid+'_'+(mmm+1)+'_U';
                let cUlDiv=document.getElementById(cUlDivId);
                cUlDiv.classList.toggle("active");
                //console.log(cUlDivId+' active!!');
            }
            // console.log(spanDiv+' clicked!!');
                // this.parentElement.querySelector(".nested").classList.toggle("active");
                // this.classList.toggle("caret-down");
              }
        );

        let mm=0;
        for(mm=0;mm<parentChildJson['children'].length;mm++){            
            premLib.domManipulationLibrary.appendUlLiFromJsonToElementById(
                LIid,parentChildJson['children'][mm],'_'+(mm+1) );
        }
    }
}


