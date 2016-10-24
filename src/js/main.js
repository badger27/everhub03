
(function($) {

    // $ Works! You can test it with next line if you like
    console.log("test", $);

})( jQuery );



    var scrollAnimatorEntertain = function() {

    var hT = $('#entertain').offset().top,  //topPos is the number of pixels from the top of the closest relatively positioned parent element.
        hH = $('#entertain').outerHeight(), // Get the current computed height for the first element in the set of matched elements
        wH = $(window).height(),      //Get the current computed height for the first element in the set of matched elements or set the height of every matched element.
        wS = $(this).scrollTop();    // Get the current vertical position of the scroll bar for the first element in the set of matched elements

    if (wS > (hT+hH-wH )){

        var result =  hT+hH-wH;
        console.log( "entertain" + ' wS:'+ wS + ">"  + "result:" + result );
        // console.log( "entertain" + ' wS:'+ wS + ">" + " hT:" + hT + " +" + " hH:" +hH  + " -" + ' wH:' + wH );



// Animate inner line
        var  inner = Snap('#play-line-inner');
        var myInnerLine =inner;
        myInnerLine.attr({
            fill: 'white',
            opacity: 0,


        });
        myInnerLine.transform('r0,57,57');
        myInnerLine.animate({ transform: "r360,57,57"}, 1000, mina.bounce);
        myInnerLine.animate({  opacity: 1}, 1000);



// Animate Outer line
        var  outer = Snap('#play-line-outer');
        var myOuterLine =outer;
        myOuterLine.attr({
            fill: 'white',
            opacity: 0
        });
        myOuterLine.transform('r0,57,57');
        myOuterLine.animate({ transform: "r360,57,57"}, 1200, mina.bounce);
        myOuterLine.animate({  opacity: 1}, 1200);



// Animate Spot 01
        var  spot01 = Snap('#spot-play-01');
        var mySpot01 =spot01;
        mySpot01.attr({
            fill: 'white',
            opacity: 0
        });
        mySpot01.transform('r0,57,57');
        mySpot01.animate({ transform: "r-360,57,57"}, 1000, mina.bounce);
        mySpot01.animate({  opacity: 1}, 1000);

// Animate Spot 02
        var  spot02 = Snap('#spot-play-02');
        var mySpot02 =spot02;
        mySpot02.attr({
            fill: 'white',
            opacity: 0
        });
        mySpot02.transform('r0,57,57');
        mySpot02.animate({ transform: "r-360,57,57"}, 1200, mina.bounce);
        mySpot02.animate({  opacity: 1}, 1200);

// Animate Spot 03
        var  spot03 = Snap('#spot-play-03');
        var mySpot03 =spot03;
        mySpot03.attr({
            fill: 'white',
            opacity: 0
        });
        mySpot03.transform('r0,57,57');
        mySpot03.animate({ transform: "r360,57,57"}, 1000, mina.bounce);
        mySpot03.animate({  opacity: 1}, 1300);

// Animate Play
        var  play= Snap('#play-main');
        var myPlay = play;
        myPlay.attr({
            fill: 'white',
            opacity: 0
        });
        myPlay.transform('r0,57,57');
        myPlay.animate({ transform: "r-360,57,57"}, 1000, mina.bounce);
        myPlay.animate({  opacity: 1}, 1300);

        $(window).off("scroll", scrollAnimatorEntertain);
        // alert("scrollAnimatorEntertain_off");

    }
};

$(window).scroll(scrollAnimatorEntertain);










