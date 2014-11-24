var LEFT_TYPE = "";
var RIGHT_TYPE = "";

var TYPE_DICT = {"button-one":"eames",
				 "button-two":"jenson",
				 "button-three":"bodoni",
				 "button-four":"knockout",
				 "button-five":"futura",
				 "button-six":"fette"};

var TRANSPARENCY = "0.3";
var LEFT_IS_TRANSPARENT = false;
var RIGHT_IS_TRANSPARENT = false;

var IMAGES_FOLDER = "images/"

$(document).ready(function() {

	$("#left-type-img").height(330);
	$("#left-type-img").width(460);
	$("#right-type-img").height(330);
	$("#right-type-img").width(500);

	$(".button").click(function()
	{
		var button = $(this).attr("id");
		var typename = TYPE_DICT[button]
		var isUsed = change_type(typename);

		if (isUsed)
		{
			var id = $(this).children("img").attr("alt");
			var hoverurl = id.concat('-hover.png');
			$(this).children("img").attr("src", IMAGES_FOLDER.concat(hoverurl));
		}
		else
		{
			var id = $(this).children("img").attr("alt");
			var regurl = id.concat('-reg.png');
			$(this).children("img").attr("src", IMAGES_FOLDER.concat(regurl));
		}
	});

	$(".button").hover(function()
	{
		if ((LEFT_TYPE == "") || (RIGHT_TYPE == ""))
		{
			// LIGHT UP BUTTON
			var id = $(this).children("img").attr("alt");
			if(!is_type_used(TYPE_DICT[id]))
			{
				var hoverurl = id.concat('-hover.png');
				$(this).children("img").attr("src", IMAGES_FOLDER.concat(hoverurl));
			}

			// SHOW TRANSPARENCY
			var typename = TYPE_DICT[id];
			if(!is_type_used(typename))
			{
				if (LEFT_TYPE == "")
				{
					document.getElementById("left-type-img").style.opacity = TRANSPARENCY;
					var source = typename.concat("_left.png");
					$("#left-type-img").attr("src", IMAGES_FOLDER.concat(source));
					LEFT_IS_TRANSPARENT = true;
				}
				else
				{
					document.getElementById("right-type-img").style.opacity = TRANSPARENCY;
					var source = typename.concat("_right.png");
					$("#right-type-img").attr("src", IMAGES_FOLDER.concat(source));
					RIGHT_IS_TRANSPARENT = true;
				}
			}
		}
	},
	function()
	{
		if ((LEFT_TYPE == "") || (RIGHT_TYPE == ""))
		{
			// UNLIGHT BUTTON
			var id = $(this).children("img").attr("alt");
			if(!is_type_used(TYPE_DICT[id]))
			{
				var regurl = id.concat('-reg.png');
				$(this).children("img").attr("src", IMAGES_FOLDER.concat(regurl));
			}

			// UNSHOW TRANSPARENCY
			var typename = TYPE_DICT[id];
			if ((LEFT_TYPE == "") && LEFT_IS_TRANSPARENT)
			{
				$("#left-type-img").attr("src", "images/left_transparent.png");	
				LEFT_IS_TRANSPARENT = false;	
			}
			if ((RIGHT_TYPE == "") && RIGHT_IS_TRANSPARENT)
			{
				$("#right-type-img").attr("src", "images/left_transparent.png");
				RIGHT_IS_TRANSPARENT = false;	
			}
		}
	});

	/* TYPE HOVER HELPERS*/
	/*
	var hover_type = function(typename)
	{
		if ((LEFT_TYPE != "") && (RIGHT_TYPE != ""))
		{
			return false;
		}
		else if (LEFT_TYPE)
		{
			change_right_type(typename, false);
			return true;
		}
		else
		{
			change_left_type(typename, false);
			return true;
		}
	}
	*/

	/* TYPE CHANGE HELPERS*/
	var change_type = function(typename)
	{
		// If the type is used, just remove it
		if (is_type_used(typename))
		{
			remove_type(typename);
			return false;
		}

		else
		{
			// If both spaces are taken, don't do anything
			if ((LEFT_TYPE != "") && (RIGHT_TYPE != ""))
			{
				return false;
			}
			else if (LEFT_TYPE)
			{
				change_right_type(typename);
				return true;
			}
			else
			{
				change_left_type(typename);
				return true;
			}
		}
	}

	var change_left_type = function(typename)
	{
		var new_src = typename.concat("_left.png");
		$("#left-type-img").attr("src", IMAGES_FOLDER.concat(new_src));
		document.getElementById("left-type-img").style.opacity = "1.0";
		LEFT_TYPE = typename;
	}

	var change_right_type = function(typename)
	{
		var new_src = typename.concat("_right.png");
		$("#right-type-img").attr("src", IMAGES_FOLDER.concat(new_src));
		document.getElementById("right-type-img").style.opacity = "1.0";
		RIGHT_TYPE = typename;
	}

	var remove_type = function(typename)
	{
		if (typename == LEFT_TYPE)
		{
			$("#left-type-img").attr("src", "images/left_transparent.png");
			LEFT_TYPE = "";
		}
		else
		{
			$("#right-type-img").attr("src", "images/left_transparent.png");
			RIGHT_TYPE = "";

		}
	}

	var is_type_used = function(typename)
	{
		if ((typename == LEFT_TYPE) || (typename == RIGHT_TYPE))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
});