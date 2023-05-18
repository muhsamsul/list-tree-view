
var anchors = document.getElementsByClassName('klik-collapse');
for(var i = 0; i < anchors.length; i++) {
    var anchor = anchors[i];
    anchor.onclick = function() {
        this.classList.toggle("mystyle");
        var ulanchor = document.getElementById('ul-'+this.dataset.ul);
        var h = ulanchor.offsetHeight;
        var children = ulanchor.children;
        var ttlheight = 0;
        for (var i = 0; i < children.length; i++) {
            if(children[i].tagName == 'LI'){
                ttlheight = (ttlheight+children[i].offsetHeight+6);
            }
        }
        if(h == 0){
            ulanchor.style.height = ttlheight+"px";
        }else{
            ulanchor.style.height = "0px";
        }
    }
}
var d = "AAA";
document.addEventListener("click", (e) => {
    var anchorspopup = document.getElementsByClassName('mydropdown');
    if(d != "AAA"){
        for(var i = 0; i < anchorspopup.length; i++) {
            var anchorpopup = anchorspopup[i];
            anchorpopup.style.display = "none";
        }
        d = "AAA";
    }else{
        d = "BBB";
    }
});

var anchorsmenulistmenu = document.getElementsByClassName('menulistmenu');
for(var i = 0; i < anchorsmenulistmenu.length; i++) {
    var anchormenulistmenu = anchorsmenulistmenu[i];
    anchormenulistmenu.onclick = function() {
        var ulanchor = document.getElementById('uldd-'+this.dataset.ullistmenu);
        ulanchor.style.display = "block";
    }
}
