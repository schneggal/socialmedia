// **Instructions** **main.js**
// ------------
// In this document you will find instructions on how to adjust different parameters of the paradigm. You can apply the desired changes to the document main.js on your computer or server, using a source code editor.
// The following parameters are necessary to adjust: number of avatar images, and the redirect link at the end of the study. All other parameters have a default option and adjustments are optional.

$(function() {

  // **Parameters**
  // ------------


  function set_settings() {
    window.settings = [];
	
	// **Number** **of** **Avatar** **Images**   
	// Number of avatars the user can choose from. Can be changed to any number, depending on how many avatars you would like to display. Default: 82
	// The avatar images used in the online preview of the paradigm were created using by pickaface.net and due to their terms not available for redistribution. You should therefore create your own images. All images should be 250x250 pixels in size and carry the names "avatar_NUMBER.png" (e.g. avatar_1.png; "png" should be lower case; the numbers in the names should be consequtive, starting from 1). The number of avatars dependeds on the corresponding parameter. The images should be placed in folder "avatars," located in the main study folder extracted on your computer or server.



  // STEFFI: anzahl der avatare zum aussuchen für den user. sind die bilder die in avatars drin sind also in dem fall 
  // habt ihr 8 bilder dh hier müsst ihr 8 nehmen, ausser ihr nehmt andere neue bilder für euch
    settings.numberofavatars = 42;

	
    // **Redirection**    
	// After the introduction task is over participants should be redirected to a survey with manipulation checks and dependent measures, to subsequent tasks, or to further instructions. 
	// If the study is called with a parameter for redirection, as explained in the documentation, this value is overwritten. 
	// To the redirect link, the following information will be appended: (1) participant number, (2) condition, (3) username, (4) description submitted by participant. These variables can be extracted from the link, saved as data, and used for linking the Social Media Ostracism paradigm to subsequent tasks and measures. See documentation for more details.

    settings.defaultredirect = 'https://survey.aau.at/index.php/881123?881123X3168X65306SQ001=';
	
	// **Tasklength**     
    // Length of the group introduction task in milliseconds. Can be changed to any number (in ms). Default: 180000 (3min) 
    settings.tasklength = 180000; 


	
	// **Number** **of** **"likes"**    
    // Each received "like" is indicated by the timepoint (in ms) at which the "like" will appear. To change the number of "likes" in each condition, add or remove timepoints. Make sure that every timepoint (except the first) is preceded by a single comma. 
	// In cases with only 1 "like," a second "like" is added with time point 9999999. This "like" is added for programming purposes and is never executed, as it is outside the task time

    // In condition 1, the participant will receive 1 like at the following timepoint (in ms). Default: [12000, 9999999]
    //settings.condition_1_likes = [12000, 9999999]; 

    // In condition 2, user will receive 6 likes at the following timepoints (in ms). Default: [10000, 15000,35000,80000,1320000,150000]
    //settings.condition_2_likes = [10000, 15000,35000,80000,1320000,150000];  
    
    // In condition 3, user will receive 9 likes at the following timepoints (in ms). Default: [10000, 11000,15000,35000,80000,100000,110000,150000,20000]
    //settings.condition_3_likes = [10000, 11000,15000,35000,80000,100000,110000,150000,20000]; 

  //steffi hier stellst du ein wann der user ein like bekommt
  // settings.likes_by müsst ihr erweitern wenn die namen nied ausreichen bzw müsst ihr schaun dass die 
  // namen die ihr da aufpoppen lasst ja auch dann vorkommen in euren test usern
  settings.condition_EXKLUDIERT_KLEIN_likes = [15000, 99999999999]; // 1
  settings.condition_INKLUDIERT_KLEIN_likes = [15000, 43000, 110000]; // 3
  settings.condition_EXKLUDIERT_GROSS_likes = [15000, 99999999999]; // 1
  settings.condition_INKLUDIERT_GROSS_likes = [15000, 29000, 37000, 45000, 60000, 77000, 89000, 112000, 150000]; // 9
  settings.condition_EXKLUDIERT_MITTEL_likes = [15000, 99999999999]; //1
  settings.condition_INKLUDIERT_MITTEL_likes = [15000, 29000, 37000, 40000, 60000, 77000, 112000]; //7

  // **Others' likes**     
  // To keep the total distribution of "likes" constant across conditions, The "likes" received by one group member can be adjusted according to the participant's. By default, the other group member receives 9 "likes" in the participant-ostracism condition, 5 in the participant-inclusion condtion, and 1 in the participant-overinclusion condtion.
  
  settings.condition_EXKLUDIERT_GROSS_adjusted_likes = [18000, 20000, 30000,35000, 70000, 90000, 100000, 110000, 130000]; // 9
  settings.condition_EXKLUDIERT_KLEIN_adjusted_likes = [18000, 80000]; // 2
  settings.condition_EXKLUDIERT_MITTEL_adjusted_likes = [18000, 20000, 30000,35000, 70000, 90000, 100000]; // 7

  settings.condition_INKLUDIERT_GROSS_adjusted_likes = [18000, 20000, 30000,35000, 70000, 90000, 100000, 110000, 130000]; // 9
  settings.condition_INKLUDIERT_KLEIN_adjusted_likes = [18000, 80000]; // 2 
  settings.condition_INKLUDIERT_MITTEL_adjusted_likes = [18000, 20000, 30000,35000, 70000, 90000, 100000]; // 7
  



    window.user = [];



	
    // Usernames by which the participant will receive "likes"
	// If group member names are changed, these should be changed accordingly.
  // STEFFI: wir können diese liste auch anpassen dass für jede gruppe andere namen snd - würd aber eher sagen ihr schaut dass ihr immer die gleichen test user überall habt und ergänzt nur mehr dann hamma weniger zum anpassen
    settings.likes_by = ['Anna','Matthias','Marion','Johannes','Sandra','Rachid','Lisa','Peter', 'Anja', 'Daniela', 'Lukas', 'Timo']; 
  }

  // -------------------
  // Above were the basic parameters you can adjust using the instructions. The remaining code is also annotated, but we do not recommend changing it, unless you are comfortable with web programming.
  // -------------------
  
  
  // **Slide:** **Intro**     
  // With instructions regarding the task. The intro container is shown, the continue calls the next slide when clicked.
  function init_intro() {
    console.log("intro");

  	$('#intro').show();
  	$('#submit_intro').on('click',function() {
			$('#intro').hide();
  			init_name();  			
  	});	
  }
  

  // **Slide:** **Username**       
  // Note: Only alphanumeric usernames without spaces are accepted
  
  function init_name() {

  	$('#name').show();

    
  	$('#submit_username').on('click',function() {

  		var error = 0;
  		var uname = $('#username').val();

  		if(uname == "") {
  			error = 1;
  			errormsg = 'Bitte Text eingeben';
  			uname = "undefined";
  		}
  		if(not_alphanumeric(uname)) {
  			error = 1;
        errormsg = 'Bitte nur Ziffern (und keine Leerzeichen)';
  		}  		

  		if(error == 0) {
			$('#name').hide();
			window.username = $('#username').val();
  			init_avatar();  			
  		} else {
  			alertify.log(errormsg,"error");
  		}


  	});
  }

  // **Slide:** **Avatar**       
  // Avatar slide in which the participant is asked to select an avatar
   
  function init_avatar() {
  	$('#avatar').show();

    var avatars = window.settings.numberofavatars;    
  	for(var i=0; i<avatars; i++) 
  	{ 
  		$('.avatars').append('<img id="avatar_' + i+ '" src="avatars/avatar_' + i + '.png" class="avatar" />');
  	} 

  	$('.avatar').on('click', function() {
  		$('.avatar').removeClass('selected');
  		$(this).addClass('selected');
  	});

    	$('#submit_avatar').on('click',function() {
    		if($('.selected').length == 1) {
  			$('#avatar').hide();
  			window.avatar = $('.selected').attr('id');
  			window.avatarexport = /avatar_([^\s]+)/.exec(window.avatar)[1];
    			init_text();  			
    		} else {
    			alertify.log("Bitte w&auml;hlen Sie einen Avatar aus","error");
    		}
    	});

  }


  // **Slide:** **Description**   
  function init_text() {
  	$('#text').show();

  	$("#description").keyup(function(){
  	  $("#count").text("Characters left: " + (400 - $(this).val().length));
  	});

  	$('#submit_text').on('click',function() {

  		var error = 0;
  		if($('#description').val() == "") {
  			error = 1;
  			errormsg = 'Bitte f&uml;gen Sie einen Text ein';
  		}
  		if($('#description').val() !== "" && $('#description').val().length < 140) {
		
  			error = 1;
  			errormsg = 'Bitte schreiben Sie ein bisschen mehr &uml;ber sich';
			}
  		if($('#description').val().length > 401) {
  		
  			error = 1;
  			errormsg = 'Bitte k&uml;rzen Sie Ihren Text ein wenig';
  		}  		
  		if(error == 0) {
  			$('#text').hide();
  			window.description = $('#description').val();
    			init_fb_intro();  			
    		} else {
    			alertify.log(errormsg,"error");
    		}
  	});  	
  }


  // **Slide:** **Instructions**   
  function init_fb_intro() {
  	$('#fb_intro').show();
	
  	$('#submit_fb_intro').on('click',function() {

			$('#fb_intro').hide();
 			init_fb_login();  			

  	});	
  }


  // **Slide:** **Login** **Screen**   
  // Participant can continue after 8000ms = 8s      
  function init_fb_login() {
  	$('#fb_login').show();
	

  	setTimeout(function() {
  		$('#msg_all_done').show();
  		$("#loader").hide();
  	}, 3000);
	
  	$('#submit_fb_login').on('click',function() {
			$('#fb_login').hide();
  			init_task();  			
  	});	
  }
  
  // **Slide:** **Task**   
  function init_task() {

    $('#task').show();

     var NAME = window.username;
     var GROUP = "";
     var DESCRIPTION = window.description;
     var AVATAR = window.avatarexport;


     // make the postdata
     // var postData = '&ID='+ID+'&NAME='+NAME+'&PASSWORD='+PASSWORD+'&CREDITS'+CREDITS+'&EMAIL_ID'+EMAIL_ID+'&CREATED_ON'+CREATED_ON+'&MODIFIED_ON'+MODIFIED_ON;
     // alert(postData);
     var myData={"USERNAME":NAME,"GROUP":GROUP,"AVATAR":AVATAR,"DESCRIPTION":DESCRIPTION};
     var entryID;
     //call your .php script in the background, 
     //when it returns it will call the success function if the request was successful or 
     //the error one if there was an issue (like a 404, 500 or any other error status)
     $.ajax({
        url : "php/add.php",
        type: "POST",
        async: false,
        data : myData,

        success: function(data)
        {
          entryID = parseInt(data);    
        }
    }); 
    
    
    adjust_to_condition(entryID);
    


    
    var GROUP = window.condition;
    

	  
  


  shortcut.add("Backspace",function() {});      

  	jQuery("#countdown").countDown({
  		startNumber: window.settings.tasklength/1000, // in seconds
  		callBack: function(me) {
  			console.log('over');
        $('#timer').text('00:00');
  		}
  	});
	   
		users = {
		  "posts" : [
			{
			  "avatar": 'avatars/' + window.avatar + '.png',
			  "username": window.username,
			  "text": window.description,
			  "likes": window.settings.condition_likes,
			  "usernames": window.settings.likes_by
			}
		  ]
		};

    
		
    // Add user box to slide     
	  var tpl = $('#usertmp').html(),html = Mustache.to_html(tpl, users);
	  $("#task").append(html);
	  
    // Add other boxes to slide    

	  
    var tpl = $('#otherstmp').html(),html = Mustache.to_html(tpl, window.others);
	  $("#task").append(html);
    
 
    // Randomize order of other players boxes
    function reorder() {
       var grp = $("#others").children();
       var cnt = grp.length;

       var temp,x;
       for (var i = 0; i < cnt; i++) {
           temp = grp[i];
         x = Math.floor(Math.random() * cnt);
         grp[i] = grp[x];
         grp[x] = temp;
     }
     $(grp).remove();
     $("#others").append($(grp));
    }
    reorder();    

    // When user receives likes
	  $('.userslikes').each(function() {
  		var that = $(this);
  		var usernames = $(this).data('usernames').split(",");
  		var times = $(this).data('likes').split(",");
     
  		for(var i=0; i<times.length; i++) 
  		{ 
  			times[i] = +times[i]; 
  			
  			themsg = usernames[i] + " Gef&auml;llt dein Beitrag";

  			setTimeout(function(themsg) {
  				that.text(parseInt(that.text()) + 1);
  				alertify.success(themsg)

  			}, times[i], themsg);
  		} 		
	  });
	  
    // When others receive likes
	  $('.otherslikes').each(function() {
  		var that = $(this);
  		var times = $(this).data('likes').split(",");
  		
  		for(var i=0; i<times.length; i++) 
  		{ 
  			times[i] = +times[i]; 
  			
  			setTimeout(function () {
  				that.text(parseInt(that.text()) + 1);
  			}, times[i]);
  			
  		} 
	  });
	 

    // Initialize like buttons
	  $('.btn-like').on('click', function() {
		  $(this).prev().text(parseInt($(this).prev().text()) + 1);
      // Like buttons can only be clicked once
		  $(this).attr("disabled", true);
	  });

    // Initalize Masonry plugin
    // For display of user and other players boxes in columns without gaps
		$('#task').masonry({
		  itemSelector : '.entry',
		  columnWidth : 10
		});


    // Redirect, default after 180000ms = 180s = 3min
    setTimeout(function() {
    
    $(window).unbind('beforeunload');
    
    $('#final-continue').show();

    $('#timer').text('00:00');


    
    
    $('#final-continue').on('click', function() {


    

      
      // Redirect link
      
      location.href = settings.defaultredirect+entryID;

    });
    
    },window.settings.tasklength); // timing for task

  }
	
  
  // adjustments according to current condition
  function adjust_to_condition(entryID) {

    // the number of likes a person receives depends on the condition
	// in addition, the number of likes another person receives is adjusted, so that there is the same number of likes overall

  //TODO RANDOMIZE
  // steffi hier kannst du dir die test gruppe so einschalten wie du es gerade ausprobieren willst und anpassen möchtest
  
  if (entryID % 6 == 5) {
    condition="EXKLUDIERT_KLEIN";
  }
  else if (entryID % 6 == 4) {
    condition="EXKLUDIERT_GROSS";
  }
  else if (entryID % 6 == 3) {
    condition="EXKLUDIERT_MITTEL"; 
  }
  else if (entryID % 6 == 2) {
    condition="INKLUDIERT_KLEIN";
  }
  else if (entryID % 6 == 1) {
    condition="INKLUDIERT_GROSS";
  }
  else {
   condition="INKLUDIERT_MITTEL";
  }

  var ENTRYID = entryID;
  var GROUP = window.condition;



  var myData={"ENTRYID":ENTRYID,"GROUP":GROUP};
   

  $.ajax({
    url : "php/update.php",
    type: "POST",
    data : myData,

    success: function(data)
    {
      entryID = data;    
    }
  }); 

  

	switch(condition) {
    case "EXKLUDIERT_KLEIN":
      window.settings.condition_likes = settings.condition_EXKLUDIERT_KLEIN_likes;
      window.others = window.others_EXKULDIERT_KLEIN;
      window.others.posts[1].likes = settings.condition_EXKLUDIERT_KLEIN_adjusted_likes;
      settings.group_size = 4;
      break;

    case "EXKLUDIERT_GROSS":
      window.settings.condition_likes = settings.condition_EXKLUDIERT_GROSS_likes;
      window.others = window.others_EXKULDIERT_GROSS;
      window.others.posts[1].likes = settings.condition_EXKLUDIERT_GROSS_adjusted_likes;
      settings.group_size=19;
      break;

    case "EXKLUDIERT_MITTEL":
      window.settings.condition_likes = settings.condition_EXKLUDIERT_MITTEL_likes;
      window.others = window.others_EXKLUDIERT_MITTEL;
      window.others.posts[1].likes = settings.condition_EXKLUDIERT_MITTEL_adjusted_likes;
      settings.group_size=11;
      break;

    case "INKLUDIERT_KLEIN":
      window.settings.condition_likes = settings.condition_INKLUDIERT_KLEIN_likes;
      window.others = window.others_INKLUDIERT_KLEIN;
      window.others.posts[1].likes = settings.condition_INKLUDIERT_KLEIN_adjusted_likes;
      break;

    case "INKLUDIERT_GROSS":
      window.settings.condition_likes = settings.condition_INKLUDIERT_GROSS_likes;
      window.others = window.others_INKLUDIERT_GROSS;
      window.others.posts[1].likes = settings.condition_INKLUDIERT_GROSS_adjusted_likes;
      break;

    case "INKLUDIERT_MITTEL":
     window.settings.condition_likes = settings.condition_INKLUDIERT_MITTEL_likes;
      window.others = window.others_INKLUDIERT_MITTEL;
      window.others.posts[1].likes = settings.condition_INKLUDIERT_MITTEL_adjusted_likes;
      break;
   	}	


  }

    

  // The variable QueryString contains the url parameters, i.e. condition no. and participant no.
  // via http://stackoverflow.com/a/979995
  window.QueryString = function () {
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
        // If first entry with this name
      if (typeof query_string[pair[0]] === "undefined") {
        query_string[pair[0]] = pair[1];
        // If second entry with this name
      } else if (typeof query_string[pair[0]] === "string") {
        var arr = [ query_string[pair[0]], pair[1] ];
        query_string[pair[0]] = arr;
        // If third or later entry with this name
      } else {
        query_string[pair[0]].push(pair[1]);
      }
    } 
      return query_string;
  } ();


  // Function to check letters and numbers
  // via http://www.w3resource.com/javascript/form/letters-numbers-field.php
  function not_alphanumeric(inputtxt) {
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if(inputtxt.match(letterNumber)) {
        return false;
      } else { 
        return true; 
      }
  }


  // Function to add extra zeros infront of numbers (used for the countdown)
  // via http://stackoverflow.com/a/6466243
  function pad (str, max) {
    return str.length < max ? pad("0" + str, max) : str;
  }

  // Function for encoding and decoding URLs
  // via http://meyerweb.com/eric/tools/dencoder/
  function encode(unencoded) {
	return encodeURIComponent(unencoded).replace(/'/g,"%27").replace(/"/g,"%22");	
  }
  function decode(encoded) {
	return decodeURIComponent(encoded.replace(/\+/g,  " "));
  }

  
  // Simple Countdown
  // via http://davidwalsh.name/jquery-countdown-plugin
  jQuery.fn.countDown = function(settings,to) {
    settings = jQuery.extend({
      startFontSize: "12px",
      endFontSize: "12px",
      duration: 1000,
      startNumber: 10,
      endNumber: 0,
      callBack: function() { }
    }, settings);
    return this.each(function() {
      if(!to && to != settings.endNumber) { to = settings.startNumber; }  
      jQuery(this).children('.secs').text(to);
      jQuery(this).animate({
        fontSize: settings.endFontSize
      }, settings.duration, "", function() {
        if(to > settings.endNumber + 1) {
          jQuery(this).children('.secs').text(to - 1);
          jQuery(this).countDown(settings, to - 1);
          var minutes = Math.floor(to / 60);
          var seconds = to - minutes * 60;
          jQuery(this).children('.cntr').text(pad(minutes.toString(),2) + ':' + pad(seconds.toString(),2));
        }
        else {
          settings.callBack(this);
        }
      });
    });
  };

  // Prevent that participants accidentally exit the experiment by disabling F5 and backspace keys
  shortcut.add("f5",function() {});  
  $(window).bind('beforeunload', function(){
    return 'Wollen Sie die Studie wirklich verlassen?';
  });   

  // Set Settings, get Participant No. and Condition No.
  set_settings();
  
  //get_params();
  //adjust_to_condition();

  // Start with the intro slide
  init_intro();

});

