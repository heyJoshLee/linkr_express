this["JST"] = this["JST"] || {};

this["JST"]["nav"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<a href=\"/logout\"> Logout</a>";
},"3":function(container,depth0,helpers,partials,data) {
    return " <a href=\"/login\"> Login</a>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul><li><a href=\"/\"> Home </a></li><li class=>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.user : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</li><li class=\"new_post\"> <a id=\"new_post\" href=\"/posts/new\"> New Post</a></li><li class=\"new_category\"> <a href=\"/categories/new\"> New Category</a></li><li class=\"categories\"> <a href=\"/categories\"> Categories</a></li></ul>";
},"useData":true});

this["JST"]["new_category"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>New category</h1><form class=\"new_category\" action=\"/categories/new\" method=\"post\"><p> Category Name</p><input type=\"text\" name=\"name\"><input type=\"submit\" value=\"New Category\"></form>";
},"useData":true});

this["JST"]["new_post"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<label>"
    + alias2(alias1(depth0, depth0))
    + "<input(type=\"checkbox\" name=\"categories[]\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.category : depth0)) != null ? stack1.name : stack1), depth0))
    + "\")></label>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h1>New Post</h1><form class=\"new_post\" action=\"/posts/new\" method=\"post\"><label for=\"title_input\">Title</label><input id=\"title_input\" type=\"text\" name=\"title\"><label for=\"body_input\">Body</label><textarea id=\"body_input\" type=\"textarea\" name=\"body\" rows=\"12\"></textarea><label for=\"image_input\">Image Link</label><input id=\"image_input\" type=\"text\" name=\"image\"><p>Categories<p>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<input type=\"submit\" value=\"Create new post\" ></form>";
},"useData":true});

this["JST"]["post"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<li><a href=\"categories/"
    + alias2(alias1(depth0, depth0))
    + "\" class=\"to_category\">"
    + alias2(alias1(depth0, depth0))
    + "</a></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"post_show\"><h1> "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " </h1><img src=\""
    + alias4(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data}) : helper)))
    + "\", alt=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" /><p>"
    + alias4(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper)))
    + "</p><ul>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><ul><li>Edit</li><li>Delete</li></ul></div>";
},"useData":true});

this["JST"]["post_preview"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<li><a href=\"categories/"
    + alias2(alias1(depth0, depth0))
    + "\" class=\"to_category\">"
    + alias2(alias1(depth0, depth0))
    + "</a></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><div class=\"post_preview\"><a href=\"/posts/"
    + alias4(((helper = (helper = helpers.slug || (depth0 != null ? depth0.slug : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slug","hash":{},"data":data}) : helper)))
    + "\" class=\"to_post\"><img class=\"thumb\" src=\""
    + alias4(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data}) : helper)))
    + "\" alt=\"\"></a><div class=\"preview_info\"><a href=\"/posts/"
    + alias4(((helper = (helper = helpers.slug || (depth0 != null ? depth0.slug : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slug","hash":{},"data":data}) : helper)))
    + "\" class=\"to_post\"><h1>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1></a><ol>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ol><p>"
    + alias4(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper)))
    + "</p><p>"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</p></div></div></li>";
},"useData":true});

this["JST"]["posts"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h1>"
    + container.escapeExpression(((helper = (helper = helpers.category_name || (depth0 != null ? depth0.category_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"category_name","hash":{},"data":data}) : helper)))
    + " </h1>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<h1> All</h1>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.category_name : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "<ul id=\"all_posts\"><!-- posts will be inserted into here --></ul>";
},"useData":true});