(function(d){AJS.toInit(function(){e();c();b();a()});var e=function(){d(".sv-theme-splitter").splitter({type:"v",resizeToWidth:true,minLeft:0,sizeLeft:300,maxLeft:500,cookie:"sv-theme-splitter",anchorToWindow:true,cookiePath:"/",accessKey:"l"});d(window).trigger("resize");d(".sv-theme-splitter").length&&d("html").addClass("sv-theme-splitter-initialized")};var c=function(){if(d("#breadcrumbs li").length>3){d("#breadcrumbs li:not(:first-child, :nth-child(2), :last-child)").hide();d("#breadcrumbs li:nth-child(2)").after("<li id='ellipsis' title='Show all breadcrumbs'><span><strong>…</strong></span></li>");d("#breadcrumbs #ellipsis").bind("click",function(){d("#breadcrumbs li:not(:first-child, :nth-child(2), :last-child)").show();d(this).remove()})}};var b=function(){d("#title-heading .space-logo a").attr("href",contextPath+"/display/"+AJS.params.spaceKey)};var a=function(){var f="sv-banner-message-";(function h(){d.each(d(".sv-message"),function(){var j=d(this).data("id");if(d.cookie(f+j)){d(this).remove()}})})();(function g(){if(d(".sv-banner *").length){setTimeout(function(){d(".sv-banner").slideDown()},500)}})();(function i(){d(".closeable .icon-close").click(function j(){var l=d(this).parent(".sv-message").data("id");var k=d(this).parent(".sv-message").data("showAgain");d.cookie(f+l,"hide",{expires:k})})})()}})(AJS.$);