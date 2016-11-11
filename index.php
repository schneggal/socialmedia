<html lang="en"><!DOCTYPE html>

 <!-- 
/* 
  
This document contains all instructions which appear in the paradigm, along with some basic functionality. You can change all text by following the instructions below. 

If you don't have experience with programming, it is important that you alter only the plain text, as indicated in the instructions, and leave any functional elements intact.
*/ 
--> 

<meta charset="utf-8">
<title>Intro</title>

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="">

<!-- Stylesheets -->
<link href="http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.0/css/bootstrap.min.css" rel="stylesheet">
<link href="http://cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.10/alertify.core.css" rel="stylesheet">
<link href="http://cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.10/alertify.default.css" rel="stylesheet">
<link href="style.css" rel="stylesheet">

<!-- For IE6-8 support of HTML5 elements -->
<!--[if lt IE 9]>
  <script src="http://html5shim.googlecode.com/svn/trunk/html5.js">
  </script>
<![endif]-->

<!-- Javascript -->
<script src="http://cdnjs.cloudflare.com/ajax/libs/mustache.js/0.3.0/mustache.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.10/alertify.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/masonry/2.1.08/jquery.masonry.min.js"></script>
<script src="shortcut.js"></script>
<script src="main.js"></script>
<script type="text/javascript" src="profiles.json"></script>

</head>

<body oncontextmenu="return false;">
<div class="container">



<div id="intro" style="display:none;" class="instr">
 <!-- 
/* 
  
**Intro**
---------
You can edit this text using basic HTML elements for styling (e.g., <br>, <h3>).

*/ 
--> <h3>Willkommen bei unserer Studie!</h3>
  <p></p>
  Im Rahmen des empirischen Praktikums an der Alpen Adria Universität Klagenfurt, führen wir eine Studie zum Thema „Vernetzung und Ersteindruck durch soziale Medien: Die moderne Art Kontakte zu kn&uuml;pfen“ durch. <br><br>

  Dafür sollen Sie einen Avatar erstellen und eine kurze Beschreibung Ihrer Person verfassen. Danach werden auch die Avatare und Beschreibungen der anderen Teilnehmerinnen und Teilnehmer für Sie sichtbar. Am Ende sollen noch ein paar Fragen beantwortet werden. <br><br>


  Klicken Sie auf „Weiter“ um mit der Studie zu starten und genauere Anweisungen zu erhalten. 
  <br><br>
  <br><br>

  Eine Bemerkung zum Datenschutz: <br>
  Dies ist eine anonyme Umfrage. In den Umfrageantworten werden keine persönlichen Informationen &uuml;ber Sie gespeichert, es sei denn, in einer Frage wird explizit danach gefragt. Wenn Sie für diese Umfrage einen Zugangsschl&uuml;ssel benutzt haben, so k&ouml;nnen Sie sicher sein, dass der Zugangsschl&uuml;ssel nicht zusammen mit den Daten abgespeichert wurde. Er wird in einer getrennten Datenbank aufbewahrt und nur aktualisiert, um zu speichern, ob Sie diese Umfrage abgeschlossen haben oder nicht. Es gibt keinen Weg, die Zugangsschl&uuml;ssel mit den Umfrageergebnissen zusammenzuführen. 
  <br><br>

  <button type="submit" id="submit_intro">Weiter</button>
</div>



<div id="name" style="display:none;" class="instr">
<!-- 
/* 
  
**Username**
---------
You can edit the instructions text for entering usernames below.

*/ 
-->
  <h3>Bitte schreiben Sie hier Ihren Namen hinein</h3>
  Entweder Vorname, Spitzename oder Initialen<br><br>
  
  <input type="text" id="username"  autocomplete="off" /><br> <br>
  <button type="submit"  id="submit_username">Weiter</button>
</div>



<div id="avatar" style="display:none;"> 
<!-- 
/* 
  
**Avatar choice**
---------
You can edit the instructions text. The text "Your choice of avatar will not be recorded or analyzed" depends on whether you record the choice of avatar.

*/ 
--> <h3>Bitte wählen Sie einen Avatar aus</h3>
  Suchen Sie sich den Avatar aus, mit dem Sie sich am Besten identifizieren können. Der ausgewählte Avatar wird für die anderen Gruppenmitglieder sichtbar sein. 
  <br><br>
  <div class="avatars"></div>
  <br><button type="submit"  id="submit_avatar">Weiter</button>
  <br><br>
</div>  


