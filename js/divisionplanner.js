$.getJSON("json/weapons.json", function (data) {
	$.each(data.weapons.assault, function (i, v) {
		$('#mainWeaponList').append('<span class="weapon-item" id="' + i + '">' + v.name + '</span>');
	});
	$.each(data.weapons.sidearms, function (i, v) {
		$('#sideWeaponList').append('<span class="weapon-item" id="' + i + '">' + v.name + '</span>');
	});
});

$('#weapons').click(function(e) {
	if($(e.target).attr('id') === 'primary' || $(e.target).attr('id') === 'secondary') {
		$('#sideWeaponList').hide();
		$('#mainWeaponList').show();
	}
	else {
		$('#mainWeaponList').hide();
		$('#sideWeaponList').show();
	}
});

$(".weapon-item").click(function() {
  console.log($(this).text());
});
