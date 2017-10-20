import React from 'react';

class PaperThing extends React.Component{


	componentDidMount() {
        // Instantiate the paperScope with the canvas element
        var myCanvas = document.getElementById('myCanvas');
        paper.setup(myCanvas);
        
       // Draw a circle in the center
        var width = paper.view.size.width;
        var height = paper.view.size.height;
        var circle = new paper.Shape.Circle({
            center: [width / 2, height / 2],
            fillColor: 'grey',
            radius: 10
        });
    }

   render() {

		return	<canvas id="myCanvas" style={{width:"100%",height:"100%",background:"#000000"}}></canvas>

    }
}

export default PaperThing;