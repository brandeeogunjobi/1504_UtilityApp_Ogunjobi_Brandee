 	
 	
 var loginImage,loginTextUsername,loginTextUserEmail,loginTextUserCity,loginTextUserState,loginTextUserZipCode,			
 			
 		loginImage  = Ti.UI.createImageView({
		image: 'image/home_KeepV1.png',
		top: 70,
		center: 'auto'
});
 		
 		loginTextUsername = Ti.UI.createTextField({
 		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
 		keyboardType: Titanium.UI.keyboard_Default,
		color: '#000',
		hintText: 'Enter Name',
		height: 40,
		top: 275,
		width: 250,
		center: 'auto'
		
		
});

 		loginTextUserEmail = Ti.UI.createTextField({
 		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
 		keyboardType: Titanium.UI.keyboard_URL,
		color: '#000',
		hintText: 'Enter Email',
		height: 40,
		top: 320,
		width: 250,
		center: 'auto'
		
		
});

 		loginTextUserCity = Ti.UI.createTextField({
 		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		keyboardType: Titanium.UI.keyboard_Decimal,
		color: '#000',
		hintText: 'Enter Phone Number',
		height: 40,
		top: 365,
		width: 250,
		center: 'auto'
				
});

 		loginTextUserZipCode = Ti.UI.createTextField({
 		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
 		keyboardType: Titanium.UI.keyboard_Decimal,
		color: 'black',
		hintText: 'Enter Zip Code',
		height: 40,
		top: 410,
		width: 250,
		center: 'auto'
});
	
		loginTextFieldPass = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		keyboardType: Titanium.UI.keyboard_Default,
		color: 'black',
		hintText: ' Enter Password',
		height: 40,
		top: 455,
		width: 250,
		center: 'auto',
		passwordMask:true
		
		
});

		doneButton = Ti.UI.createButton({
			//borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			backgroundImage: 'image/login_btn_up.png',
			backgroundSelectedImage:'image/login_btn_down.png',
			title: "SUBMIT",
			top: 500,
			height: 40,
			width: 120,
			left: 190,
			center: 'auto'

		});
		
				doneButton.addEventListener('click', function(e){
			win2.close();
});


