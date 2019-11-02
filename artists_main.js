
$('.button').click(function(){
	//Mouse enter

	$('.popup').addClass('active');

	$idnumber = $(this).attr('data-id');
	$artist = data[$idnumber];

	$description = $artist.description;
	$('.description').text($description);

	$name = $artist.name;
	$('.name').text($name);

	$born = $artist.born;
	$('.born').text($born);

	$died = $artist.died;
	$('.died').text($died);

	$wiki = $artist.wiki;
	$('.wiki').attr('href',$wiki);

	$image = $artist.image;
	$('.image').attr('src',$image);

});