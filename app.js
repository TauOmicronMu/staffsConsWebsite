/**
 * Created by tom on 26/03/16.
 */
$(document).ready(function() {
    var menuOpen = false;

    function openMenu(){
        $('.menu').animate({
            left: "0px"
        }, 200);

        $('body').animate({
            left: "285px"
        }, 200);
    }

    function closeMenu(){
        $('.menu').animate({
            left: "-285px"
        }, 200);

        $('body').animate({
            left: "0px"
        }, 200);
    }

    $('.icon-menu').click(function() {
        if(menuOpen){
            closeMenu();
            menuOpen = false;
        }
        else {
            openMenu();
            menuOpen = true;
        }
    });
});