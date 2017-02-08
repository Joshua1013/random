var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
   makeRect(0,0,200,100,"white",1);
    makeCircle(60,25,20, "blue")
makeCircle(60,25,16, "white")
makeCircle(80,50,20, "yellow")
makeCircle(80,50,16, "white")
makeCircle(100,25,20, "black")
makeCircle(100,25,16, "white")
makeCircle(120,50,20, "green")
makeCircle(120,50,16, "white")
makeCircle(140,25,20, "red")
makeCircle(140,25,16, "white")
makeLine(55,43,10,43, "blue")
makeLine(75,68,10,68, "yellow")
makeLine(120,68,200,68, "green")
makeLine(140,43,200,43, "red")
makeText(Rings,100,75,20)
makeText
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
   makeRect(0,0,200,100,"white",1);
    makeRect(25,25,150,100, "lightgreen")
    makeLine(25,90,200,90, "white")
    makeLine(25,35,200,35, "white")
    makeLine(60,35,60,90, "white")
    makeLine(140,35,140,90, "white")
    makeLine(60,64,140,64, "white")
    makeLine(25,35,200,35, "white")
    makeLine(100,25,100,110, "black", 0.7)
    makeCircle(35,77,2,"blue")
    makeCircle(80,50,2,"blue")
    makeCircle(120,77,2,"red")
    makeCircle(165,50,2,"red")
    
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
     makeRect(0,0,200,100,"white",1);
    makeRect(25,25,150,100, "lightgreen")
    makeLine(28,28,28,97, "white")
    makeLine(172,28,172,97, "white")
    makeLine(28,28,172,28, "white")
    makeLine(28,97,172,97, "white")
    makeCircle(100,63,10, "white")
    makeCircle(100,63,9, "lightgreen")
    makeLine(100,28,100,97, "white")
    makeLine(28,50,40,50, "white")
    makeLine(28,75,40,75, "white")
    makeLine(28,40,50,40, "white")
    makeLine(28,85,50,85, "white")
    makeLine(150,40,172,40, "white")
    makeLine(150,85,172,85, "white")
    makeLine(160,50,172,50, "white")
    makeLine(160,75,172,75, "white")
    makeCircle(50,63,9, "white")
    makeCircle(50,63,8, "lightgreen")
    makeCircle(150,63,9, "white")
    makeCircle(150,63,8, "lightgreen")
    makeLine(50,40,50,85, "white")
    makeLine(40,50,40,75, "white")
    makeLine(150,40,150,85, "white")
    makeLine(160,50,160,75, "white")
    makeRect(41,50,8.5,30, "lightgreen")
    makeRect(150.5,50,8.5,30, "lightgreen")
    makeCircle(40,63,2, "blue")
    makeCircle(50,63,2, "blue")
    makeCircle(55,43,2, "blue")
    makeCircle(55,83,2, "blue")
    makeCircle(70,90,2, "blue")
    makeCircle(70,70,2, "blue")
    makeCircle(70,50,2, "blue")
    makeCircle(70,35,2, "blue")
    makeCircle(85,83,2, "blue")
    makeCircle(85,43,2, "blue")
    makeCircle(85,63,2, "blue")
    makeCircle(160,63,2, "red")
    makeCircle(150,63,2, "red")
    makeCircle(115,63,2, "red")
    makeCircle(145,43,2, "red")
    makeCircle(145,83,2, "red")
    makeCircle(130,90,2, "red")
    makeCircle(130,35,2, "red")
    makeCircle(115,83,2, "red")
    makeCircle(115,43,2, "red")
    makeCircle(130,50,2, "red")
    makeCircle(130,73,2, "red")
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var myNumber = Math.random()
    if(myNumber < 0.33){
        createFirstScene();
    // If the number is less than 0.33, call the function to create your first scene.
    } else if (myNumber < 0.67) {
        createSecondScene();
    } else {
        createThirdScene();
    
    // Else, if the number is less than 0.67, call the function to create your second scene.
    
    
    
    // Else, call the function to create your third scene.
    
    
    }
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}
