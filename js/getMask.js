	function iframeH(value) {
		var iframe = idObj('iframe-page2');
		if(iframe.src.indexOf('&teacherid') > -1) {
			iframe.style.height = value+'px';
		}
	}

	function maskS(status) {
		console.log(status);
		if(classObj('maskBlack').length > 0) {
			changeMask(status);
		}else if(status == '10') {
			createMask(status);
		}
		if(classObj('maskWhite').length > 0) {
			changeMask(status);
		}else if(status == '1F') {
			createMask(status);
		}
	}

	function changeMask(status) {
		var maskClass = '';
		var maskStatus = '';
		switch (status.substring(1)) {
			case '0':
				maskClass = 'maskBlack';
				break;
			case 'F':
				maskClass = 'maskWhite';
				break;
		};
		switch (status.substring(0,1)) {
			case '1':
				maskStatus = 'block';
				break;
			case '0':
				maskStatus = 'none';
				break;
		};
		for(var i = 0,len = classObj(maskClass).length;i < len;i ++){
			classObj(maskClass)[i].style.display = maskStatus;
		};		
	}

	function createMask(status) {
		var maskCol = '';
		var mask = '';
		if(status.substring(1) == '0') {
			maskCol = 'maskBlack';
		}else if(status.substring(1) == 'F') {
			maskCol = 'maskWhite';
		}
		// mask = '<div class="'+maskCol+' maskTop"></div><div class="'+maskCol+' maskLeft"></div><div class="'+maskCol+' maskRight"></div>';
		var maskTop = document.createElement('div');
		var maskLeft = document.createElement('div');
		var maskRight = document.createElement('div');
		maskTop.className = maskCol + ' maskTop';
		maskLeft.className = maskCol + ' maskLeft';
		maskRight.className = maskCol + ' maskRight';
		idObj('myBody').appendChild(maskTop);
		idObj('myBody').appendChild(maskLeft);
		idObj('myBody').appendChild(maskRight);
	}

	function idObj(idStr) {
	  if (typeof idStr == "string") return document.getElementById(idStr);
	  return idStr;
  }

  function classObj(classStr) {
  	if (document.getElementsByClassName) {
      return document.getElementsByClassName(classStr);
    }else if(document.querySelectorAll) {
    	return document.querySelectorAll('.'+classStr);
    }else {
    	var ret = [];
      var els = document.getElementsByTagName('*');
      for(var i = 0 ; i < els.length; i++){
        if(els[i].className === cls 
           || els[i].className.indexOf(cls + ' ') > -1 
           || els[i].className.indexOf(' ' + cls + ' ') > -1 
           || els[i].className.indexOf(' ' + cls) > -1){
           ret.push(els[i]);
        }    
      }
      return ret;
    }
  }