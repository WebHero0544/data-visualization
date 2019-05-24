import paper from 'paper';

export default {
    name: 'paper',
    data() {
        return {}
    },
    mounted() {
        // Get a reference to the canvas object
        var ct = document.getElementById('ct');
        var cb = document.getElementById('cb');
        // Create an empty project and a view for the canvas:
        paper.setup(ct);
        // Create a Paper.js Path to draw a line into it:
        var line = new paper.Path();
        // Give the stroke a color
        line.strokeColor = 'black';
        var start = new paper.Point(100, 100);
        // Move to start and draw a line from there
        line.moveTo(start);
        // Note that the plus operator on Point objects does not work
        // in JavaScript. Instead, we need to call the add() function:
        line.lineTo(start.add([200, -50]));



        paper.setup(cb);
		var rect = new paper.Path.Rectangle([75, 75], [100, 100]);
		rect.strokeColor = 'black';




		paper.view.onFrame = function(event) {
			// On each frame, rotate the path by 3 degrees:
			rect.rotate(1);
			line.rotate(1);
		}

    }
}