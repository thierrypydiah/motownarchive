
$('.button').click(function(){
	//Mouse enter

	$('.popup').addClass('active');

	$idnumber = $(this).attr('data-id');
	$album = data[$idnumber];

	$artist = $album.artist;
	$('.artist').text($artist);

	$name = $album.name;
	$('.name').text($name);

	$released = $album.released;
	$('.released').text($released);

	$genre = $album.genre;
	$('.genre').text($genre);

	$itunes = $album.itunes;
	$('.itunes').attr('href',$itunes);

	$image = $album.image;
	$('.image').attr('src',$image);
});