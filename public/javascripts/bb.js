var Post = Backbone.Model.extend({
});

var Posts = Backbone.Collection.extend({
  url: "/categories/all"
});

var posts = new Posts();

var PostThumbView = Backbone.View.extend({
  model: new Post(),
  template: JST["post_preview"],
  events: {
    "click .category_tag": "updateCurrentCategory"
  },

  updateCurrentCategory: function(e) {
    e.preventDefault();
    showLoader();
    var url = e.target,
        category_name = this.$el.find(".category_tag").attr("href").split("/").pop();
    posts_view.current_category = category_name;
    posts_view.model.fetch({url: url});
    hideLoader();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});

var PostsView = Backbone.View.extend({
  model: posts,
  el: $(".page"),
  template: JST["posts"],
  current_category: "All",

  initialize: function() {
    this.model.fetch();
    this.render();
    this.model.on("add", this.render, this);
    this.model.on("change", this.render, this);
    this.model.on("remove", this.render, this);
  },

  render: function() {
    var self = this;
    this.$el.html(this.template({category_name: this.current_category}));

    _.each(this.model.toArray(), function(post) {
      self.$el.find("ul").append((new PostThumbView({model: post})).render().$el)
    })
  }
});

function hideLoader() {
  $(".loader, .loader-bg").fadeOut(200);
}

function showLoader() {
  $(".loader, .loader-bg").fadeIn(200);
}


var posts_view = new PostsView();
