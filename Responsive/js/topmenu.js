﻿jQuery(document).ready(function () {
    var gaverder = true;

    var Click = function () {        
        var gaverder = true;
        event.stopPropagation();
        event.preventDefault();
        if (jQuery(this).hasClass('active')) {
            gaverder = false;
        }
        // Een ander menu item staat open
        if (gaverder) {
            // Vouwt openstaande dicht       
            jQuery('.drop-down-clickme.active > ul').hide();
            jQuery('.drop-down-clickme.active').removeClass('active');
            // Vouwt deze open
            if (jQuery(this).children('ul').is(':visible') == false) {
                jQuery(this).addClass('active');
                jQuery(this).children('ul').fadeIn("fast").show();
            }

        }
            // Hetzelfde menuitem dicht behalve bij hover
        else {
            if (!jQuery(this).hasClass('disabled')) {
                jQuery(this).children('ul').hide();
                jQuery('.drop-down-clickme.active').removeClass('active');
            }
        }
        //Verander gaverder variabele waardoor volgende functie niet uitgevoerd wordt
        gaverder = false;
    };

    var Flyout = function () {
        var gaverder = true;
        if (jQuery(this).hasClass('active')) {
            gaverder = false;
        }
        // Huidige hover staat nog niet open
        if (gaverder) {
            // Vouwt openstaande dicht       
            jQuery('.drop-down-clickme.active > ul').hide();
            jQuery('.drop-down-clickme.active').removeClass('active');
            jQuery('.drop-down-clickme').removeClass('disabled');

            // Vouwt deze open
            if (jQuery(this).children('ul').is(':visible') == false) {
                jQuery(this).addClass('active');
                jQuery(this).children('ul').fadeIn("fast").show();
                jQuery(this).addClass('disabled');
                
            }
        }
        //Verander gaverder variabele waardoor volgende functie niet uitgevoerd wordt
        gaverder = false;
    };

    var Flyin = function () {
        var gaverder = true;
        // Huidige hover staat nog niet open
        if (gaverder) {
            // Vouwt openstaande dicht       
            jQuery('.drop-down-clickme.active > ul').hide();
            jQuery('.drop-down-clickme.active').removeClass('active');
        }
        //Verander gaverder variabele waardoor volgende functie niet uitgevoerd wordt
        gaverder = false;
    };
    jQuery(".drop-down-clickme").on("click touchend", Click);
    jQuery(".drop-down-clickme").hoverIntent({
        over: Flyout,
        out: Flyin,
        timeout: 100,
        interval: 100

    });
    // Vouwt de openstaande dicht als ergens in de body geklikt wordt
    jQuery("html").bind("click touchend", function () {
        event.stopPropagation();
        if (gaverder) {
            jQuery('.drop-down-clickme.active > ul').slideUp(0);
            jQuery('.drop-down-clickme.active').removeClass('active');
        }
        gaverder = true;
    });
    // Behalve als er in het openstaande menu geklikt wordt
    jQuery('.drop-down-clickme > ul').bind("click touchend", function () {
        event.stopPropagation();
    });
});