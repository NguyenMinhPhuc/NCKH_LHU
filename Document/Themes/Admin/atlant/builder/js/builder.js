$(document).ready(function(){ 
    
    $("#builder_layout").modal("show");
    
    $.builder = {};
    
    $.builder.destroy = function(options){
        $("body").attr("class","");
        $(".page-container").remove();
        $("#builder_layout").modal("show");
    }
    
    $.builder.load = function(options){        
        $.get("../builder/templates/"+options.category+"/"+options.type+".html",function(data){
            
            if(options.category == 'layouts') $(".page-container").remove();
            
            if(null !== options.body) $("body").addClass(options.body);
            
            if($("input.layout_boxed").is(":checked"))
                $("body").addClass("page-container-boxed");
            
            $(options.target).prepend(data);
            page_content_onresize();
            page_actions();
            
            $.builder.holder();
            $.builder.remove();
            
            $("#builder_layout").modal("hide");
        });
        
        return false;
    }
    
    $.builder.elements = function(options){
        
        $.get("../builder/templates/elements/"+options.category+"/"+options.item+".html",function(data){
            
            if(null !== options.parent) $(options.target).parent().addClass(options.parent);
            
            if(options.replace === true){
                var tor  = builder_target.parent();
                var tcss = tor.attr("class");                
                var html = $(data).addClass(tcss);
                tor.replaceWith(html);
            }else{
            
                if($(options.target).hasClass("builder-holder-removable"))
                    $(options.target).before(data);
                else
                    $(options.target).append(data);
                
            }            
            
            page_content_onresize();
            page_actions();
            
            $.builder.holder();
            $.builder.remove();            
            
            builder_target = false;
            $("#builder_header").modal("hide");
            $("#builder_content").modal("hide");
        });
    }
    
    $.builder.remove = function(){
                
        $(".builder-remove").each(function(){
            $(this).find("> .builder-remove-link").remove();
            $(this).append($("<a href='#'>x</a>").addClass("builder-remove-link"));            
        });
        
        $(".builder-remove").on("click",".builder-remove-link",function(){

            $(this).parent(".builder-remove").animate({opacity: 0},200,function(){
                $(this).remove();
            });
            return false;
            
        });
        
    }
    
    $.builder.holder = function(){
        
        $("body").on("click",".builder-holder",function(){       
            if($(this).hasClass("x-navigation-horizontal")){
                $("#builder_header").modal("show");
            }else{
                builder_target = $(this);
                $("#builder_content").modal("show");
                $("#builder_content .builder-categories").show();
                $("#builder_content .builder-category").removeClass("active");
            }
            
            return false;
        });        
        
    }
    $(".builder-destroy").on("click",function(){        
        $.builder.destroy();
    });
    
    $("#builder_add_alert").on("click",function(){
        var alert = $("<div></div>").addClass("alert");
        alert.html('<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">×</span></button>');

        alert.addClass($(".alert_style").val());                
        alert.prepend($(".alert_text").val());
        
        builder_target.before(alert);
        builder_target = false;
        $("#builder_header").modal("hide");
        $("#builder_content").modal("hide");
    });
    
    $("#builder_add_button").on("click",function(){
        var btn = $("<button></button> ").addClass("btn");
                
        btn.addClass($(".button_size > option:selected").val());
        btn.addClass($(".button_color > option:selected").val());
        btn.addClass($(".button_style > option:selected").val());
        btn.addClass($(".button_extra").val());
        btn.html($(".button_text").val());
        
        builder_target.before(btn);
        builder_target = false;
        $("#builder_header").modal("hide");
        $("#builder_content").modal("hide");
    });
    
    $(".builder-disable").on("click",function(){
        $(".builder-holder").each(function(){
            $(this).removeClass("builder-holder").data("builder-holder","1");
        });
        $(".builder-remove").each(function(){
            $(this).removeClass("builder-remove").data("builder-remove","1").find("a.builder-remove-link").remove();
        });
        page_content_onresize();
        page_actions();
    });
    
    $(".builder-enable").on("click",function(){
        $(":data(builder-holder)").each(function(){
            $(this).addClass("builder-holder").data("builder-holder","");
        });
        $(":data(builder-remove)").each(function(){
            $(this).addClass("builder-remove").data("builder-remove","");
        });
        page_actions();
        
        $.builder.holder();
        $.builder.remove();
        
    });
    
    $(".builder-export").on("click",function(){
        //var exp = document.documentElement.outerHTML;        
        
        var exp = $("html").clone();
        exp.find(".modal").each(function(){
            $(this).remove();
        })
        exp.find(".builder-settings").remove();
        exp.find(".builder-holder").removeClass("builder-holder");
        exp.find(".builder-holder-removable").remove();
        exp.find(".builder-remove").removeClass("builder-remove");
        exp.find(".builder-remove-link").remove();
        exp.find("#builder_js").remove();
        
        $.post("../builder/index.php",{'export_data': exp.html()},function(data){
            $("#builder_export_data").val(data);
        });        
        
        $("#builder_export").modal("show");        
    });
    
    $(".builder-settings-icon").on("click",function(){
        $(".builder-settings").toggleClass("active");
    });
    
    $(".builder-categories a").on("click",function(){
        $(".builder-categories").hide();
        $(".builder-category").removeClass("active");
        $($(this).attr("href")).addClass("active");
        return false;
    });
    
    $(".builder-back").on("click",function(){
        $(".builder-categories").show();
        $(".builder-category").removeClass("active");
        return false;
    });
    
});
