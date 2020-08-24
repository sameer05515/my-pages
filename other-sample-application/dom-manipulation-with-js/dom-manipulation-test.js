// premLib.addBackgroundColor("div-dom-manip-1","rgb(255,0,0)");

// premLib.addBackgroundColor("div-dom-manip-1","red");
var testObject = {
	ids: {
		myBody: "myBody",
		divDomManip1: "div-dom-manip-1",
		divAnimationTest: "div-animation-test",
		divUlLiForParentChildRelation: "div-ul-li-for-parent-child-relation",
		ulForTreeView: "ul-for-tree-view",
		divUlLiForParentChildRelation2:"div-ul-li-for-parent-child-relation2",
		ulForTreeView2: "ul-for-tree-view2",

	},
	stylesCss: {
		stylesForDivDomManip1: {
			"background-color": "green",
			width: "500px",
			height: "300px",
			"text-align": "center",
		},
	},
	data:{}
};

//============================================================================

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

//============================================================================

let parentChildInitialValue = 600;
let parentChildName = testObject.ids.divAnimationTest;
let decrementValue = 100;
let marginValue = (decrementValue / 2);
for (parentChildInitialValue = parentChildInitialValue - decrementValue; parentChildInitialValue >= 100; parentChildInitialValue = parentChildInitialValue - decrementValue) {

	console.log('parentChildInitialValue = ' + parentChildInitialValue + ' | '
		+ 'parentChildName = ' + parentChildName);
	let childIdName = "parentChild_" + parentChildInitialValue;

	premLib.domManipulationLibrary.appendChildToElementById(
		parentChildName,
		"div",
		childIdName
	);

	premLib.styleLibrary.addStyleArrayToElementById(childIdName, {
		"border": "thick solid #0000FF",
		"width": parentChildInitialValue + "px",
		"height": parentChildInitialValue + "px",
		"margin": marginValue + "px " + marginValue + "px " + marginValue + "px " + marginValue + "px",
		//"verticalAlign":"middle",
		//"horizontalAlign":"center",
		// "top": "50%",
		// "left": "50%",
		// "transform": "translate(-50%, -50%)"
	});
	parentChildName = childIdName;
}

//===============================================================

premLib.domManipulationLibrary.appendChildToElementById(
	testObject.ids.myBody,
	"div",
	testObject.ids.divUlLiForParentChildRelation
);
premLib.styleLibrary.addStyleArrayToElementById(testObject.ids.divUlLiForParentChildRelation, {
	"border": "thick solid #0022FF",
	"width": "600" + "px",
	"height": "600" + "px",
	"margin": "5px 5px 5px 5px "
});

premLib.domManipulationLibrary.appendChildToElementById(
	testObject.ids.divUlLiForParentChildRelation,
	"ul",
	testObject.ids.ulForTreeView
);
premLib.styleLibrary.addStyleArrayToElementById(testObject.ids.ulForTreeView,
	{ "list-style-position": "inside" });
premLib.domManipulationLibrary.appendChildToElementById(
	testObject.ids.ulForTreeView,
	"label",
	testObject.ids.ulForTreeView + "_label"
);
premLib.domManipulationLibrary.createTextNodeElementById(
	testObject.ids.ulForTreeView + "_label",
	"ROOT"
);
let liIdPrefix = "ul-li-for-tree-view_"
let liCounter = 1;
for (liCounter = 1; liCounter <= 5; liCounter++) {
	let liId = liIdPrefix + (liCounter)
	premLib.domManipulationLibrary.appendChildToElementById(
		testObject.ids.ulForTreeView,
		"li",
		liId
	);
	premLib.styleLibrary.addStyleArrayToElementById(liId,
		{ "list-style": "bullet", "padding": "5px" });
	premLib.domManipulationLibrary.appendChildToElementById(
		liId,
		"label",
		liId + "_label"
	);
	premLib.domManipulationLibrary.createTextNodeElementById(
		liId + "_label",
		"LI : " + liId
	);
}

//===========================================

premLib.domManipulationLibrary.appendChildToElementById(
	testObject.ids.myBody,
	"div",
	testObject.ids.divUlLiForParentChildRelation2
);
premLib.styleLibrary.addStyleArrayToElementById(testObject.ids.divUlLiForParentChildRelation2, {
	"border": "thick solid #CC22FF",
	"width": "600" + "px",
	"height": "600" + "px",
	"margin": "5px 5px 5px 5px "
});
// premLib.data.parentChildJson={
// 	name:"ROOT",
// 	chilrdenCount:10
// }
premLib.data.parentChildJsonArr=[[10],[3],3]




