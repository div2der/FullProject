$(document).ready(function() {
	$('#username').keypress(function() {
		if ($('#username').val().length == 15)
			$('#username_error').html("Username cannot be longer than 15 characters!");
		else
			$('#username_error').html("");
	});
	$('#check').change(function() {
		$('#register').prop("disabled", ($('#register').prop('disabled')) ? false : true);
	})
	$('#showpassword').on('click', function() {
		var passwordtype = $('#password').attr('type');
		var confirmtype = $('#confirmation').attr('type');
		if (passwordtype == 'password') {
			$('#password').attr('type', 'text');
			$(this).html("Hide");
		}
		else {
			$('#password').attr('type', 'password');
			$(this).html("Show");
		}
		if (confirmtype == 'password') {
			$('#confirmation').attr('type', 'text');
			$(this).html("Hide");
		}
		else {
			$('#confirmation').attr('type', 'password');
			$(this).html("Show");
		}
	})
})

var sound = new Audio();
sound.src = "../audio/mouse_over_sound.mp3";

var mouse_over = document.getElementById("register");

document.getElementById("register").addEventListener("click", function() {
	sound.play();
});

mouse_over.addEventListener("mouseover", function() {
	if (check() == true)
		document.getElementById("register").style.backgroundColor = "green";
	else
		document.getElementById("register").style.backgroundColor = "red";
});

var mouse_out = document.getElementById("register");
mouse_out.addEventListener("mouseout", function() {
	document.getElementById("register").style.backgroundColor = "blue";
});

var registrate = document.getElementById("register");
registrate.addEventListener("click", function() {
	register();
});

function check() {
	var Username = document.getElementById("username").value;
	var Password = document.getElementById("password").value;
	var ConfirmPassword = document.getElementById("confirmation").value;
	if (Username == "" || Password == "" || ConfirmPassword == "" || (Password != "" && ConfirmPassword != "" && Password != ConfirmPassword))
		return false;
	else
		return true;
}

function register() {
	var Username = document.getElementById("username").value;
	var Password = document.getElementById("password").value;
	var ConfirmPassword = document.getElementById("confirmation").value;
	if (Username != "" && Password != "" && ConfirmPassword != "" && Password == ConfirmPassword) {
		document.getElementById("username_error").innerHTML = "";
		document.getElementById("password_error").innerHTML = "";
		document.getElementById("confirm_error").innerHTML = "";
		document.getElementById("success").innerHTML = "Successfully registered!";
		return true;
	}
	else
		document.getElementById("success").innerHTML = "";

	if (Username == "")
		document.getElementById("username_error").innerHTML = "Username cannot be empty!";
	else
		document.getElementById("username_error").innerHTML = "";

	if (Password == "")
		document.getElementById("password_error").innerHTML = "Password cannot be empty!";
	else
		document.getElementById("password_error").innerHTML = "";

	if (ConfirmPassword == "")
		document.getElementById("confirm_error").innerHTML = "You must confirm your password!";
	else
		document.getElementById("confirm_error").innerHTML = "";

	if (Password != "" && ConfirmPassword != "" && Password != ConfirmPassword)
		document.getElementById("confirm_error").innerHTML = "Password doesn't match!";
	return false;
};