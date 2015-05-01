	



	var optionView = Ti.UI.createView();
	
	var scrollView = Ti.UI.createScrollView({
  			contentWidth: 'auto',
  			contentHeight: 'auto',
  			showVerticalScrollIndicator: true,
  			showHorizontalScrollIndicator: true,
 			height: '80%',
  			width: '80%'
});

	var optionHomeImage  = Ti.UI.createImageView({
		image: 'image/home_KeepV1.png',
		top: 120,
		center: 'auto'
});

	
	var backArrow2 = Ti.UI.createImageView({
			image: 'image/Back_Arrow_Black_V1.png',
			top: 30,
			left:10,
			height: 25,
			width: 25
			
});
		
	var backButtonWin3 = Ti.UI.createButton({
			title: "Back",
			top:28,
			left: 40
});
		
		backButtonWin3.addEventListener('click', function(e){
			optionScreenWindow.close();
			
});


var homeKeepData = [
	{title:"Electrical Contractor",val:"Contractor"},
	{title:"Landscaper",val:"Contractor"},
	{title:"Painter",val:"Contractor"},
	{title:"Designer",val:"Contractor"},
	{title:"General Contractor",val:"Contractor"}
];

var column = Titanium.UI.createPickerColumn({width:200});
for(var i=0; i < homeKeepData.length; i++){
	column.addRow(Titanium.UI.createPickerRow({title:homeKeepData[i].title, val:homeKeepData[i].val}));
}



var picker = Titanium.UI.createPicker({
	selectionIndicator:true,
	type : Titanium.UI.PICKER_TYPE_PLAIN,
	top: 350,
	height: 200,
	columns: [column] 
});

var results = Titanium.UI.createLabel({
	text:'',
	top:24,
	width:'auto',
	height:'25%',
	textAlign:'center',
	color:'#000'
});

picker.addEventListener("change", function(e){
	if(e.columnIndex == 0){
		if(e.row.val == "Contractor"){
			results.text="Thank You For Choosing homeKeep!";
		}
	}else{
		results.text="Choose Item ";
	}
});
	 scrollView.add(optionView);


	//optionScreenWindow.open();	


