function randomHex() {
    var hex = "";
    var characters = ['A', 'B', 'C', 'D', 'E', 'F'];
    var random = Math.random();
    var i;
                
    for (i = 0; i < 2;i++) {
        if (random < 0.5) {
            hex += Math.floor(Math.random() * 10);
        } else {
            hex += characters[Math.floor(Math.random() * 6)];
        }
        random = Math.random();
    }
                    
    hex += " ";
    return hex;                
}
                    
var sideBarText = [
    '>Initalising...',
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
var ps = document.getElementById("sideBar").getElementsByTagName("p");
                    
var i;
for (i = 0; i < ps.length; i++) {
    var para = ps[i];
    var plainText = sideBarText[i];
    var x;
    for (x = 0; x < plainText.length; x++) {
        para.textContent += randomHex();
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