<?php
	session_start();
?>
<script src='../inc/jq.js'></script>
<link rel="icon" type="image/png" href="../inc/icon.png">
<link rel="stylesheet" type="text/css" href="../inc/style_form.css">
<div class="viewport">
<h1>Interface '14 Registration</h1>
<?php
	if(!isset($_SESSION['s_code']))
		header("location: ../reg");
	else {
		$s_code=$_SESSION['s_code'];
		$pass= $_SESSION['pass'];
	}

	include '../db.php';
	if($res = mysql_query("SELECT reg FROM scheck where school_code='$s_code'")){
		if($r = mysql_fetch_array($res)){
			if($r['reg']==1){
				echo "<div class='pres'><span class='info'>Data already present. <button class='btn'>Click here</button> to update the data.<br>OR <br><button class='cancel'>Click here</button> to cancel registration</span></div>";
				echo<<<_script
				<script>
				jQuery(".cancel").on("click",function(){
_script;
					$_SESSION['hidden']="azure";
				echo<<<_script
				jQuery("body").append("<form method='post' class='psuedof' action='cancel.php'></form>");
					jQuery(".psuedof").trigger("submit");
				});
				jQuery(".btn").on("click",function(){
					jQuery(".pres").hide();
					jQuery(".container").append("<center><img src='../inc/load.gif' class='load'></center>");
					jQuery(document).ajaxSuccess(function() {
  						jQuery(".load").css("display","none");
					});
					jQuery.get( "formenc.php?data=1", function( data ) {
	  					jQuery( ".container" ).html( data );
					});
				})
				</script>
_script;
			} 
			else{
			if($result = mysql_query("SELECT * FROM basic where school_code='$s_code' and password='$pass'")){
				if(mysql_num_rows($result)){
					echo "<div class='press'><span class='info'>Your data still exists in the database. Do you want to load the previous data?<button class='loadprev'>Load Previous data</button></span></div>";
					echo<<<_HTML
							<script>
							jQuery(".loadprev").on("click",function(){
								jQuery(".press").hide();
								jQuery(".container").append("<center><img src='../inc/load.gif' class='load'></center>");
								jQuery(document).ajaxSuccess(function() {
  									jQuery(".load").css("display","none");
								});
								jQuery.get( "formenc.php?data=1", function( data ) {
  									jQuery( ".container" ).html( data );
								});
							});
							</script>
_HTML;
				}   else{
							echo<<<_HTML
							<script>
							jQuery(".container").append("<center><img src='../inc/load.gif' class='load'></center>");
							jQuery(document).ajaxSuccess(function() {
  								jQuery(".load").css("display","none");
							});
							jQuery.get( "formenc.php", function( data ) {
  								jQuery( ".container" ).html( data );
							});
							</script>
_HTML;
					}
				}
			}
		}
	}
?>
<div class="container">
</div>
</div>
<title>Registration | Interface '14</title>
