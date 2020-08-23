
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


