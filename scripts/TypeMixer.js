	 /*------------------------*/
	/* ----- CONSTANTS  ----- */
   /*------------------------*/

var BACKGROUND_COLOUR = "rgb(59,59,60)"
var PAIRED_PAGE_BKG_COLOR = "rgb(226,227,228)"
var TRANSPARENCY = "0.3"
var LOOP_VOLUME = 50

var NUMBER_OF_TYPEFACES = 6
var LEFT_IS_TRANSPARENT = false
var RIGHT_IS_TRANSPARENT = false
var LEFT_TYPE = ""
var RIGHT_TYPE = ""

var TYPEFACE_LIST = ["futura", "jenson", "ziggurat", "bodoni",
				 "knockout", "fette"]

var TYPEFACE_DICT = {"button-one":"futura",
				 "button-two":"jenson",
				 "button-three":"ziggurat",
				 "button-four":"bodoni",
				 "button-five":"knockout",
				 "button-six":"fette"}

var COLOUR_DICT = {"futura":"rgb(105,219,230)",
				   "jenson":"rgb(197,184,158)",
				   "ziggurat":"rgb(250,181,0)",
				   "bodoni":"rgb(240,83,74)",
				   "knockout":"rgb(139,159,63)",
				   "fette":"rgb(77,77,77)"}

var MIXED_COLOUR_DICT = {"futura_bodoni":"rgb(94,55,107)",
						 "futura_knockout":"rgb(124,194,146)",
						 "futura_ziggurat":"rgb(115,153,63)",
						 "futura_fette":"rgb(43,64,133)",
						 "futura_jenson":"rgb(119,205,226)",
						 "bodoni_ziggurat":"rgb(243,111,37)",
						 "bodoni_fette":"rgb(119,15,46)",
						 "bodoni_jenson":"rgb(240,154,145)",
						 "knockout_ziggurat":"rgb(255,194,14)",
						 "knockout_bodoni":"rgb(123,78,28)",
						 "knockout_fette":"rgb(69,85,24)",
						 "knockout_jenson":"rgb(168,182,105)",
						 "ziggurat_fette":"rgb(167,111,12)",
						 "ziggurat_jenson":"rgb(226,175,84)",
						 "fette_jenson":"rgb(202,183,173)"
						}

var CREATOR_DICT =
{
	"futura":"Paul Renner, Germany, 1927",
	"bodoni":"Giambattista Bodoni, Italy, 1798",
	"knockout":"Hoefler & Frere Jones, United States, 1994",
	"ziggurat":"Hoefler & Frere Jones, United States, 2000",
	"jenson":"Nicolas Jenson, Italy, 1470",
	"fette":"Johann Christian Bauer, Germany, 1850"
}

var TYPE_DICT = 
{
	"futura":"Geometric Sans Serif",
	"bodoni":"Didone Modern",
	"knockout":"Sans Serif",
	"ziggurat":"Slab Serif",
	"jenson":"Oldstyle Serif",
	"fette":"Fraktur Blackletter"
}

var BLURB_DICT = 
{
	"futura":"Futura is a geometric sans designed in 1927 by Paul Renner. It is based on geometric shapes that became representative of visuals of the Bauhaus design style of 1919–33. Futura has an appearance of efficiency and forwardness, and avoids all that is decorative. It is characterized by its sharpness, geometry, and utilitarian look.",
	"bodoni":"Bodoni is a modern typeface made during the neoclassical period. It was designed originally for the upper class only, touted to only be for the educated. Therefore, it has a connotation of class, often appearing nowadays in high fashion magazines, most commonly seen on Vogue.",
	"knockout":"Knockout is derived out of typefaces found in advertisement in the late 1800’s in Britain. It was also commonly seen in newspaper headings and billboards. Before then, typefaces were mostly made for reading at a small size. Now, advertisers needed something attention catching and loud.",
	"ziggurat":"Ziggurat was derived out of advertisement in the late 1800’s in Britain, slapped on every surface from billboards to posters with the intention of catching the attention of consumers. Ziggurat’s heavy-set weight and chunky character also references the typefaces used in old country-style posters.",
	"jenson":"Jenson by was made in Venice, and is an old style typeface that is reminiscent of humanist calligraphy. This is because it was directly influenced to its immediate past, when people didn’t print - scribes just hand wrote calligraphy. Old style typefaces are most often used in bibles and literature.",
	"fette":"Fette Fraktur was cut by German Punchcutter Johann Christian Bauer. It was inspired by Fraktur blackletter calligraphy that first appeared in the 15th century when Holy Roman Emperor Maximilian I needed a typeface especially designed especially for his books. It became very popular among German speaking countries and areas under German influence."
}

