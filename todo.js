const submit = $('#submit');
const ul = $('ul');
const input = $("input[type='text']");
const trash = $('.fa-trash-alt');

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

// creating new lis

input.keypress(function(e) {
	if (e.which === 13) {
		e.preventDefault();
		const todoText = $(this).val();
		ul.append(`<li><span><i class="far fa-trash-alt"></i></span> ${todoText}</li>`);
		itemsArray.push(todoText);
		localStorage.setItem('items', JSON.stringify(itemsArray));
		$(this).val('');
	}
});

data.forEach((todoText) => {
	ul.append(`<li><span><i class="far fa-trash-alt"></i></span> ${todoText}</li>`);
});

// click on trash to delete todo
ul.on('click', 'span', function(e) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	e.stopPropagation();
});

for (let i = 0; i < itemsArray.length; i++) {
	let index = itemsArray[i];
	console.log(index);
	ul.on('click', 'span', function(e) {
		index = $(this);
		$(this).parent().fadeOut(500, function() {
			localStorage.removeItem(index);
			itemsArray.splice(index);
		});
		e.stopPropagation();
	});
}

$('#plus').click(function() {
	input.fadeToggle(500);
});


