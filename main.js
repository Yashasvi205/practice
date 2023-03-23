Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
 });
 camera = document.getElementById("camera");
 Webcam.attach( '#camera' );

 function capture(){
    Webcam.snap( function(data_uri) {
        document.getElementById('result').innerHTML = 
         '<img id="captured_img" src="'+data_uri+'"/>';
    } );
 }
 console.log("ml5ver:",ml5.version);
 classfier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/q75e4QLCG/model.json", modelLoaded);
function modelLoaded(){
    console.log("Mod Lock & Loaded");
}
function identify(){
      var img_saver=document.getElementById("captured_img");
      classfier.classify(img_saver,gotResult);
}
function gotResult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML=result[0].label;
        document.getElementById("Accuracy").innerHTML=result[0].confidence.toFixed(2)+"%";
    }
}