// ==UserScript==
// @name LightSide
// @description The light side of stack
// @namespace TravisJ
// @author TravisJ
// @include http://meta.stackoverflow.com/*
// @include http://stackoverflow.com/*

function $$(f) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = "(" + f.toString() + ")(jQuery)";
    document.body.appendChild(script).parentNode.removeChild(script);
};

//Main/Meta Link
$$(function(){
 //main/meta link script authored by @Undo
 if ( document.location.host.indexOf("meta.") == 0 ) {
  $(".topbar-menu-links").prepend("<a href='http://" + document.location.host.slice(5) + "'>main</a>");
 } else {
  $(".topbar-menu-links").prepend("<a href='http://" + document.location.host + "'>meta</a>");
 }
});

//Replace name
$$(function($) {
 $(".profile-me > div:first").append("<span class='links-container' style='padding-right:2px;'>" + $(".profile-me > div:first").attr('title') + "</span>");
 $('.reputation').css({fontWeight:'bold'});
});

//adjusting styles which were being overriden from the css file
$$(function($){
 $('.topbar .topbar-links .topbar-flair .reputation, .topbar .topbar-links .topbar-flair .badgecount').css('color','inherit');
 $('.topbar .topbar-links .topbar-menu-links a, .topbar .topbar-links .topbar-menu-links a:visited').css('color','inherit');
 $('.topbar .icon-site-switcher').css('background-position','10px -51px');
});

