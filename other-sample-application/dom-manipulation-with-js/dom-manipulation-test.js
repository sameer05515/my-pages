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
		styleAddCheckingDiv: "style-add-checking-div",

	},
	stylesCss: {
		stylesForDivDomManip1: {
			"background-color": "green",
			width: "500px",
			height: "300px",
			"text-align": "center",
		},
	},
	data:{
		parentChildJson:{}
	}
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
	"margin": "5px 5px 5px 5px",
	"overflow":"scroll",
    "-webkit-overflow-scrolling": "touch"
});
// premLib.data.parentChildJson={
// 	name:"ROOT",
// 	chilrdenCount:10
// }
testObject.data.parentChildJson={"parent":"null","data":"ROOT","children":[{"parent":"ROOT","data":"Node 1","children":[{"parent":"Node 1","data":"Node 11","children":[{"parent":"Node 11","data":"Node 111","children":[{"parent":"Node 111","data":"Node 1111","children":[]}]},{"parent":"Node 11","data":"Node 112","children":[{"parent":"Node 112","data":"Node 1121","children":[]}]}]},{"parent":"Node 1","data":"Node 12","children":[{"parent":"Node 12","data":"Node 121","children":[{"parent":"Node 121","data":"Node 1211","children":[]}]},{"parent":"Node 12","data":"Node 122","children":[{"parent":"Node 122","data":"Node 1221","children":[]}]}]},{"parent":"Node 1","data":"Node 13","children":[{"parent":"Node 13","data":"Node 131","children":[{"parent":"Node 131","data":"Node 1311","children":[]}]},{"parent":"Node 13","data":"Node 132","children":[{"parent":"Node 132","data":"Node 1321","children":[]}]}]}]},{"parent":"ROOT","data":"Node 2","children":[{"parent":"Node 2","data":"Node 21","children":[{"parent":"Node 21","data":"Node 211","children":[{"parent":"Node 211","data":"Node 2111","children":[]}]},{"parent":"Node 21","data":"Node 212","children":[{"parent":"Node 212","data":"Node 2121","children":[]}]}]},{"parent":"Node 2","data":"Node 22","children":[{"parent":"Node 22","data":"Node 221","children":[{"parent":"Node 221","data":"Node 2211","children":[]}]},{"parent":"Node 22","data":"Node 222","children":[{"parent":"Node 222","data":"Node 2221","children":[]}]}]},{"parent":"Node 2","data":"Node 23","children":[{"parent":"Node 23","data":"Node 231","children":[{"parent":"Node 231","data":"Node 2311","children":[]}]},{"parent":"Node 23","data":"Node 232","children":[{"parent":"Node 232","data":"Node 2321","children":[]}]}]}]},{"parent":"ROOT","data":"Node 3","children":[{"parent":"Node 3","data":"Node 31","children":[{"parent":"Node 31","data":"Node 311","children":[{"parent":"Node 311","data":"Node 3111","children":[]}]},{"parent":"Node 31","data":"Node 312","children":[{"parent":"Node 312","data":"Node 3121","children":[]}]}]},{"parent":"Node 3","data":"Node 32","children":[{"parent":"Node 32","data":"Node 321","children":[{"parent":"Node 321","data":"Node 3211","children":[]}]},{"parent":"Node 32","data":"Node 322","children":[{"parent":"Node 322","data":"Node 3221","children":[]}]}]},{"parent":"Node 3","data":"Node 33","children":[{"parent":"Node 33","data":"Node 331","children":[{"parent":"Node 331","data":"Node 3311","children":[]}]},{"parent":"Node 33","data":"Node 332","children":[{"parent":"Node 332","data":"Node 3321","children":[]}]}]}]},{"parent":"ROOT","data":"Node 4","children":[{"parent":"Node 4","data":"Node 41","children":[{"parent":"Node 41","data":"Node 411","children":[{"parent":"Node 411","data":"Node 4111","children":[]}]},{"parent":"Node 41","data":"Node 412","children":[{"parent":"Node 412","data":"Node 4121","children":[]}]}]},{"parent":"Node 4","data":"Node 42","children":[{"parent":"Node 42","data":"Node 421","children":[{"parent":"Node 421","data":"Node 4211","children":[]}]},{"parent":"Node 42","data":"Node 422","children":[{"parent":"Node 422","data":"Node 4221","children":[]}]}]},{"parent":"Node 4","data":"Node 43","children":[{"parent":"Node 43","data":"Node 431","children":[{"parent":"Node 431","data":"Node 4311","children":[]}]},{"parent":"Node 43","data":"Node 432","children":[{"parent":"Node 432","data":"Node 4321","children":[]}]}]}]}]};






premLib.domManipulationLibrary.appendUlLiFromJsonToElementById(
	testObject.ids.divUlLiForParentChildRelation2, testObject.data.parentChildJson);


//==============================================

/* Set the style */ 
let styles = '\n h1 { color: green; font-weight: bold; }'; 
styles += '\n body { text-align: center }';
styles += '\n .'+testObject.ids.styleAddCheckingDiv+'_style'+' {border: thick solid #CC22FF;\
width: 600px;\
height: 600px;\
margin: 5px 5px 5px 5px;\
overflow:scroll;\
-webkit-overflow-scrolling: touch}'

premLib.styleLibrary.addStyle(styles);

premLib.domManipulationLibrary.appendChildToElementById(
	testObject.ids.myBody,
	"div",
	testObject.ids.styleAddCheckingDiv
);

premLib.styleLibrary.addClassToElementById(testObject.ids.styleAddCheckingDiv,
	testObject.ids.styleAddCheckingDiv+'_style');
premLib.domManipulationLibrary.createTextNodeElementById(testObject.ids.styleAddCheckingDiv,
	'Div having style from CSS');