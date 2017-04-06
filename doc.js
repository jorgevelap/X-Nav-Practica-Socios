
$(document).ready(function(){
	var cad=""
	var d=$.getJSON("timeline.json", function(data){
		for(l in data){
		cad+="<div id='recuadro' class='col-md-12 well'><div style='float: left; width: 10%;' >"+"<img class='img' id='imagen' src='"+data[l].Avatar+"' width='120' height='120'>"+"</div>"+"<div style='padding-left:15px;float: left; width: 60%;' ><br>"+data[l].Autor+"</br><b>"+data[l].Titulo+"</b>:"+data[l].Contenido+"</div>"+"</div>"
		//cad+="<div class='col-md-12 well'>"+"<img class='img' id='imagen' src='"+data[l].Avatar+"' width='120' height='120'>"+data[l].Autor+"</div>"
		}
        $("#home").html(cad)
	});

	var cad2=""
	var d=$.getJSON("myline.json", function(data){
		for(l in data){
		cad2+="<div id='recuadro' class='col-md-12 well'><div style='float: left; width: 10%;' >"+"<img class='img' id='imagen' src='"+data[l].Avatar+"' width='120' height='120'>"+"</div>"+"<div style='padding-left:15px;float: left; width: 60%;' ><br>"+data[l].Autor+"</br><b>"+data[l].Titulo+"</b>:"+data[l].Contenido+"</div>"+"</div>"
		//cad+="<div class='col-md-12 well'>"+"<img class='img' id='imagen' src='"+data[l].Avatar+"' width='120' height='120'>"+data[l].Autor+"</div>"
		}
        $("#menu1").html(cad2)
	});


   $("#Button").click(function(){
		var cad=""
		var d=$.getJSON("update.json", function(data){
			for(l in data){
			cad+="<div id='recuadro' class='col-md-12 well'><div style='float: left; width: 10%;' >"+"<img class='img' id='imagen' src='"+data[l].Avatar+"' width='120' height='120'>"+"</div>"+"<div style='padding-left:15px;float: left; width: 60%;' ><br>"+data[l].Autor+"</br><b>"+data[l].Titulo+"</b>:"+data[l].Contenido+"</div>"+"</div>"
			//cad+="<div class='col-md-12 well'>"+"<img class='img' id='imagen' src='"+data[l].Avatar+"' width='120' height='120'>"+data[l].Autor+"</div>"
			}
 			var c= document.getElementById("home").innerHTML;  
		    $("#home").html(cad).append(c)

		});
	});
});
