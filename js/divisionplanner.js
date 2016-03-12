$(document).ready(function() {
	$.getJSON("json/weapons.json", function(data) 
	{
		for(var i = 0; i < data.weapons.length; i++)
		{
			if(i === 0)
			{
				$('#mainWeaponList').html('<span class="weapon-item" id="' + data.weapons[i].id + '">' + data.weapons[i].name + '</span>');
			}
			else
			{
				$('#mainWeaponList').append('<span class="weapon-item" id="' + data.weapons[i].id + '">' + data.weapons[i].name + '</span>');
			}
		}
	});

	$('#weapons').click(function(e) {
		console.log($(e.target).attr('id'));
		if($(e.target).attr('id') === 'primary' || $(e.target).attr('id') === 'secondary')
		{
			$('#mainWeaponList').show();
		}
		else
		{
			$('#sideWeaponList').show();
		}
	});

	$('.weapon-item').click(function(e) {
		console.log("test");
	});
});