var MIXED_TYPE_DICT = {
					   "futura_bodoni":"Congratulations, you’ve made a successful type pairing. Bodoni and Futura go together well because they both share a geometric structure and sharp edges. They also compliment each other, with Futura being a clean and utilitarian sans serif, and Bodoni being a decorative serif. Together they make a classy but cutting edge combination, just like an electronica-infused symphony orchestra.",
					   "futura_knockout":"Congratulations, you’ve made a successful type pairing. Futura and Knockout make great friends - they’re both don’t have too much contrast between the thick and thins strokes, and both are versatile and can be used for either long bodies of texts or headlines. Together, they’re like partners in crime, and make something like electro-rock trendy and catchy.",
					   "futura_ziggurat":"Oooh… that’s a little bit off, isn’t it? Futura and Ziggurat aren’t the most charming couple, with one being an understated and utilitarian sans serif made for the Bauhaus in the 1920’s, and the other being an attention-demanding slab serif with a country flair. Unfortunately the contrast is too much for the pair to handle, as is electro-country music.",
					   "futura_fette":"What a quirky, but charming combination! Futura and Fette Fraktur are a bit of an odd couple. Futura and Fette Fraktur, despite being from different time eras and having different principles, still find kinship in each other’s sharp edges. Weird, but good - just like electronica-inspired chorale.",
					   "futura_jenson":"What a quirky, but charming combination! Futura and Jenson share very different influences - Futura is a utilitarian sans serif that values the geometrical, while Jenson is an calligraphy-inspired old style typeface. However, they both share the value of being minimal and non-decorative, with the intent of being readable (whether Futura actually achieves that is questionable though).",
					   "bodoni_ziggurat":"Hmm. This doesn’t look quite right. Ziggurat and Bodoni can’t seem to agree on anything. Ziggurat is a slab serifs that is loud, chunky, and with a twang of good ol’ country. Bodoni is an elegant serif that is rational and calculated in its geometrical forms and is always appearing on the cover of Vogue. They are both attention-seeking typefaces, but they just can’t compete with each other - their differences only serves to drive them a part.",
					   "bodoni_fette":"Congratulations, you’ve made a successful type pairing. Bodoni and Fette Fraktur are both members of the upper class. Bodoni was made with the intention of only being read by those of royalty, while Fette was designed specifically for a Roman Emperor. They are also both sharp in its visual elements, tall and upright in its stance. Together, they make a classy pairing that is used by only those who want to appeal to the bourgeoisie. ",
					   "bodoni_jenson":"Congratulations, you’ve made a successful type pairing. Bodoni and Jenson are quite similar in that they are both serifs, but they’re not too similar. Bodoni is more flashy with its high contrast in its thick and thin strokes and rational with its geometric construction, and Jenson is more humanistic and old-fashioned in its reference to calligraphy. With just enough differences, they make for a great serif-and-serif pairing.",
					   "knockout_bodoni":"Congratulations, you’ve made a successful type pairing. Although Bodoni and Knockout are polar opposites - Bodoni is very classy, a bit hard to read (thanks to those thick and thin strokes), and will always be seen on an issue of Vogue, whereas Knockout is lean and thin, dominant and attention-catching, and versatile through all its weights. Together, they make a power couple that enhance each other based on their differences.",
					   "knockout_ziggurat":"Ziggurat and Knockout are a power couple made for each other - they are both made in the industrial age to be loud and attention-seeking. Their differences enhance each other - Knockout’s tall and non-decorative demeanor only lets Ziggurat’s funkiness and country tendencies shine through. Their pairing is as funky-fantastic as a Bluegrass Jamboree Festival on a hot summer day.",
					   "knockout_fette":"What a quirky, but charming combination! Fette Fraktur and Knockout are quite an odd pair, both coming from wildly different backgrounds. While Knockout is made for advertisement in the industrial age in Britain, Fette Fraktur is made for royalty in the 15th century for Holy Roman Emperors. However, they both stand tall, upright, and both seek attention. Together they make for something odd but powerful and strong like Rock Opera.",
					   "knockout_jenson":"Hmm. This doesn’t look quite right. Jenson and Knockout are too contrasting to settle their glaring differences. Jenson is an elegant, oldstyle typeface made for quiet reading and mellow woodwind tunes, while Knockout is attention-seeking and loud, and won’t settle for anything less than rock ‘n’ roll. They can’t even agree on anything, including genres of music.",
					   "ziggurat_fette":"Hmm. This doesn’t look quite right. Fette Fraktur and Ziggurat are so opposite in style and background that they refuse to go together. Whereas Fette Fraktur is high class and was made for Holy Roman Emperors in the 15th century, Ziggurat was made to catch attention in advertisements in the industrial age, with ol’ American country values. Together, their contrast is just too much to handle - much like Country Chorale.)",
					   "ziggurat_jenson":"Hmm. This doesn’t look quite right. Jenson and Ziggurat are just too different to settle their glaring differences, no matter how charming each of them are. Jenson is an elegant, oldstyle typeface made for quiet reading and mellow tunes, and it simply can’t compromise with the country-tinged, attention-seeking, banjo-bashing tendencies of Ziggurat. Their pairing is as awkward as a Banjo Bonanza attempted by a classic windwind ensemble.",
					   "fette_jenson":"Congratulations, you’ve made a successful type pairing. Fette Fraktur and Jenson are a match made in heaven - or at least, a match made in the Bible. These two typefaces were both made to be used in the Bible, which at that time was only accessible to the higher class (along with other printed matter). They are indeed the holiest and noblest of all combinations."
					}
						

