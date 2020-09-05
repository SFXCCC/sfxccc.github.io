var $url = '"' + $(location).attr('href') + '"';
$('.404_Error_Message').each(function () {
    var text = $(this).text();
    $(this).text(text.replace('{page}', $url));
});