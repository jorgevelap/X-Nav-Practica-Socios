function paco(b){
		$(b).toggle();
}

$(document).ready(function(){
	var cad=""
	var d=$.getJSON("timeline.json", function(data){
		for(l in data){
		cad+="<div id='recuadro' onclick='paco("+'"#target'+l+'"'+")' class='col-md-12 well container'><div style='float: left; width: 10%;' >"+"<img class='img' id='imagen' src='"+data[l].Avatar+"' width='120' height='120'>"+"</div>"+"<div style='padding-left:15px;float: left; width: 60%;' ><br>"+data[l].Autor+"</br><b>"+data[l].Titulo+"</b>:<p id="+'"target'+l+'"'+" style='display:none'>"+data[l].Contenido+"</p></div>"+"</div>"

		}
        $("#home").html(cad)
	});




	var cad2=""
	var d=$.getJSON("myline.json", function(data){
		for(m in data){
		cad2+="<div id='recuadro' onclick='paco("+'"#targetA'+m+'"'+")' class='col-md-12 well container'><div style='float: left; width: 10%;' >"+"<img class='img' id='imagen' src='"+data[m].Avatar+"' width='120' height='120'>"+"</div>"+"<div style='padding-left:15px;float: left; width: 60%;' ><br>"+data[m].Autor+"</br><b>"+data[m].Titulo+"</b>:<p id="+'"targetA'+m+'"'+" style='display:none'>"+data[m].Contenido+"</p></div>"+"</div>"

		}
        $("#menu1").html(cad2)
	});





   $("#Button").click(function(){
		var cad=""
		var d=$.getJSON("update.json", function(data){

			for(l in data){
		cad+="<div id='recuadro' onclick='paco("+'"#targetB'+l+'"'+")' class='col-md-12 well container'><div style='float: left; width: 10%;' >"+"<img class='img' id='imagen' src='"+data	[l].Avatar+"' width='120' height='120'>"+"</div>"+"<div style='padding-left:15px;float: left; width: 60%;' ><br>"+data[l].Autor+"</br><b>"+data[l].Titulo+"</b>:<p id="+'"targetB'+l+'"'+" style='display:none'>"+data[l].Contenido+"</p></div>"+"</div>"

		}
 			var c= document.getElementById("home").innerHTML;  
		    $("#home").html(cad).append(c)

		});
	});
});
