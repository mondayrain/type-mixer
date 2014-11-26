/* --- GLOBALS --- */

var BACKGROUND_COLOUR = "rgb(112,128,144)";
var TRANSPARENCY = "0.3";

var PAIR_IS_CLICKED = false;
var LEFT_IS_TRANSPARENT = false;
var RIGHT_IS_TRANSPARENT = false;
var LEFT_TYPE = "";
var RIGHT_TYPE = "";

var TYPE_DICT = {"button-one":"ziggurat",
				 "button-two":"jenson",
				 "button-three":"bodoni",
				 "button-four":"knockout",
				 "button-five":"futura",
				 "button-six":"fette"};

var COLOUR_DICT = {"ziggurat":"rgb(246,146,30)",
				   "jenson":"rgb(198,177,152)",
				   "bodoni":"rgb(255,29,37)",
				   "knockout":"rgb(139,159,63)",
				   "futura":"rgb(105,219,230)",
				   "fette":"rgb(77,77,77)"};

var MIXED_COLOUR_DICT = {"futura_bodoni":"rgb(158,64,192)",
						 "knockout_ziggurat":"rgb(182,186,33)",
						 "fette_jenson":"rgb(117,76,36)"};


var IMAGES_FOLDER = "images/"


$(document).ready(function() {

	$("#left-type-img").height(330);
	$("#left-type-img").width(460);
	$("#right-type-img").height(330);
	$("#right-type-img").width(500);

	 /*------------------------*/
	/* -- HOVER AND CLICK  -- */
   /*------------------------*/
	$(".button").click(function()
	{

		var button = $(this).attr("id");

		/* NUMBER BUTTONS */	
		if (button in TYPE_DICT)
		{
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

		change_background();
		}

		/* PAIR BUTTON */
		else if (button == "pair-type")
		{
			if ((LEFT_TYPE != "") && (RIGHT_TYPE != ""))
			{
				prepare_paired_page();
				
				$("#main-page").fadeOut("slow", function()
				{
					$("#paired-page").fadeIn("slow");
				});
			}
		}

		/* BACK BUTTON */
		else
		{
			$("#paired-page").fadeOut("slow", function()
			{
				$("#main-page").fadeIn("slow");
			});
		}
	});


	$(".button").hover(function()
	{

		var button = $(this).attr("id");

		/* NUMBER BUTTONS */
		if (button in TYPE_DICT)
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
		}
		/* PAIR BUTTON */
		else if (button == "pair-type")
		{
			if ((LEFT_TYPE != "") && (RIGHT_TYPE != ""))
			{
				$("#pair-type").children("img").attr("src", IMAGES_FOLDER.concat("pair-type-hover.png"));
			}
		}

		/* BACK BUTTONS */
		else
		{
			$("#back-button").css("color", "white");
		}
	},

		function()
		{
			var button = $(this).attr("id");

			/* NUMBER BUTTONS */
			if (button in TYPE_DICT)
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
			}

			/* PAIR BUTTON */
			else if (button == "pair-type")
			{
				if ((LEFT_TYPE != "") && (RIGHT_TYPE != ""))
				{
					$("#pair-type").children("img").attr("src", IMAGES_FOLDER.concat("pair-type-reg.png"));
				}
			}

			/* BACK / FORWARD BUTTONS */
			else
			{
				$("#back-button").css("color", "silver");
			}
		});

	/* --- CHANGE BACKGROUND COLOUR --- */
	var change_background = function()
	{
		if ((LEFT_TYPE != "") && (RIGHT_TYPE != ""))
		{
			var possible_type = (LEFT_TYPE.concat("_")).concat(RIGHT_TYPE);
			if (possible_type in MIXED_COLOUR_DICT)
			{
				fade_colour("#wrapper", MIXED_COLOUR_DICT[possible_type]);
				return true;
			}

			var possible_type = (RIGHT_TYPE.concat("_")).concat(LEFT_TYPE);
			if (possible_type in MIXED_COLOUR_DICT)
			{
				fade_colour("#wrapper", MIXED_COLOUR_DICT[possible_type]);
				return true;
			}
		}

		else if (LEFT_TYPE)
		{
			fade_colour("#wrapper", COLOUR_DICT[LEFT_TYPE]);
		}

		else if (RIGHT_TYPE)
		{
			fade_colour("#wrapper", COLOUR_DICT[RIGHT_TYPE]);			
		}

		else
		{
			fade_colour("#wrapper", BACKGROUND_COLOUR);
		}
	}

	var fade_colour = function(element, colour)
	{
		$(element).animate(
		{
			backgroundColor: colour
		}, 700); //Change this number to change # of milliseconds it takes to fade
	}
	

	/* --- CHANGE TYPE --- */
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

	var prepare_paired_page = function()
	{
		$("#paired-type-one").html(LEFT_TYPE);
		$("#paired-type-two").html(RIGHT_TYPE);
	}
});