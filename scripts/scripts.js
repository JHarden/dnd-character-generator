/*(function(){

;(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    throttle ("scroll", "optimizedScroll");
})();
*/
// handle event
//var demos = document.getElementsByClassName('demo-blurb');
//var counter = 0;
//var isDemoActive = false;

//window.addEventListener("optimizedScroll", function() {
//
//    if(window.scrollY >= document.getElementById('hero_banner').getBoundingClientRect().height
//        - document.getElementById('hero_banner').getBoundingClientRect().height/2
//    && (window.scrollY <=  document.getElementById('about_me').getBoundingClientRect().bottom)
//    ){
//
//        document.getElementById('hero_banner').className = "hero inactive";
//        document.getElementById('my_work').className = "work inactive";
//        document.getElementById('my_photo').className = "grid-25 about-me-img active";
//        document.getElementById('my_blurb').className = "about-me-blurb grid-75 active";
//        document.getElementById('about_me_title').className = "title-active";
//
//    }else{
//        document.getElementById('hero_banner').className = "hero";
//        document.getElementById('my_work').className = "work";
//        document.getElementById('my_photo').className = "grid-25 about-me-img";
//        document.getElementById('my_blurb').className = "about-me-blurb grid-75";
//        document.getElementById('about_me_title').className = "title-inactive";
//    }
//
//    if(document.getElementById('my_demos').getBoundingClientRect().top <=100 && !isDemoActive){
//        isDemoActive = true;
//        console.log('test');
//        var i = setInterval(function(){
//            demos[counter].className = demos[counter].className + " demo-active";
//            console.log('counter: ' + counter);
//            counter++;
//            if(counter === demos.length) {
//                clearInterval(i);
//            }
//        }, 250);
//    }
//});
/*

    var first = new Tyloren(document.getElementById('tyloren_list'),{
        speed:40,
        responsive:true,
        width_height_ratio:1,
        responsive_config:{
            2000:{
                small:[12,10],
                medium:[4,10],
                large:[3,20]
            },
            1024:{
                small:[12,10],
                medium:[3,10],
                large:[2,10]
            },
            768:{
                small:[6,10],
                medium:[3,10],
                large:[2,10]
            },
            414:{
                small:[4,10],
                medium:[1,10],
                large:[2,20]
            }
        },
        singularity:true,
        singularity_config:{
            fade_others:true,
            fade_active:false
        },
        xplode:false,
        xplode_config:{
            split:true
        },
        vacuum:false,
        vacuum_config:{
            stagger:25,
            fade:true
        },
        glados:false,
        glados_config:{
            stagger:50
        },
        toggle_handlers:{
            small:'small_size',
            medium:'medium_size',
            large:'large_size',
            reset:'reset'
        }
    });


    function doTileChangeEffect(){

        var m_list = document.getElementsByClassName("inner-m-content");
        var l_list = document.getElementsByClassName("inner-l-content");

        switch (this.id){

            case "small_size":
                for(var i=0;i<m_list.length;i++){
                    m_list[i].classList.remove("active");
                    l_list[i].classList.remove("active");
                }

               document.getElementById("about_us").className = document.getElementById("about_us").className + " active";

                break;
            case "medium_size":

                for(var i=0;i<m_list.length;i++){
                    l_list[i].classList.remove("active");
                    m_list[i].className = m_list[i].className + " active";
                }
                document.getElementById("about_us").classList.remove("active");

                break;

            case "large_size":
                for(var i=0;i<m_list.length;i++){
                    m_list[i].classList.remove("active");
                    l_list[i].className = l_list[i].className + " active";
                }
                document.getElementById("about_us").classList.remove("active");

                break;
        }
    }




    document.getElementById("small_size").addEventListener('click',doTileChangeEffect,false);
    document.getElementById("medium_size").addEventListener('click',doTileChangeEffect,false);
    document.getElementById("large_size").addEventListener('click',doTileChangeEffect,false);
    document.getElementById("reset").addEventListener('click',doTileChangeEffect,false);

/*})();*/
