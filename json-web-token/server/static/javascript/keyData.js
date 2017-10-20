var keyData = {

			0: {
				sound: new Howl({
		  		urls: ['sounds/bing.mp3']
				}),
				color: 'red'
			},	
			1: {
				sound: new Howl({
		  		urls: ['sounds/beat1.mp3']
				}),
				color: 'orange'
			},
			2: {
				sound: new Howl({
		  		urls: ['sounds/T1.mp3']
				}),
				color: 'pink'
			},
			3: {
				sound: new Howl({
		  		urls: ['sounds/beat.mp3']
				}),
				color: 'white'
			},
			4: {
				sound: new Howl({
		  		urls: ['sounds/BaaBop.mp3']
				}),
				color: 'yellow'
			},
			5: {
				sound: new Howl({
		  		urls: ['sounds/De.mp3']
				}),
				color: 'teal'
			},
			6: {
				sound: new Howl({
		  		urls: ['sounds/HickHick.mp3']
				}),
				color: 'maroon'
			},
			7: {
				sound: new Howl({
		  		urls: ['sounds/alwaysHitThe1.mp3']
				}),
				color: 'green'
			},
			8: {
				sound: new Howl({
		  		urls: ['sounds/snare.mp3']
				}),
				color: 'blue'
			},
			9: {
				sound: new Howl({
		  		urls: ['sounds/tabla1.mp3']
				}),
				color: 'purple'
			},
			q: {
				sound: new Howl({
		  		urls: ['sounds/bubbles.mp3']
				}),
				color: 'white'
			},
			w: {
				sound: new Howl({
		  		urls: ['sounds/clay.mp3']
				}),
				color: '#2ecc71'
			},
			e: {
				sound: new Howl({
		  		urls: ['sounds/confetti.mp3']
				}),
				color: '#3498db'
			},
			r: {
				sound: new Howl({
		  		urls: ['sounds/corona.mp3']
				}),
				color: '#9b59b6'
			},
			t: {
				sound: new Howl({
		  		urls: ['sounds/dotted-spiral.mp3']
				}),
				color: 'cyan'
			},
			y: {
				sound: new Howl({
		  		urls: ['sounds/flash-1.mp3']
				}),
				color: 'green'
			},
			u: {
				sound: new Howl({
		  		urls: ['sounds/flash-2.mp3']
				}),
				color: '#27ae60'
			},
			i: {
				sound: new Howl({
		  		urls: ['sounds/flash-3.mp3']
				}),
				color: '#2980b9'
			},
			o: {
				sound: new Howl({
					urls: ['sounds/glimmer.mp3']
				}),
				color: '#8e44ad'
			},
			p: {
				sound: new Howl({
		  		urls: ['sounds/moon.mp3']
				}),
				color: '#2c3e50'
			},
			a: {
				sound: new Howl({
		  		urls: ['sounds/pinwheel.mp3']
				}),
				color: '#f1c40f'
			},
			s: {
				sound: new Howl({
		  		urls: ['sounds/piston-1.mp3']
				}),
				color: '#e67e22'
			},
			d: {
				sound: new Howl({
		  		urls: ['sounds/piston-2.mp3']
				}),
				color: '#e74c3c'
			},
			f: {
				sound: new Howl({
		  		urls: ['sounds/kick.mp3']
				}),
				color: 'hotpink'
			},
			g: {
				sound: new Howl({
		  		urls: ['sounds/prism-2.mp3']
				}),
				color: '#f39c12'
			},
			h: {
				sound: new Howl({
		  		urls: ['sounds/prism-3.mp3']
				}),
				color: '#d35400'
			},
			j: {
				sound: new Howl({
		  		urls: ['sounds/splits.mp3']
				}),
				color: '#1abc9c'
			},
			k: {
				sound: new Howl({
		  		urls: ['sounds/squiggle.mp3']
				}),
				color: '#2ecc71'
			},
			l: {
				sound: new Howl({
		  		urls: ['sounds/strike.mp3']
				}),
				color: '#3498db'
			},
			z: {
				sound: new Howl({
		  		urls: ['sounds/suspension.mp3']
				}),
				color: '#9b59b6'
			},
			x: {
				sound: new Howl({
		  		urls: ['sounds/timer.mp3']
				}),
				color: '#34495e'
			},
			c: {
				sound: new Howl({
		  		urls: ['sounds/ufo.mp3']
				}),
				color: '#16a085'
			},
			v: {
				sound: new Howl({
		  		urls: ['sounds/veil.mp3']
				}),
				color: '#27ae60'
			},
			b: {
				sound: new Howl({
		  		urls: ['sounds/wipe.mp3']
				}),
				color: '#2980b9'
			},
			n: {
				sound: new Howl({
					urls: ['sounds/zig-zag.mp3']
				}),
				color: '#8e44ad'
			},
			m: {
				sound: new Howl({
		  		urls: ['sounds/moon.mp3']
				}),
				color: 'violet'
			}

		}

		var circles = [];

		function onKeyDown(event) {
			if(keyData[event.key]){
				var maxPoint = new Point(view.size.width, view.size.height);
				var randomPoint = Point.random();
				var point = maxPoint * randomPoint;
				var newCircle = new Path.Circle(point, 500)
				newCircle.fillColor = keyData[event.key].color;
				keyData[event.key].sound.play();
				circles.push(newCircle);
			}
		}

		function onFrame(event){
      for(var i = 0; i < circles.length; i++){
        circles[i].scale(0.8);
        circles[i].fillColor.hue += 1;
        if(circles[i].area < 1){
        	circles[i].remove();
          circles.splice(i, 1);
          console.log(circles);
        }
      }
    }