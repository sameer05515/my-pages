// premLib.addBackgroundColor("div-dom-manip-1","rgb(255,0,0)");

// premLib.addBackgroundColor("div-dom-manip-1","red");
var testObject = {
	ids: {
		myBody: "myBody",
		divDomManip1: "div-dom-manip-1",
		divAnimationTest: "div-animation-test",
	},
	stylesCss: {
		stylesForDivDomManip1: {
			"background-color": "green",
			width: "500px",
			height: "300px",
			"text-align": "center",
		},
	},
};

//premLib.styleLibrary.addStyleArrayToElementById("div-dom-manip-1", testObject.stylesForDivDomManip1);
premLib.styleLibrary.addStyleToElement(
	testObject.ids.divDomManip1,
	"backgroundColor",
	"yellow"
);
premLib.styleLibrary.addStyleToElement(
	testObject.ids.divDomManip1,
	"width",
	"150px"
);
premLib.styleLibrary.addStyleToElement(
	testObject.ids.divDomManip1,
	"height",
	"50px"
);
premLib.styleLibrary.addStyleToElement(
	testObject.ids.divDomManip1,
	"textAlign",
	"center"
);

premLib.domManipulationLibrary.appendChildToElementById(
	testObject.ids.myBody,
	"div",
	testObject.ids.divAnimationTest
);
premLib.styleLibrary.addStyleToElement(
	testObject.ids.divAnimationTest,
	"border",
	"thick solid #0000FF"
);
premLib.styleLibrary.addStyleToElement(
	testObject.ids.divAnimationTest,
	"width",
	"600px"
);
premLib.styleLibrary.addStyleToElement(
	testObject.ids.divAnimationTest,
	"height",
	"600px"
);
premLib.styleLibrary.addStyleToElement(
	testObject.ids.divAnimationTest,
	"position",
	"relative"
);

// premLib.styleLibrary.addStyleToElement(
// 	testObject.ids.divAnimationTest,
// 	"marginTop",
// 	"5px"
// );

let parentChildInitialValue = 600;
let parentChildName = testObject.ids.divAnimationTest;
let decrementValue=100;
let marginValue=(decrementValue/2);
for (parentChildInitialValue=parentChildInitialValue-decrementValue; parentChildInitialValue >= 100; parentChildInitialValue = parentChildInitialValue - decrementValue) {

    console.log('parentChildInitialValue = ' + parentChildInitialValue + ' | ' 
    + 'parentChildName = ' + parentChildName);
	let childIdName = "parentChild_" + parentChildInitialValue;

	premLib.domManipulationLibrary.appendChildToElementById(
		parentChildName,
		"div",
		childIdName
    );
    
    premLib.styleLibrary.addStyleArrayToElementById(childIdName,{
        "border":"thick solid #0000FF",
        "width":parentChildInitialValue + "px",
        "height":parentChildInitialValue + "px",
        "margin":marginValue+"px "+marginValue+"px "+marginValue+"px "+marginValue+"px",
        //"verticalAlign":"middle",
        //"horizontalAlign":"center",
        // "top": "50%",
        // "left": "50%",
        // "transform": "translate(-50%, -50%)"
    });
	parentChildName = childIdName;
}