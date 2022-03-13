let btn = document.getElementById('action');    //button
        let pic = document.getElementById('off');   // image

        document.addEventListener('click', bulb)      //function

        function bulb(e) {
            if (btn.textContent.includes('On Bulb')) {



                pic.src = "on_bulb.png";
                btn.textContent = "Off Bulb";
            }
            else{
                pic.src = "off_bulb.png";
                btn.textContent = "On Bulb";
            }
        }