(function(){

	myMain = document.createElement('main'); 
	myContainer = document.createElement('div'); 

	myInput1 = document.createElement('input');
	myMain.append(myInput1);
	myInput1.setAttribute('type', 'radio');
	myInput1.setAttribute('id', 'radio-front');
	myInput1.setAttribute('name', 'select-face');
	myInput1.checked = true;

	myInput2 = document.createElement('input');
	myMain.append(myInput2);
	myInput2.setAttribute('type', 'radio');
	myInput2.setAttribute('id', 'radio-bottom');
	myInput2.setAttribute('name', 'select-face');
	// 21

	myInput3 = document.createElement('input');
	myMain.append(myInput3);
	myInput3.setAttribute('type', 'radio');
	myInput3.setAttribute('id', 'radio-right');
	myInput3.setAttribute('name', 'select-face');
	// 41

	myInput4 = document.createElement('input');
	myMain.append(myInput4);
	myInput4.setAttribute('type', 'radio');
	myInput4.setAttribute('id', 'radio-top');
	myInput4.setAttribute('name', 'select-face');
	// 61

	myInput5 = document.createElement('input');
	myMain.append(myInput5);
	myInput5.setAttribute('type', 'radio');
	myInput5.setAttribute('id', 'radio-back');
	myInput5.setAttribute('name', 'select-face');
	// 81

	myInput6 = document.createElement('input');
	myMain.append(myInput6);
	myInput6.setAttribute('type', 'radio');
	myInput6.setAttribute('id', 'radio-left');
	myInput6.setAttribute('name', 'select-face');

	
	document.body.append(myMain);
	myMain.append(myContainer);

	myContainer.setAttribute('class', 'container');

	var first = json.face1,
		second = json.face2,
		third = json.face3,
		forth = json.face4,
		five = json.face5,
		six = json.face6;

	var bigDiv1 = document.createElement('div'),
		bigDiv2 = document.createElement('div'),
		bigDiv3 = document.createElement('div'),
		bigDiv4 = document.createElement('div'),
		bigDiv5 = document.createElement('div'),
		bigDiv6 = document.createElement('div');

		myContainer.append(bigDiv1);
		myContainer.append(bigDiv2);
		myContainer.append(bigDiv3);
		myContainer.append(bigDiv4);
		myContainer.append(bigDiv5);
		myContainer.append(bigDiv6);

		bigDiv1.setAttribute('class', 'front');
		bigDiv2.setAttribute('class', 'left');
		bigDiv3.setAttribute('class', 'right');
		bigDiv4.setAttribute('class', 'back');
		bigDiv5.setAttribute('class', 'top');
		bigDiv6.setAttribute('class', 'bottom');

	for(var m in first) {

		var outside = document.createElement('div');
		bigDiv1.append(outside);

		texts = first[m].text;

		for(var n in texts) {
			var inner = document.createElement('p');
			outside.append(inner);
			inner.textContent = texts[n].content;
			inner.setAttribute('class', texts[n].class);
		}
	}
	
	for(var m in second) {

		var outside = document.createElement('div');
		bigDiv2.append(outside);

		texts = second[m].text;

		for(var n in texts) {
			var inner = document.createElement('p');
			outside.append(inner);
			inner.textContent = texts[n].content;
			inner.setAttribute('class', texts[n].class);
		}
	}	

	for(var m in third) {

		var outside = document.createElement('div');
		bigDiv3.append(outside);

		texts = third[m].text;

		for(var n in texts) {
			var inner = document.createElement('p');
			outside.append(inner);
			inner.textContent = texts[n].content;
			inner.setAttribute('class', texts[n].class);
		}
	}

	for(var m in forth) {

		var outside = document.createElement('div');
		bigDiv4.append(outside);

		texts = forth[m].text;

		for(var n in texts) {
			var inner = document.createElement('p');
			outside.append(inner);
			inner.textContent = texts[n].content;
			inner.setAttribute('class', texts[n].class);
		}
	}
	
	for(var m in five) {

		var outside = document.createElement('div');
		bigDiv5.append(outside);

		texts = five[m].text;

		for(var n in texts) {
			var inner = document.createElement('p');
			outside.append(inner);
			inner.textContent = texts[n].content;
			inner.setAttribute('class', texts[n].class);
		}
	}
		
	for(var m in six) {

		var outside = document.createElement('div');
		bigDiv6.append(outside);

		texts = six[m].text;

		for(var n in texts) {
			var inner = document.createElement('p');
			outside.append(inner);
			inner.textContent = texts[n].content;
			inner.setAttribute('class', texts[n].class);
		}
	}

})();