var scrollAnimatorEarn = function() {

    var hT = $('#destination').offset().top,
        hH = $('#destination').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH )){

         var result =  hT+hH-wH;
        console.log( "earn" + ' wS:'+ wS + ">" + "result:" + result );
        // console.log( "earn" + ' wS:'+ wS + ">" + " hT:" + hT + " +" + " hH:" +hH  + " -" + ' wH:' + wH );



// Animate inner line
        var  inner = Snap('#earn-line-inner');
        var myInnerLine =inner;
        myInnerLine.attr({
            fill: 'white',
            opacity: 0
        });
        myInnerLine.transform('r0,57,57');
        myInnerLine.animate({ transform: "r360,57,57"}, 1000, mina.bounce);
        myInnerLine.animate({  opacity: 1}, 1000);


// Animate Outer line
        var  outer = Snap('#earn-line-outer');
        var myOuterLine =outer;
        myOuterLine.attr({
            fill: 'white',
            opacity: 0
        });
        myOuterLine.transform('r0,57,57');
        myOuterLine.animate({ transform: "r360,57,57"}, 1200, mina.bounce);
        myOuterLine.animate({  opacity: 1}, 1200);


// Animate Spot 01
        var  spot01 = Snap('#spot-earn-00');
        var mySpot01 =spot01;
        mySpot01.attr({
            fill: 'white',
            opacity: 0
        });
        mySpot01.transform('r0,57,57');
        mySpot01.animate({ transform: "r-360,57,57"}, 1000, mina.bounce);
        mySpot01.animate({  opacity: 1}, 1000);

// Animate Spot 02
        var  spot02 = Snap('#spot-earn-01');
        var mySpot02 =spot02;
        mySpot02.attr({
            fill: 'white',
            opacity: 0
        });
        mySpot02.transform('r0,57,57');
        mySpot02.animate({ transform: "r-360,57,57"}, 1200, mina.bounce);
        mySpot02.animate({  opacity: 1}, 1200);

// Animate Spot 03
        var  spot03 = Snap('#spot-earn-02');
        var mySpot03 =spot03;
        mySpot03.attr({
            fill: 'white',
            opacity: 0
        });
        mySpot03.transform('r0,57,57');
        mySpot03.animate({ transform: "r360,57,57"}, 1000, mina.bounce);
        mySpot03.animate({  opacity: 1}, 1300);

// Animate Play
        var  play= Snap('#earn-main');
        var myPlay = play;
        myPlay.attr({
            fill: 'white',
            opacity: 0
        });
        myPlay.transform('r0,57,57');
        myPlay.animate({ transform: "r-360,57,57"}, 1000, mina.bounce);
        myPlay.animate({  opacity: 1}, 1300);

        $(window).off("scroll", scrollAnimatorEarn);
        // alert("scrollAnimatorEarn_off");

    }

};

$(window).scroll(scrollAnimatorEarn);








    var scrollAnimatorSell = function() {

        var hT = $('#basket').offset().top,
            hH = $('#basket').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH )){

            var result =  hT+hH-wH;
            console.log( "sell" + ' wS:'+ wS + ">" + "result:" + result );




// Animate inner line
            var  inner = Snap('#sell-line-inner');
            var myInnerLine =inner;
            myInnerLine.attr({
                fill: 'white',
                opacity: 0
            });
            myInnerLine.transform('r0,57,57');
            myInnerLine.animate({ transform: "r360,57,57"}, 1000, mina.bounce);
            myInnerLine.animate({  opacity: 1}, 1000);


// Animate Outer line
            var  outer = Snap('#sell-line-outer');
            var myOuterLine =outer;
            myOuterLine.attr({
                fill: 'white',
                opacity: 0
            });
            myOuterLine.transform('r0,57,57');
            myOuterLine.animate({ transform: "r360,57,57"}, 1200, mina.bounce);
            myOuterLine.animate({  opacity: 1}, 1200);


// Animate Spot 01
            var  spot01 = Snap('#spot-sell-01');
            var mySpot01 =spot01;
            mySpot01.attr({
                fill: 'white',
                opacity: 0
            });
            mySpot01.transform('r0,57,57');
            mySpot01.animate({ transform: "r-360,57,57"}, 1000, mina.bounce);
            mySpot01.animate({  opacity: 1}, 1000);

// Animate Spot 02
            var  spot02 = Snap('#spot-sell-02');
            var mySpot02 =spot02;
            mySpot02.attr({
                fill: 'white',
                opacity: 0
            });
            mySpot02.transform('r0,57,57');
            mySpot02.animate({ transform: "r-360,57,57"}, 1200, mina.bounce);
            mySpot02.animate({  opacity: 1}, 1200);

// Animate Spot 03
            var  spot03 = Snap('#spot-sell-03');
            var mySpot03 =spot03;
            mySpot03.attr({
                fill: 'white',
                opacity: 0
            });
            mySpot03.transform('r0,57,57');
            mySpot03.animate({ transform: "r360,57,57"}, 1000, mina.bounce);
            mySpot03.animate({  opacity: 1}, 1300);

// Animate Play
            var  play= Snap('#sell-main');
            var myPlay = play;
            myPlay.attr({
                fill: 'white',
                opacity: 0
            });
            myPlay.transform('r0,57,57');
            myPlay.animate({ transform: "r-360,57,57"}, 1000, mina.bounce);
            myPlay.animate({  opacity: 1}, 1300);

            $(window).off("scroll", scrollAnimatorSell);

        }

    };

    $(window).scroll(scrollAnimatorSell);







