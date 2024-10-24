function firstWord(s) {
  // your code here
	if(s.length == 0){
		return '';
	}
	s = s.trim();
	for(let i = 0; i < s.length; i++){
		if(s.charAt(i) == ' '){
			return s.slice(0, i);
		}
	}
	return s;
	
}

// Do not change the code below

const s = prompt("Enter String:");  
alert(firstWord(s));
