var gotPcf = false;
var cookiesToSet = ['akaas_dell_com_product_enterprisepd','ak_bmsc','akavpau_maintenance_vp'];
var cookieValues=[];
var getCookie = function(cookieName){
	var cookies = document.cookie.split(';');
	for(var item of cookies){
	   if(item.indexOf(cookieName) > -1){
	      var values = item.split(cookieName+'=');
           return values[1];
	   }
	}
}
var temp = function(i){
	return $.get('https://www.dell.com/en-ca/work/shop/povw/poweredge-t440').done((data,status,response)=> {
	 if(gotPcf){	 
      response.abort();
      return;
    }
    var header = response.getResponseHeader('debug-split');
    console.log(i, header);
    if(!header || header.indexOf('expB') === -1){
       gotPcf = true;
       for(item of cookiesToSet)
          cookieValues.push(item +'='+getCookie(item));
       return header;
    }

    document.cookie = '';
	 return header;
    }
	)
}

var promises=[];
for(var i = 0; i < 100; i++){
    promise.push(temp(i));
}