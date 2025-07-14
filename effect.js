$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
	var vw;

	// Hide balloons initially
	$('.balloons').hide();

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loop(balloonId) {
		var balloon = $(balloonId);
		var balloonWidth = balloon.width();
		var balloonHeight = balloon.height();
		var randleft = Math.random() * ($(window).width() - balloonWidth);
		var randtop = Math.random() * ($(window).height() - balloonHeight);
		
		balloon.animate({left:randleft, bottom:randtop}, 10000, function(){
			loop(balloonId);
		});
	}


	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');

		$('.balloons').show();

		loop('#b1');
		loop('#b2');
		loop('#b3');
		loop('#b4');
		loop('#b5');
		loop('#b6');
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		vw = $(window).width();
		// Stop all animations on the balloons
		$('#b1, #b2, #b3, #b4, #b5, #b6').stop();

		// Define the target positions
		var positions = [10, 26, 42, 58, 74, 90]; 

		// Animate each balloon to its final position
		$('#b1').animate({top: '240px', left: (vw * positions[0] / 100) - 40}, 500);
		$('#b2').animate({top: '240px', left: (vw * positions[1] / 100) - 40}, 500);
		$('#b3').animate({top: '240px', left: (vw * positions[2] / 100) - 40}, 500);
		$('#b4').animate({top: '240px', left: (vw * positions[3] / 100) - 40}, 500);
		$('#b5').animate({top: '240px', left: (vw * positions[4] / 100) - 40}, 500);
		$('#b6').animate({top: '240px', left: (vw * positions[5] / 100) - 40}, 500);
		
		// Show the letters
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);

		// Fade out button and show the next one
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');