

Ti.include('signUp.js');
Ti.include('optionScreen.js');
Ti.include('table.js');

	win1 = Titanium.UI.createWindow({  
    backgroundColor:'#B2AD9B'
});
	win2 = Titanium.UI.createWindow({ 
   			backgroundColor:'#B2AD9B'
});
	
	optionScreenWindow = Ti.UI.createWindow({
			backgroundColor:'#B2AD9B'
});
	//all my variables
	var win1,win2,homeImage,label,
	firstName,fieldChecker,textField,view,viewWin2,textFieldPass,loginButton,newRegistrar,backButtonWin2,buttonOptionScrn,
	backArrow,searchBar,optionScreenWindow,
	
	view = Ti.UI.createView();
	
	viewWin2 = Ti.UI.createView();
	


 		textField = Ti.UI.createTextField({
 		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
 		keyboardType: Titanium.UI.keyboard_Default,
		color: '#000',
		hintText: 'User Name',
		height: 40,
		top: 310,
		width: 250,
		center: 'auto'
	
		
});
	
		textFieldPass = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
 		keyboardType: Titanium.UI.keyboard_Default,
		color: '#000',
		hintText: ' Enter Password',
		height: 40,
		top: 360,
		width: 250,
		center: 'auto',
		passwordMask:true
		
});


	
	view.add(textField, textFieldPass);
	viewWin2.add();
	
	
	loginButton = Ti.UI.createButton({
		backgroundImage: 'image/login_btn_up.png',
		backgroundSelectedImage:'image/login_btn_down.png',
		title: 'LOGIN',
		top: 405,
		height: 40,
		left: 59,
		width: 125
		
});	
	//validate password and username
		loginButton.addEventListener('click', function(e){
			if (textField.value === 'brandee' && textFieldPass.value == "password"){
 			tableWindow.open();
 		} else {
 			alert('Please Enter Valid Credentials');
 		}
			
});
 
	
		newRegistrar = Ti.UI.createButton({
		color: '#0985b7',
		title: ' | SIGN UP',
		top: 406,
		width: 125,
		height: 40,
		left: 160
		
});	
	
		newRegistrar.addEventListener('click', function(e){
			win2.open();
});
		
		guestButton = Ti.UI.createButton({
		backgroundImage: 'image/login_btn_up.png',
		backgroundSelectedImage:'image/login_btn_down.png',
		title: 'Guest Login',
		top: 605,
		height: 60,
		center: 'auto',
		//right:10,
		width: 350
		
});	

			guestButton.addEventListener('click', function(e){
			optionScreenWindow.open();
});
		backArrow = Ti.UI.createImageView({
			image: 'image/Back_Arrow_Black_V1.png',
			top: 30,
			left:10,
			height: 25,
			width: 25
			
});
		
		backButtonWin2 = Ti.UI.createButton({
			title: "Back",
			top:28,
			left: 40,
});
		
		backButtonWin2.addEventListener('click', function(e){
			win2.close();
			
});
		
	//image with logo 
	homeImage  = Ti.UI.createImageView({
		image: 'image/home_KeepV1.png',
		top: 90,
		center: 'auto'
});
	

	firstName = Ti.UI.createTextField({
		text: "first name here",
		top: 400
});

win1.add(homeImage, 
	 firstName, view);
win1.add(textFieldPass,loginButton,newRegistrar,guestButton);
win1.open();
win2.add(viewWin2,backButtonWin2,backArrow,doneButton);
win2.add(loginImage,loginTextUsername,loginTextUserEmail,loginTextUserCity,loginTextUserZipCode,loginTextFieldPass);
optionView.add(backArrow2,backButtonWin3);

optionScreenWindow.add(optionView,backArrow2,backButtonWin3,scrollView,picker,results,optionHomeImage);




