 var    goal=312.44,
        current = 0,
        target=[],
        //modifier
        currentAngle = (current/goal)*360,
        form = document.getElementById('orderInformationForm'),
        price = document.getElementById('grandTotalDisplay'),
        totals = document.getElementById('orderTotals'),
        menuItem = document.getElementsByClassName('menuItems'),
        el = document.createElement('div'),
        price = document.getElementsByClassName('price'),
//Hi there Evan,
//the following variables try to read the total value input field that they provide on seamless.
//This grandTotal field shows up when you add your first item to the cart.
//It is also hidden.
//For some reason, it always reads as null, and I can not get at it's value :'(
//Any idea how I can address this?
//Thanks :)
        grandTotal = document.getElementById('grandTotal'),
        totalCost = grandTotal

        function changes(){
            console.log('hi')
        }

//Hi again, comment me out to make code work again :)
        grandTotal.addEventListener('input',changes,false)


//vendors
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

function createDom () {
    el.classList.add('chart')
    el.innerHTML = '<div id="overlay">\
                        <div id="readout">\
                            <h1 class="goal"><span class="bold">$214\
                                <script type="text/javascript">\
                                    document.write(goal);\
                                </script></span>\
                                available in your<br> \
                                <script type="text/javascript">\
                                    document.write(bank);\
                                </script>Bank of America account.\
                            </h1>\
                        </div>\
                        <canvas id="canvas" width="270" height="270">\
                        </canvas>\
                        <h2 class="info">the above circle represents your available funds</h1>\
                    </div>'
                }

function drawCircle(){
//variables
        var canvas = document.getElementById("canvas"),
            ctx = canvas.getContext("2d")

        function inputFieldUpdate() {
            target=totalCost;
        }

//graphic values
        var origin = 135,
            radius = 70,
            lineW = 1.2*(radius),
            core = (radius/3.5),
            rot = Math.PI*-.5,
            metColor = "#F4F4F4", //#ffa8ba pink -- existing color
            bColor = "rgba(255,22,70,.85)",//background color
            tarColor = "rgba(154,22,70,.85)",
            ease = 5

            //pie-chart mouse-click value log
        function showCoords(evt){
            var eY = evt.layerY,
                eX = evt.layerX,
                pY = evt.pageY,
                pX = evt.pageX

                //this breaks the chart into sectors
                //then it figures out the angle of the click from the origin
                s1 = (Math.atan2(eX-origin,origin-eY))*180/Math.PI,
                s2 = (Math.atan(((eY-origin)*-1)/(eX-origin)*-1)*180/Math.PI)+90,
                s3 = 270-((Math.atan((eY-origin)/(origin-eX)))*180/Math.PI),
                s4 = 270+(Math.atan((origin-eY)/((origin-eX)))*180/Math.PI)

        //then it converts it to dollar value
            if
                (eX >= origin && eY <= origin)
                {target=(s1*(goal/360)-current)}
            else if
                (eX >= origin && eY >= origin)
                {target=(s2*(goal/360)-current)}
            else if
                (eX <= origin && eY >= origin)
                {target=(s3*(goal/360)-current)}
            else if
                (eX <= origin && eY <= origin)
                {target=(s4*(goal/360)-current)}

        //console.log('$'+Math.round(target))

        //make input field show click value
        document.getElementById('input').value=Math.round(target);

        document.getElementById('valueBox').style.display='block';

        tarX=pX
        tarY=pY

        tarBox()


        }

//constructor
        function Pie(f){
//finish angle
            this.f=f
        }

//prototype
        Pie.prototype.update = function() {
            if(showCoords){this.f += (target-this.f)/ease;}

            //does not work
            else {
            this.f += (document.getElementById("input").value - this.f) / ease;
            this.f == (document.getElementById("canvas").onmousedown.value - this.f)
            }
        }

        Pie.prototype.draw = function() {
            ctx.strokeStyle=tarColor;
            ctx.lineWidth = lineW;
            ctx.beginPath();
//update
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

//target value box position update
        function tarBox() {
            var vBox = document.getElementById("valueBox");
            vBox.style.left=tarX+"px";
            vBox.style.top=tarY+"px";
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

        //background
            ctx.strokeStyle=bColor;
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
            ctx.strokeStyle=metColor;
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



window.onload = function(){
    form.parentNode.insertBefore(el, form)
    vendor()
    createDom()
    drawCircle()
}