$(document).ready(function() {
    console.log("ready");

    $("#intro-expand").on('click', function() {
        console.log("clicked intro");
        if ($(".intro-panel").hasClass("intro-panel-up")) {
            $(".intro-panel").removeClass("intro-panel-up");
            $("#intro-icon").removeClass("intro-icon-flip");
        } 
        else {
            console.log("else");
            $(".intro-panel").addClass("intro-panel-up");
            $("#intro-icon").addClass("intro-icon-flip");
        }

    });

    $("#projects").on('click', function() {
        console.log("clicked projects");
        if ($(".card-left").hasClass("card-left-hidden")) {
            $(".card-left").removeClass("card-left-hidden");

        } 
        else {
            console.log("else");
            $(".card-left").addClass("card-left-hidden");
        }

    });

    $("#close-projects").on('click', function() {
        $(".card-left").addClass("card-left-hidden");

    });

    $("#contact").on('click', function() {
        console.log("clicked contact");
        if ($(".card-right").hasClass("card-right-hidden")) {
            $(".card-right").removeClass("card-right-hidden");

        } 
        else {
            console.log("else");
            $(".card-right").addClass("card-right-hidden");
        }

    });

    $("#close-contact").on('click', function() {
        $(".card-right").addClass("card-right-hidden");

    });

    // $("#spring-info-configlogs").on('click', function() {
    //     console.log("clicked app health instance row");
    //     if ($(".log-config-info").hasClass("hide")) {
    //         $(".log-config-info").animate({ height: 83 }, 100).removeClass("hide")
        
    //     } else {
    //         $(".log-config-info").animate({ height: 0 }, 100)
    //         setTimeout(
    //             function() {
    //                 $(".log-config-info").addClass("hide")
    //             }, 100);


    //     }

    // });
    // $("button#asyncstep1btn").on('click', function() {
    //     $("button#asyncstep1btn").addClass("hide");
    //     $("button#asyncstep2btn").removeClass("hide");
    //     setTimeout(
    //         function() {
    //             //v2 panel change
    //             $("#asyncstep1").addClass("hide");
    //             $("#asyncstep2").removeClass("hide");

    //             //v1 modal pop
    //             // $("button#asyncstep2btn").addClass("spinner-freeze");
    //             // $('#modalasync').modal('show');

    //             console.log("step2");
    //             window.location.href = "/space-async.html";
    //         }, 2000);




    // });




    // //Space Page

    // if ($(".prototype").is(".space-async")) {

    //     console.log("async-flow");


    //     function steps() {
    //         console.log("step0");
    //         $(".provision-status span").text("Provisioning service...");


    //         setTimeout(
    //             function() {
    //                 $(".provision-status span").text("Initializing database...");
    //                 console.log("step1");
    //             }, 3000);


    //         setTimeout(
    //             function() {
    //                 $(".provision-status span").text("Mapping connections...");
    //                 console.log("step2");
    //             }, 6000);
    //         setTimeout(
    //             function() {
    //                 $(".provision-status span").text("Creating credentials...");
    //                 console.log("step3");
    //             }, 9000);




    //     }

    //     steps();
    //     var provisioning = setInterval(steps, 12000);



    //     setTimeout(
    //         function() {
    //             $("#notify-green").addClass("show");
    //             $("tr.provisioning").removeClass("provisioning");
    //             $(".spin-wrapper").addClass("hide");
    //             $(".provision-status").addClass("hide");

    //             clearInterval(provisioning);
    //             console.log("notify-green");
    //         }, 12000);
    //     //This should be 12000
    // }

    // //Notifications 
    // //Step 1
    // $("#notify-green a#restage-app").on('click', function() {
    //     $("#notify-green").removeClass("show");
    //     setTimeout(
    //         function() {
    //             $("#notify-warn-1").addClass("show");
    //             //Added time to stop accidental double click
    //         }, 500);
    // });

    // //Step 2
    // $("#notify-warn-1 a#restage-app").on('click', function() {
    //     $("a#restage-app .hide").removeClass("hide");
    //     $("a#restage-app span").text("RESTAGING");
    //     $("a#cancel").addClass("hide");

    //     setTimeout(
    //         function() {
    //             $("#notify-warn-1").removeClass("show");
    //             $("#notify-green-2").addClass("show");
    //         }, 4000);




    // });





});
