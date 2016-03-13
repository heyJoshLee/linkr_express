var Post = Backbone.Model.extend({
  defaults: {
    title: "Title",
    body: "Body",
    author: "Author",
    img: "",
    slug: "",
    categories: "",
    date: ""
  }
});

var Posts = Backbone.Collection.extend({
  url: "/categories/all"
});

var posts = new Posts();

var PostThumbView = Backbone.View.extend({
  model: new Post(),
  template: JST["post_thumb"],

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});

var PostsView = Backbone.View.extend({
  model: posts,
  el: $("main"),

  initialize: function() {
    this.model.fetch();
    this.render();
    this.model.on("add", this.render, this);
  },

  render: function() {
    var self = this;
    this.$el.html("");

    _.each(this.model.toArray(), function(post) {
      self.$el.append((new PostThumbView({model: post})).render().$el)
    })
  }
});


var posts_view = new PostsView();