var scrollAnimatorManage = function() {

    var hT = $('#settings').offset().top,
        hH = $('#settings').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH )){

        var result =  hT+hH-wH;
        console.log( "manage" + ' wS:'+ wS + ">" + "result:" + result );




// Animate inner line
        var  inner = Snap('#manage-line-inner');
        var myInnerLine =inner;
        myInnerLine.attr({
            fill: 'white',
            opacity: 0
        });
        myInnerLine.transform('r0,57,57');
        myInnerLine.animate({ transform: "r360,57,57"}, 1000, mina.bounce);
        myInnerLine.animate({  opacity: 1}, 1000);


// Animate Outer line
        var  outer = Snap('#manage-line-outer');
        var myOuterLine =outer;
        myOuterLine.attr({
            fill: 'white',
            opacity: 0
        });
        myOuterLine.transform('r0,57,57');
        myOuterLine.animate({ transform: "r360,57,57"}, 1200, mina.bounce);
        myOuterLine.animate({  opacity: 1}, 1200);


// Animate Spot 01
        var  spot01 = Snap('#spot-manage-01');
        var mySpot01 =spot01;
        mySpot01.attr({
            fill: 'white',
            opacity: 0
        });
        mySpot01.transform('r0,57,57');
        mySpot01.animate({ transform: "r-360,57,57"}, 1000, mina.bounce);
        mySpot01.animate({  opacity: 1}, 1000);

// Animate Spot 02
        var  spot02 = Snap('#spot-manage-02');
        var mySpot02 =spot02;
        mySpot02.attr({
            fill: 'white',
            opacity: 0
        });
        mySpot02.transform('r0,57,57');
        mySpot02.animate({ transform: "r-360,57,57"}, 1200, mina.bounce);
        mySpot02.animate({  opacity: 1}, 1200);

// Animate Spot 03
        var  spot03 = Snap('#spot-manage-03');
        var mySpot03 =spot03;
        mySpot03.attr({
            fill: 'white',
            opacity: 0
        });
        mySpot03.transform('r0,57,57');
        mySpot03.animate({ transform: "r360,57,57"}, 1000, mina.bounce);
        mySpot03.animate({  opacity: 1}, 1300);

// Animate Play
        var  play= Snap('#manage-main');
        var myPlay = play;
        myPlay.attr({
            fill: 'white',
            opacity: 0
        });
        myPlay.transform('r0,57,57');
        myPlay.animate({ transform: "r-360,57,57"}, 1000, mina.bounce);
        myPlay.animate({  opacity: 1}, 1300);

        $(window).off("scroll", scrollAnimatorManage);

    }

};

$(window).scroll(scrollAnimatorManage);

