function ascii_to_hexa(str)
  {
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) 
     {
		var hex = Number(str.charCodeAt(n)).toString(16) + " ";
		arr1.push(hex);
	 }
	return arr1.join('');
   }
                    
var sideBarText = [
    '>Initialising...',
    '>Hardware Handshake..',
    '>Target Hardware: TriCom Communications Emulator E500',
    '>Target OS: ArcNetOS v17.5.2',
    '>UNVERIFIED INTEGRITY',
    '>overideOSCheck.exe --os arcnetos',
    '>Handshake Complete',
    '>Fetching ARCNET broadcast cache...',
    '>Received. Data Encryption: HYPERHEX',
    '>Decrypting...'
];
var ps = document.getElementById("sideBar").getElementById("code").getElementsByTagName("p");
                    
var i;
for (i = 0; i < ps.length; i++) {
    var para = ps[i];
    var plainText = sideBarText[i];
    var x;
    for (x = 0; x < plainText.length; x++) {
        para.textContent += ascii_to_hexa(plainText.substring(x, x + 1));
    }
}

var i = 0;

var bigInterval = setInterval(function() {
        var para = ps[i];
        var originalText = sideBarText[i];
        var hexText = para.textContent;
        var newText = "";


        var x = 0;
        var interval = setInterval(function() {
            hexText = hexText.substring(3, hexText.length);
            newText = originalText.substring(0, x);
            para.textContent = newText + hexText;
            x++;
            if (x > originalText.length) { clearInterval(interval)}
        }, 100);

i++;
if (i >= ps.length) { clearInterval(bigInterval);}
}, 100);
