// JavaScript Document   
    	
         var tempo = new Date();		 
	 	    
                function atualizar(Url,Mensagem) {		 				
					    tempo.setTime(tempo.getTime() - 1000)                                                                       						 
						var relogio = tempo.getMinutes() + " Min : " + tempo.getSeconds() + " Seg."  						
                        document.getElementById('temporizador').innerHTML = relogio
						
					   if (tempo.getMinutes() < 1 && tempo.getSeconds() < 1) {                                					   
								alert(Mensagem)                             
								document.write(' ')
                                document.location.replace(Url)
								
                        }
                }
                function contagem(Url,Mensagem) {
                        var refresh = setInterval("atualizar('"+Url+"','"+Mensagem+"')", 1000)			
						
                       
                }
       
                function reloadTime(Min,Seg) {	             
						tempo.setMinutes(Min);
                        tempo.setSeconds(Seg); 
                }       
				

