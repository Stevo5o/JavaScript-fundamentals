/**
 * script.js Discription
 * @ Stephen O'Connor, 08-Feb-2015
 *
 * Dependencies: eventUtiltity.js
 *
 */

// immediately invoked anonymous function
(function() {

	var form = document.getElementById("theForm");
		button = form.myButton,
		textbox = form.myTextbox,
		textarea = form.myTextArea,
		select = form.dayOfWeek;

	eventUtility.addEvent(form, "submit", function(evt) {
		eventUtility.preventDefault(evt);
	});

	eventUtility.addEvent(button, "click", function(evt) {
		var target = eventUtility.getTarget(evt);

		// // traditional way
		// var index = select.selectedIndex; // 3
		// var option = select.options[index];

		// alert(option.value);

		// new way
		var option = select.selectedOptions[0];
		alert(option.value);

		select.remove(3);

		var wedOption = new Option("Wednesday", 3);

		select.add(wedOption, select.options[3]);



		// textarea.disabled = true;

		// textarea.select();

		// textarea.value = "asdf";

		// if(textbox.value === "") {
		// 	alert("please input data in box");
		// 	textbox.focus();
		// }

		// if(textarea.value === ""){
		// 	alert("please input data in larger box")
		// }

		// target.disabled = true;
		// target.disabled = false;
		// alert(target.type);
		// alert(target.value);
		// alert("you clicked me!");
	});

}());