// ==UserScript==
// @name LightSide
// @description The light side of stack
// @namespace TravisJ
// @author TravisJ
// @include http://meta.stackoverflow.com/*
// @include http://stackoverflow.com/*
// @include http://*.stackexchange.com/*

function $$(f) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = "(" + f.toString() + ")(jQuery)";
    document.body.appendChild(script).parentNode.removeChild(script);
};

//Main/Meta Link
$$(function(){
 var url = window.location.toString().replace("http://","");
 var re = new RegExp(/^[^\/]*/);
 var site = url.match(re)[0];
 if ( site.indexOf("meta.") != -1 ) {
  $(".topbar-menu-links").prepend("<a href='http://"+site.replace("meta.","")+"'>main</a>");
 } else {
  $(".topbar-menu-links").prepend("<a href='http://meta."+site+"'>meta</a>");
 }
});

//Everyone's favorite hover
$$(function($){
 $('.profile-me').children(":first").addClass('profile-link');
 var d = StackExchange.helpers.DelayedReaction(function () {
  profileLink.show()
  }, 450, { always: function () {
  j.cancel() }
 });
 var j = StackExchange.helpers.DelayedReaction(function () {
  profileLink.hide()
  }, 1E3, { always: function () {
  d.cancel() }
 });
 $('.profile-link').mouseenter(d.trigger);
 $('.profile-me').mouseleave(j.trigger);
});

//Replace name
$$(function($) {
 $(".profile-me > div:first").append("<span class='links-container' style='padding-right:2px;'>" + $(".profile-me > div:first").attr('title') + "</span>");
 $('.links-container > .reputation').css({fontWeight:'bold'});
});

//adjusting styles which were being overriden from the css file
$$(function($){
 $('.topbar .topbar-links .topbar-flair .reputation, .topbar .topbar-links .topbar-flair .badgecount').css('color','inherit');
 $('.topbar .topbar-links .topbar-menu-links a, .topbar .topbar-links .topbar-menu-links a:visited').css('color','inherit');
 $('.topbar .icon-site-switcher').css('background-position','10px -51px');
});