<div id="text" style="display:none;" class="instr"> 
<!-- 
/* 
  
**Description entry**
---------
You can edit the instructions text. 

*/ 
--> <h3>Bitte stellen Sie sich vor</h3>
  Schreiben Sie einen kurzen Absatz über sich selbst, durch den die anderen TeilnehmerInnen einen Eindruck von Ihnen erhalten können. Zum Beispiel: Alter, Beruf und Hobbies - Alles was Sie über sich selbst teilen wollen.
  <br><br>  
  <textarea id="description" autocomplete="off" /></textarea><br>
  <span id="count">Characters left: 400</span><br><br>
  <button type="submit" id="submit_text">Weiter</button>
</div>  



<div id="fb_intro" style="display:none;" class="instr">
<!-- 
/* 
  
**Task instructions**
---------
You can edit the instructions text. The prompt to try and form an impression of the other players is recommended in all ostacism paradigms. Defining the action of "liking" is also recommended. The information regarding task duration can be adjusted to match the actual duration you have set.

*/ 
-->  <h3>Kennenlernphase</h3>
  Sobald ein Verbindungsaufbau mit den anderen TeilnehmerInnen gelingt, erhalten Sie einen Einblick in die Profile der anderen NutzerInnen. <br><br>

  Bitte lesen Sie die kurzen Beschreibungen Ihrer Gruppenmitglieder sorgfältig durch und drücken Sie "Like" wenn Ihnen die Beschreibung einer Person gef&auml;llt oder Sie diese sympathisch finden. Der "Like"-Button kann wie das "Gef&auml;llt mir" auf Facebook oder das "Herz" auf Instagram verstanden werden.<br><br>

  Auch wenn der Eindruck den Sie über die anderen TeilnehmerInnen erhalten nur minimal ist, bitten wir Sie, sich die Personen mit denen Sie verbunden sind, so gut als möglich vorzustellen: Wie sie in echt aussehen könnten, wie sich ihre Stimme anhören würde oder auch ob Sie sich mir ihnen verstehen würden. <br><br>
  
  Die Aufgabe dauert drei Minuten. Wir bitten Sie, dass Sie in dieser kurzen Zeit Ihre ganze Aufmerksamkeit auf diese Personen lenken und nicht auf andere Seiten zu wechseln oder andere T&auml;tigkeiten durchzuf&uuml;hren. Wenn die Kennenlernphase vorbei ist, bitten wir Sie noch einige Fragen über sich selbst und die anderen NutzerInnen zu beantworten. <br><br>

  Klicken Sie auf "Einloggen" wenn Sie die Instruktionen verstanden haben.

<br>
  <br>
  <button type="submit"  id="submit_fb_intro">Einloggen</button>
</div>



<div id="fb_login" style="display:none;" class="instr">
  <h3>Verbindung wird aufgebaut</h3>
  Bitte haben Sie kurz Geduld, Sie werden mit den anderen TeilnehmerInnen verbunden.<br><br>
  <img class="load" src='ajax-loader.gif' id="loader">
  <div id="msg_all_done" style="display:none;">
  <br>
    <b>Es sind nun gen&uuml;gend TeilnehmerInnen online. Klicken Sie "Weiter" um in die Gruppenphase zu starten.</b><br><br>
    <button type="submit"  id="submit_fb_login">Weiter</button>
  </div>
</div>


<!-- 
/* 
  
**In-task instructions and timer**
---------
You can edit the instructions text. 

*/ 
-->
<div id="task" style="display:none;">
  <div id="countdown"><span class="secs" style="display: none;"></span>Wenn Ihnen ein Profil gef&auml;llt, können Sie "Like" dr&uuml;cken. <br><br>time left:<br><span id="timer" class="cntr label label-info"></span>
  <br>
  <button type="submit" id='final-continue' style="display:none;">Weiter</button> 
  </div>
</div>


<script type="template/text" id="usertmp">
  {{#posts}}
    
    <div class="entry">
    <div class="tophalf">

      <img src="{{avatar}}" class="avatar">
      <h3>{{username}}</h3>

      <div class="main">
        <p>{{text}}</p>
      </div>

      <br style="clear:both;">

    </div>  

    <div class="bottomhalf">
      Likes <span class="badge badge-custom userslikes" data-likes="{{likes}}" data-usernames="{{usernames}}">0</span>
    </div>
    </div>

  {{/posts}}  
</script>


<script type="template/text" id="otherstmp">
  {{#posts}}
    <div class="entry">
    <div class="tophalf">

      <img src="{{avatar}}" class="avatar">
        <h3>{{username}}</h3>
      
      <div class="main">
        
        <p>{{text}}</p>
      </div>

      <br style="clear:both;">

    </div>  

    <div class="bottomhalf">
      Likes <span class="badge badge-custom otherslikes" data-likes="{{likes}}">0</span>
      <button type="submit" class="btn pull-right btn-like btn-custom btn-deround">Like <i class="icon-thumbs-up icon-white"></i></button>
    </div>

    </div>
  {{/posts}}  
</script>


</body>
</html>