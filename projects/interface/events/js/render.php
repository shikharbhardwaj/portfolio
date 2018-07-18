<?php
	session_start();
	include '../db.php';
	$nos=$nop=$email=$contact='';
	$lakshay=false;
	$lakshay2=false;
	if(isset($_POST['s_code']))
	{
		$s_code=$_POST['s_code'];
		$pass=$_POST['pass'];
	}
			if($res = mysql_query("SELECT * FROM basic where school_code='$s_code' and password='$pass'")){
				if($r = mysql_fetch_array($res)){
					$nos=$r['school_name'];
					$nop=$r['nop'];
					$email=$r['email'];
					$contact=$r['contact'];
				}
			}
			if($result = mysql_query("SELECT SUBSTRING(nop, 1, INSTR(nop, ',')-1), SUBSTRING(nop, INSTR(nop, ',')+1) from events where school_code='$s_code'")){
				while($row = mysql_fetch_array($result)){
					$lakshay[]=$row[0];
					$lakshay2[]=$row[1];
				}
			}
			
?>
	<center><h1>Interface XIV</h1></center>
	<div class="contact">
		<label class="nos" for="nosi">Name of school : <?php echo $nop; ?><?php echo $nos; ?></label><br>
		<label class="nop" for="nopi">Name of principal : <?php echo $nop; ?></label><br>
		<label class="email" for="emaili">Email address : <?php echo $email; ?></label><br>
		<label class="con" for="coni">Contact details : <?php echo $contact; ?></label><br>
	</div>
<?php
	
	echo<<<_TEXT
	<div class="participants">
		<h2 class="crea" id="head">Creative event</h2>
		<div class="creative" id="hidden">
			<label class="cn1" for="cn1i">Participant 1 : $lakshay[0]</label><br>
			<label class="cn2" for="cn2i">Participant 2 : $lakshay2[0]</label><br>
		</div> 
		<br><h2 class="tech" id="head">Technoholic</h2>
		<div class="technoholic" id="hidden">
			<label class="tn1" for="tn1i">Participant 1 : $lakshay[1]</label><br>
			<label class="tn2" for="tn2i">Participant 2 : $lakshay2[1]</label><br>
		</div>
		<br><h2 class="game" id="head">Gaming</h2>
		<div class="gaming" id="hidden">
			<label class="g1" for="g1i">Participant : $lakshay2[2]</label><br>
		</div>
		<br><h2 class="Robo" id="head">Roborash</h2>
		<div class="roborash" id="hidden">
			<label class="rb1" for="rb1i">Participant 1 : $lakshay[3]</label><br>
			<label class="rb2" for="rb2i">Participant 2 : $lakshay2[3]</label><br>
		</div><br><h2 class="prog" id="head">Progamming</h2>
		<div class="programming" id="hidden">
			<label class="pg1" for="pg1i">Participant 1 : $lakshay[4]</label><br>
			<label class="pg2" for="pg2i">Participant 2 : $lakshay2[4]</label><br>
		</div>
	</div>
_TEXT;
?>
<script type="text/javascript">
	window.onafterprint=func2('btn');
	function func2(elem){
		document.getElementById('btn')[0].style.display='block';
	}
	function func(elem){
		elem.style.display='none';
		window.print();
	}
</script>
<button id="btn" onclick="func(this);">Print</button>
<title>Print details</title>
<link rel="icon" type="image/png" href="../inc/icon.png">