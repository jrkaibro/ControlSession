function ControlSessao()
{
	this.Width;
	this.Height;
	this.Minutes;
	this.Seconds;
	this.Url;
	this.Message;
	this.ShowCountdown;
	this.FontFace;
	this.FontColor;
	this.FontSize;
	this.tempo = new Date();
	this.IsPostBack;
	this.countdown = 0;	

	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)
		this.tempo.setMinutes(this.Minutes);
        this.tempo.setSeconds(this.Seconds); 
		this.countdown = this.Seconds + (this.Minutes)*60;				
			if (!this.IsPostBack)
		{		
			this.IsPostBack = true;
			var _this = this;
			var refresh = setInterval(function() {_this.atualizar() }, 1000)
			document.body.addEventListener("click",function() {_this.show() } , true);				
		}		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)
	
	this.atualizar = function()
	{
	this.tempo.setTime(this.tempo.getTime() - 1000)         
		if (this.ShowCountdown)
		{
		var relogio = this.tempo.getMinutes() + " Minutos : " + this.tempo.getSeconds() + " Segundos." 
		var buffer = '<a id="Sessao" href="#"><font face="' + this.FontFace + '" color="' +  this.FontColor + '" size="' + this.FontSize + '">'+ relogio + '</font></a>';
    	document.getElementById(this.ContainerName).innerHTML = buffer;		
		}
		this.countdown = this.countdown -1;
	    if (this.countdown == 0) 
		{                                					   
			alert(this.Message)
			if (this.Url!="")
			{ 
            document.location.replace(this.Url)						
			}
        }			
	}
	
	///UserCodeRegionEnd: (do not remove this comment.):
}
