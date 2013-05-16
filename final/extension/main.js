window.onload = function(){
 var    goal=100,
        current = 0,
        bank = 'Bank of America',
        target=[],
        //modifier
        currentAngle = (current/goal)*360,
        form = document.getElementById('orderInformationForm'),
        el = document.createElement('div'),
        totalCost = document.getElementById('grandTotal'),
        //call parent area of grand total so as to catch event bubble up
        area = document.getElementById('orderTotalsAjaxArea'),
        addItem = document.getElementById('addItem'),
        grandTotal = null,
        minimum = null

//requestAnimationFrame vendors
function vendor() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
};

//bug - variables do not call native html objects
function createDom () {
    el.classList.add('chart')
    el.innerHTML = '<div id="overlay">\
                        <div id="readout">\
                            <div class="goal">\
                            <a id="settingsIcon" class="extensionInactive"></a>\
                            <h1>$'+(goal)+' Budgeted\
                                </h1>\
                            </div>\
                        </div>\
                        <div id="extensionEnvelope">\
                            <ul id="extensionSettings">\
                                <a id="eSetMenu1"><li class="extensionSubmenu">Change Bank</li></a>\
                                <a id="eSetMenu2"><input class="extensionSubmenu" id="eSec" type="number" placeholder="Edit Budget"></input></a>\
                                <a id="eSetMenu3">\
                                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"  class="extensionSubmenu eLast">\
                                    <input type="hidden" name="cmd" value="_s-xclick">\
                                    <input type="hidden" name="hosted_button_id" value="AD9F7T8QEUEXL">\
                                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
                                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
                                    </form>\
                                </a>\
                            </ul>\
                        </div>\
                        <canvas id="canvas" width="270" height="270">\
                        </canvas>\
                    </div>'
                }

function drawCircle(){
    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        //graphic values
        origin = 135,
        radius = 60,
        lineW = 1.7*(radius),
        core = (radius/3.5),
        rot = Math.PI*-.5,
        color1 = "rgba(255,22,70,.85)",
        color2 = "rgba(154,22,70,.85)",
        color3 = "rgba(55,22,70,.85)",
        ease = 5

    function inputFieldUpdate() {
        target = grandTotal;
    }

//constructor
// f = finish angle
    function Pie(f){
        this.f=f
    }

//prototype
    Pie.prototype.update = function() {
            this.f += (target-this.f)/ease;
    }

    Pie.prototype.draw = function() {
        ctx.strokeStyle=color2;
        ctx.lineWidth = lineW;
        ctx.beginPath();
        ctx.arc(
            origin,
            origin,
            radius,
        //start angle
            (currentAngle*Math.PI/180)+rot,
        //end angle
            ((currentAngle+(this.f/goal*360))*Math.PI/180)+rot,
            false);
        ctx.stroke();
        ctx.restore();
    }

    var pie = new Pie (0)

    animate()

    function animate(){
        requestAnimationFrame(animate);
        pie.update();
        full();
        pie.draw();
        inputFieldUpdate();
    }

    //re-draw the full chart on under the updated arc
    function full(){
    //box
        ctx.clearRect(0,0,origin*2,origin*2);
    //background arc
        ctx.strokeStyle=color1;
        ctx.lineWidth = lineW;
        ctx.beginPath();
        ctx.arc(
            origin,
            origin,
            radius,
            0*Math.PI/180,
            360*Math.PI/180,
            false);
        ctx.stroke();

    //already met
        ctx.strokeStyle=color3;
        ctx.lineWidth = lineW;
        ctx.beginPath();
        ctx.arc(
            origin,
            origin,
            radius,
            0*Math.PI/180+rot,
            currentAngle*Math.PI/180+rot,
            false);
        ctx.stroke();
    }
}

//injects dom
form.parentNode.insertBefore(el, form)
createDom()
vendor()
drawCircle()

//reads order value
function pollTotal () {
    var total = document.getElementById('grandTotal')
    if (total) {
        grandTotal = +(total.value.replace('$', ''))
    }
    setTimeout(pollTotal, 100)
}
pollTotal()

//extension menu
var eSet = document.getElementById('extensionSettings'),
setIcon = document.getElementById('settingsIcon'),
setMen2 = document.getElementById('eSetMenu2'),
e2input = document.getElementById('eSec'),
e2Val = document.getElementById('eSec').value,
eChart = document.querySelectorAll(".chart"),
eSlide = document.querySelectorAll(".extensionSlide")


// toggle classes
function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

//settings transitions

setIcon.onclick = function(){
    toggleClass(eSet,'extensionSlide')
    toggleClass(setIcon,'extensionActive')
}

//budget set
setMen2.onclick = function (){
    e2input.addEventListener('change',function(){
        goal = e2input.value
        console.log(goal)
    })
}

}