var BUTTONS_TYPEFACES_PATH = "images/buttons_and_typefaces/"
var RESULT_SAMPLES_PATH = "images/result_page_samples/"
var RESULT_IMAGES_PATH = "images/result_page_images/"
var LOOPS_FOLDER = "music/Loops/"


	 /*------------------------*/
	/* -------- CODE  ------- */
   /*------------------------*/

$(document).ready(function() {

	// Set up music
	var LOOP_DICT = {}

	for (var i = 0; i < TYPEFACE_LIST.length; i++)
	{
		var typeface_name = TYPEFACE_LIST[i];
		var file_name = typeface_name.concat("_loop");
		LOOP_DICT[typeface_name] = new buzz.sound(LOOPS_FOLDER.concat(file_name), {
			formats: ["mp3"],
			preload: true,
			loop: true,
			volume: 0
		});
	}

	for (var key in LOOP_DICT)
	{
		LOOP_DICT[key].play();
	}

	//Ensure opening images are the right size
	var w = window.innerWidth;
	var h = window.innerHeight;
	var left_img_wh_ratio = 1.53;
	var right_img_wh_ratio = 1.66;
	$("#left-type-img").height(h*0.41);
	$("#left-type-img").width(h*0.41*left_img_wh_ratio);
	$("#right-type-img").height(h*0.41);
	$("#right-type-img").width(h*0.41*right_img_wh_ratio);

	var button_width = $("#try-again-button").width;
	var button_height = $("#try-again-button").height;

	$("#try-again-button").css("padding-left", (button_width/2)-(button_width));
	$("#try-again-button").css("padding-top", -(button_height/2)-(button_height));

	 /*------------------------*/
	/* -- HOVER AND CLICK  -- */
   /*------------------------*/
	$(".button").click(function()
	{

		var button = $(this).attr("id");

		/* NUMBER BUTTONS */	
		if (button in TYPEFACE_DICT)
		{
			var typename = TYPEFACE_DICT[button]
			var isUsed = change_type(typename);

			/* Isn't clicked; clicking now */
			if (isUsed)
			{
				/* Light up button */
				var id = $(this).children("img").attr("alt");
				var hoverurl = id.concat('-hover.png');
				$(this).children("img").attr("src", BUTTONS_TYPEFACES_PATH.concat(hoverurl));
		
			}
			/* Clicked; unclicking now */
			else
			{
				/* Unlight button */
				var id = $(this).children("img").attr("alt");
				var regurl = id.concat('-reg.png');
				$(this).children("img").attr("src", BUTTONS_TYPEFACES_PATH.concat(regurl));

			}
		update_loop(typename);
		change_background(false);
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
		/*prepare_main_page() */
		
			$("#paired-page").fadeOut("slow", function()
			{
				$("#main-page").fadeIn("slow");
			});

			change_background();
			$("#logo").attr("src", "images/buttons_and_typefaces/logo_main.png");
		}
	});


	$(".button").hover(function()
	{
		var button = $(this).attr("id");
		/* NUMBER BUTTONS */
		if (button in TYPEFACE_DICT)
		{
			if ((LEFT_TYPE == "") || (RIGHT_TYPE == ""))
			{
				// LIGHT UP BUTTON
				var id = $(this).children("img").attr("alt");
				if(!is_type_used(TYPEFACE_DICT[id]))
				{
					var hoverurl = id.concat('-hover.png');
					$(this).children("img").attr("src", BUTTONS_TYPEFACES_PATH.concat(hoverurl));
				}

				// SHOW TRANSPARENCY
				var typename = TYPEFACE_DICT[id];
				if(!is_type_used(typename))
				{
					if (LEFT_TYPE == "")
					{
						document.getElementById("left-type-img").style.opacity = TRANSPARENCY;
						var source = typename.concat("_left.png");
						$("#left-type-img").attr("src", BUTTONS_TYPEFACES_PATH.concat(source));
						LEFT_IS_TRANSPARENT = true;
					}
					else
					{
						document.getElementById("right-type-img").style.opacity = TRANSPARENCY;
						var source = typename.concat("_right.png");
						$("#right-type-img").attr("src", BUTTONS_TYPEFACES_PATH.concat(source));
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
				$("#pair-type").children("img").attr("src", BUTTONS_TYPEFACES_PATH.concat("pair-type-hover.png"));
			}
		}

		/* BACK BUTTONS */
		else
		{
			$("#try-again-button").attr("src", "images/buttons_and_typefaces/try_again_hover.png");
		}
	},

		function()
		{
			var button = $(this).attr("id");

			/* NUMBER BUTTONS */
			if (button in TYPEFACE_DICT)
			{
				if ((LEFT_TYPE == "") || (RIGHT_TYPE == ""))
				{
					// UNLIGHT BUTTON
					var id = $(this).children("img").attr("alt");
					if(!is_type_used(TYPEFACE_DICT[id]))
					{
						var regurl = id.concat('-reg.png');
						$(this).children("img").attr("src", BUTTONS_TYPEFACES_PATH.concat(regurl));
					}

					// UNSHOW TRANSPARENCY
					var typename = TYPEFACE_DICT[id];
					if ((LEFT_TYPE == "") && LEFT_IS_TRANSPARENT)
					{
						$("#left-type-img").attr("src", BUTTONS_TYPEFACES_PATH.concat("left_transparent.png"));
						LEFT_IS_TRANSPARENT = false;
					}
					if ((RIGHT_TYPE == "") && RIGHT_IS_TRANSPARENT)
					{
						$("#right-type-img").attr("src", BUTTONS_TYPEFACES_PATH.concat("left_transparent.png"));
						RIGHT_IS_TRANSPARENT = false;	
					}
				}
			}

			/* PAIR BUTTON */
			else if (button == "pair-type")
			{
				if ((LEFT_TYPE != "") && (RIGHT_TYPE != ""))
				{
					$("#pair-type").children("img").attr("src", BUTTONS_TYPEFACES_PATH.concat("pair-type-reg.png"));
				}
			}

			/* BACK / FORWARD BUTTONS */
			else
			{
								$("#try-again-button").attr("src","images/buttons_and_typefaces/try_again_reg.png");
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
		$("#left-type-img").attr("src", BUTTONS_TYPEFACES_PATH.concat(new_src));
		document.getElementById("left-type-img").style.opacity = "1.0";
		LEFT_TYPE = typename;
	}

	var change_right_type = function(typename)
	{
		var new_src = typename.concat("_right.png");
		$("#right-type-img").attr("src", BUTTONS_TYPEFACES_PATH.concat(new_src));
		document.getElementById("right-type-img").style.opacity = "1.0";
		RIGHT_TYPE = typename;
	}

	var remove_type = function(typename)
	{
		if (typename == LEFT_TYPE)
		{
			$("#left-type-img").attr("src", BUTTONS_TYPEFACES_PATH.concat("left_transparent.png"));
			LEFT_TYPE = "";
		}
		else
		{
			$("#right-type-img").attr("src", BUTTONS_TYPEFACES_PATH.concat("left_transparent.png"));
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

	 /*---------------------------------*/
	/* -- PREPARE PAIRED/MAIN PAGE  -- */
   /*---------------------------------*/

	var prepare_paired_page = function()
	{
		$("#paired-type-one").html(LEFT_TYPE);
		$("#paired-type-two").html(RIGHT_TYPE);

		// Prepare poster image
		var potential_image_name = LEFT_TYPE.concat("_").concat(RIGHT_TYPE)
		if (potential_image_name in MIXED_COLOUR_DICT)
		{
			$("#paired-image").attr("src", RESULT_IMAGES_PATH.concat(potential_image_name.concat(".png")));
		}
		else
		{
			potential_image_name = RIGHT_TYPE.concat("_").concat(LEFT_TYPE)
			$("#paired-image").attr("src", RESULT_IMAGES_PATH.concat(potential_image_name.concat(".png")));
		}

		// Prepare info text
		var potential_info_name = LEFT_TYPE.concat("_").concat(RIGHT_TYPE)
		if (potential_info_name in MIXED_TYPE_DICT)
		{
			$("#paired-info-text").text(MIXED_TYPE_DICT[potential_info_name]);
		}
		else
		{
			potential_info_name = RIGHT_TYPE.concat("_").concat(LEFT_TYPE)
			$("#paired-info-text").text(MIXED_TYPE_DICT[potential_info_name]);
		}

		// Individual information
		$("#paired-type-one-place").text(CREATOR_DICT[LEFT_TYPE]);
		$("#paired-type-two-place").text(CREATOR_DICT[RIGHT_TYPE]);
		$("#paired-type-one-type").text(TYPE_DICT[LEFT_TYPE]);
		$("#paired-type-two-type").text(TYPE_DICT[RIGHT_TYPE]);
		$("#paired-type-one-img").attr("src", RESULT_SAMPLES_PATH.concat(LEFT_TYPE.concat("_img.png")));
		$("#paired-type-two-img").attr("src", RESULT_SAMPLES_PATH.concat(RIGHT_TYPE.concat("_img.png")));
		$("#paired-type-one-info").text(BLURB_DICT[LEFT_TYPE]);
		$("#paired-type-two-info").text(BLURB_DICT[RIGHT_TYPE]);
		
		// Change background colour
		fade_colour("#wrapper", PAIRED_PAGE_BKG_COLOR)
		fade_colour("#paired-page", PAIRED_PAGE_BKG_COLOR)
		
		// Change logo
		$("#logo").attr("src", "images/buttons_and_typefaces/logo_paired.png");
	}

	/* --- PLAY MUSIC --- */
	var update_loop = function(typename)
	{
		/* Turning on music */
		if ((LEFT_TYPE == typename) ||(RIGHT_TYPE == typename))
		{
			LOOP_DICT[typename].setVolume(LOOP_VOLUME);
		}
		else
		{
			LOOP_DICT[typename].setVolume(0);
		}
	}
});