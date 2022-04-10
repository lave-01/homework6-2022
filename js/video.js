var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = document.getElementById("player1");
	// play video
	document.getElementById("play").addEventListener("click", function () {
		console.log("Play Video");
		video.play();
		// update volumn info
		video.volume = 0.01 * document.getElementById("slider").value;
		document.getElementById("volume").innerHTML = 100 * video.volume + '%';
	});
	// pause video
	document.getElementById("pause").addEventListener("click", function () {
		console.log("Pause Video");
		video.pause();
	});
	// slow down
	document.getElementById("slower").addEventListener("click", function () {

		video.playbackRate *= 0.95;
		console.log("New playback rate: " + video.playbackRate);
	});
	// speed up
	document.getElementById("faster").addEventListener("click", function () {
		video.playbackRate *= 1.05;
		// ? video.playbackRate /= 0.95;
		console.log("New playback rate: " + video.playbackRate);
	});
	// skip ahead
	document.getElementById("skip").addEventListener("click", function () {
		video.currentTime += 15;
		if (video.currentTime >= video.duration) {
			video.currentTime = 0;
		}
		console.log("Current location: " + video.currentTime + " seconds");
	});
	// mute
	this.document.getElementById("mute").addEventListener("click", function () {
		if (video.muted) {
			video.muted = false;
			document.getElementById("mute").innerHTML = "Mute";
		} else {
			video.muted = true;
			document.getElementById("mute").innerHTML = "Unmute";
		}
	});
	// volume slider
	this.document.getElementById("slider").addEventListener("input", function () {
		video.volume = 0.01 * document.getElementById("slider").value;
		document.getElementById("volume").innerHTML = 100 * video.volume + '%';

	});
	// styled
	this.document.getElementById("vintage").addEventListener("click", function () {
		video.classList.add("oldSchool");
	});
	// original
	this.document.getElementById("orig").addEventListener("click", function () {
		video.classList.remove("oldSchool");
	});
});



