<!DOCTYPE html>
<html>
<head>
	<title>Registration Login | Interface '14</title>
	<meta name="viewport" content="width=device-width">
	<link rel="stylesheet" type="text/css" href="../inc/style_reg.css">
	<script type="text/javascript" src="../inc/jq.js"></script>
	<link rel="icon" type="image/png" href="../inc/icon.png">
	<script type="text/javascript" src="../inc/reg_log.js"></script>
</head>
<body>
	<div class="viewport">
	<div class="link_con">
		<h2>Interface '14 Registration Login</h2>
		<div class="lin"><a href="../" ><img class="imgl" src="../inc/hbtn.png" onmouseover="this.src='../inc/hbtnh.png'" onmouseout="this.src='../inc/hbtn.png'"></a><a href="../events"><img class="imgl" src="../inc/ebtn.png" onmouseover="this.src='../inc/ebtnh.png'" onmouseout="this.src='../inc/ebtn.png'"></a></div>
	</div>
		<form name="frmreg" method="post" action="process.php" class="form1">
		<div class="errors">
			<?php
				if(isset($_GET['id']))
					$id=$_GET['id'];
				else $id=10;
				if($id==1)
					echo "Username/Password incorrect.";
				else if ($id==3)
					echo "Oops! Something's wrong.";
				else if($id==2)
					echo "Cannot connect to server.";
			?>
		</div>
			<div class="container">
				<div class="s_code">
					<h1>What's your Username?</h1>
					<input type="text" name="code" class="con1" id="i" autocomplete="off" value="IXIV"><br>
				</div>
				<div class="pass">
					<h1>What's your password?</h1>
					<input type="password" name="pass" class="con2" id="i" autocomplete="off"><br>
				</div>
			</div>
			<input type="submit" value="Continue">
		</form>
		<div class="pagin">
		<label style="opacity:0;">,hkjh</label>
				<svg>
					<circle r="7" cx="20" cy="20" fill="rgb(228, 228, 181)" style="cursor:pointer;" class="cir1"></circle>
					<circle r="7" cx="20" cy="50" style="cursor:pointer;" class="cir2"></circle>
				</svg>
		</div>
	</div>
</body>
</html>
