

var tableWindow = Titanium.UI.createWindow({  
    title:"homeKeep",
    backgroundColor:"#FFFFFF"
    
});

var data = [
	{title:"Electrical Contractor",val:"Electrician"},
	{title:"Landscaper",val:"Lawn Care"},
	{title:"Painter",val:"Phoenix,AZ"},
	{title:"Pools and Spas",val:"Pool Contractor"},
	{title:"Interior Designer",val:"General Remodel"},
];

var rowData = []; 
for(var i = 0; i < data.length; i++){
	//create row
	var row = Titanium.UI.createTableViewRow({
		title:data[i].title,
		title: data[i].val,						
		searchFilter:data[i].title		
	});
	
	
	rowData.push(row);
}

var searchBar = Titanium.UI.createSearchBar({
	showCancel:true,
	top:160,
	height:40,
	left:0,
	hintText:"Search"
});

var tableView = Titanium.UI.createTableView({
	data:rowData,
	search:searchBar,//search bar object
	filterAttribute:"searchFilter"
});



tableWindow.add(tableView);


