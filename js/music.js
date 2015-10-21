// Initialize Parse app
Parse.initialize("1mJYiGYKXcsEZLUb2AbVl543RNPQ2UAPQjT5SIA3", "C3kW32e8GStc3F8H6nAK026HpxV6pyqGViPQHU6i");

// Create a new sub-class of the Parse.Object, with name "Music"
// var Music = Parse.Object.extend('Music')

// // Create a new instance of your Music class

// var song = new Music()


// // Set a property 'band' equal to a band name
// song.set('band', 'band-name')

// // Set a property 'website' equal to the band's website
// song.set('website', 'band\'s website')
    
// // Set a property 'song' equal to a song
// song.set('song', 'song')

// // Save your instance of your song -- and go see it on parse.com!
// song.save()

// Click event when form is submitted
$('form').submit(function() {

	// Create a new instance of your Music class 
	var Music = Parse.Object.extend('Music')

	// For each input element, set a property of your new instance equal to the input's value
	var band = $('#band').val();
	music.set('band', band);
	
	// After setting each property, save your new instance back to your database

	//loop version
	$(This).find('input').each(function()) {
		music.set($(This).attr('id'), $(this).val());
	}
		$(this).val('');
	song.save(null, {
		success:getData

	})
	return false
})



// Write a function to get data
var getData = function() {
	
console.log('getData')
	// Set up a new query for our Music class
var query = new Parse.Query(Music);

	// Set a parameter for your query -- where the website property isn't missing
query.exists('website','')

	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
var results
	query.find({
		// success:function(response) {
		// 	buildList(response);
		// }
		success:buildList
	})
}

// A function to build your list
var buildList = function(data) {
	// Empty out your unordered list
	console.log('buildList');
	$('ol').Empty();
	// Loop through your data, and pass each element to the addItem function
	data.forEach(function(d)) ;
		addItem(d);
	}
}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	console.long('addItem')
	// Get parameters (website, band, song) from the data item passed to the function
	var band = item.get('band')
	var website = item.get('website')
	var song = item.get('song') 
	
	// Append li that includes text from the data item
	
	$('ol').Append("<li>" + band + "</li>")
	$('ol').Append("<li>" + website + "</li>")
	$('ol').Append("<li>" + song + "</li>")
	
	// Time pending, create a button that removes the data item on click

	// Get parameters (website, band, song) from the data item passed to the function
	var band = item.get('band')
	var website = item.get('website')
	var song = item.get('song') 
	// Append li that includes text from the data item
	var li = $('ol').Append("<li>" + band + "</li>").Append(li)
	var button = $('<button class="btn-')
	button.on('click', function) {
		item.destory()({
			success:function() {
			getData();
}
		})

	})
		li.Append(button)
	$('ol').Append(li)
	// Time pending, create a button that removes the data item on click
	
}

// Call your getData function when the page loads
getData();
