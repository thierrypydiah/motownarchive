
$('.button').click(function(){
	//Mouse enter

	$('.popup').addClass('active');

	$idnumber = $(this).attr('data-id');
	$song = data[$idnumber];

	$artist = $song.artist;
	$('.artist').text($artist);

	$name = $song.name;
	$('.name').text($name);

	$released = $song.released;
	$('.released').text($released);

	$genre = $song.genre;
	$('.genre').text($genre);

	$youtube = $song.youtube;
	$('.youtube').attr('src',$youtube);

});