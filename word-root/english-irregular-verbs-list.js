// Code goes here

$('#run-premendra').click( function() {
    console.log("I am working");
     var table = $('#english-irregular-verbs-list').tableToJSON(
        // {ignoreColumns: [0]}
     );
     //alert(table.length);

     console.log("================================================");
	console.log(JSON.stringify(table));
	//alert(JSON.stringify(table));

	console.log("================================================");


     //alert(JSON.stringify(table));  
});