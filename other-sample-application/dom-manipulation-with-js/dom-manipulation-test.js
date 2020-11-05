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
		divLoadExternalWebPage: "div-load-external-web-page",
		divLoadExternalWebPage_object:"div-load-external-web-page-object",

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
testObject.data.parentChildJson={"parent":"null","data":"ROOT","children":[{"parent":"ROOT","data":"Node 1","children":[{"parent":"Node 1","data":"Node 11","children":[{"parent":"Node 11","data":"Node 111","children":[]}]},{"parent":"Node 1","data":"Node 12","children":[{"parent":"Node 12","data":"Node 121","children":[]}]}]},{"parent":"ROOT","data":"Node 2","children":[{"parent":"Node 2","data":"Node 21","children":[{"parent":"Node 21","data":"Node 211","children":[]}]},{"parent":"Node 2","data":"Node 22","children":[{"parent":"Node 22","data":"Node 221","children":[]}]}]},{"parent":"ROOT","data":"Node 3","children":[{"parent":"Node 3","data":"Node 31","children":[{"parent":"Node 31","data":"Node 311","children":[]}]},{"parent":"Node 3","data":"Node 32","children":[{"parent":"Node 32","data":"Node 321","children":[]}]}]}]};





let UlLiFromJsonStyles='/* Remove default bullets */ \
ul, .myUL { list-style-type: none; } \
/* Remove margins and padding from the parent ul */ \
.myUL { margin: 0; padding: 0; } \
/* Style the caret/arrow */ \
.caret { cursor: pointer; -webkit-user-select: none; /* Safari 3.1+ */ \
-moz-user-select: "none"; /* Firefox 2+ */ \
-ms-user-select: none; /* IE 10+ */ \
user-select: none; /* Prevent text selection */ } \
/* Create the caret/arrow with a unicode, and style it */ \
.caret::before { content: "\\25B6"; color: red; display: inline-block; margin-right: 6px; }\
/* Rotate the caret/arrow icon when clicked on (using JavaScript) */ \
.caret-down::before { transform: rotate(90deg); } \
/* Hide the nested list */ \
.nested { display: none; } \
/* Show the nested list when the user clicks on the caret/arrow (with JavaScript) */ \
.active { display: block; }';

premLib.styleLibrary.addStyle(UlLiFromJsonStyles);

premLib.domManipulationLibrary.appendUlLiFromJsonToElementById(
	testObject.ids.divUlLiForParentChildRelation2, testObject.data.parentChildJson);


//==============================================

/* Set the style */ 
let styles = '\n h1 { color: green; font-weight: bold; }'; 
styles += '\n body { text-align: center }';
//premLib.styleLibrary.addStyle(styles);
styles = '\n .'+testObject.ids.styleAddCheckingDiv+'_style'+' {border: thick solid #CC22FF;\
	width: 600px;\
	height: 600px;\
	margin: 5px 5px 5px 5px;\
	overflow:scroll;\
	-webkit-overflow-scrolling: touch}';

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

//================================================================================

premLib.domManipulationLibrary.appendChildToElementById(
	testObject.ids.myBody,
	"div",
	testObject.ids.divLoadExternalWebPage
);
premLib.styleLibrary.addStyleArrayToElementById(testObject.ids.divLoadExternalWebPage, {
	"border": "thick solid #CC22FF",
	"width": "600" + "px",
	"height": "600" + "px",
	"margin": "5px 5px 5px 5px",
	"overflow":"scroll",
    "-webkit-overflow-scrolling": "touch"
});

//let divLoadExternalWebPage_object=testObject.ids.divLoadExternalWebPage+'_object';
premLib.domManipulationLibrary.appendChildToElementById(testObject.ids.divLoadExternalWebPage,
	 'object',testObject.ids.divLoadExternalWebPage_object );
premLib.domManipulationLibrary.setAttributeToElementById(testObject.ids.divLoadExternalWebPage_object,
	'type', 'text/html');
premLib.domManipulationLibrary.setAttributeToElementById(testObject.ids.divLoadExternalWebPage_object,
		'data', 'http://127.0.0.1:8080/my-pages/other-sample-application/google-chart/pie-chart.html');
premLib.domManipulationLibrary.setAttributeToElementById(testObject.ids.divLoadExternalWebPage_object,
			'type', 'text/html');
premLib.styleLibrary.addStyleArrayToElementById(testObject.ids.divLoadExternalWebPage_object, {
	"border": "5px ridge blue",
	"width": "800" + "px",
	"height": "600" + "px",
	"margin": "5px 5px 5px 5px",
	"overflow":"auto"	
});
// {/* <object type="text/html" data="http://validator.w3.org/" 
// width="800px" height="600px" style="overflow:auto;border:5px ridge blue">
//     </object> */}

//=======================================================================

