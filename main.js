Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
})

camera = document.getElementById("camera");
Webcam.attach(camera);

function snapshot() {
    Webcam.snap(function (photo) {
        document.getElementById("result").innerHTML = "<img id='CapturedImage' src='" + photo + "'>"
    })
}

console.log(ml5.version);
classifer = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LWI67u14D/model.json', modelLoaded);

function modelLoaded() {
    console.log("model loaded");
}

function check() {
    img = document.getElementById("CapturedImage");
    classifer.classify(img, Results);
}

function Results(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("objectname").innerHTML = results[0].label;
        document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(3);

    }
}