;(function () {
  function Emoji (name, src) {
    this.model = new Emoji.Model(name, src);
    this.view = new Emoji.View(this.model.name, this.model.src);
  }

  Emoji.prototype.appendTo = function (dom) {
    this.view.appendTo(dom);
  }

  Emoji.View = function (modelName, modelSrc) {
    this.$el = $('<div>').addClass('emoji');
    this.$el.append( $('<img>').attr('src', modelSrc) );
    this.$el.append( $('<div>').text(modelName) );
  }
  Emoji.View.prototype.appendTo = function (dom) {
    this.$el.appendTo(dom);
  }
  Emoji.Model = function (name, src) {
    this.name = name;
    this.src = src;
  }

  // $.ajax({
  //   url: 'https://api.github.com/emojis',
  //   'Content-Type': 'application/json',
  //   success: function (res) {
  //     console.log(res);
  //   }
  // })

  // at this point, GitHub got mad at the number of requests I was making
  // so it stopped allowing me to make AJAX requests. I had to wing it,
  // so I mocked the response that I would have gotten if GitHub weren't mad at me.
  
  var mockAjaxResponse = {
    "+1": "https://github.global.ssl.fastly.net/images/icons/emoji/+1.png?v5",
    "-1": "https://github.global.ssl.fastly.net/images/icons/emoji/-1.png?v5",
    "100": "https://github.global.ssl.fastly.net/images/icons/emoji/100.png?v5",
    "1234": "https://github.global.ssl.fastly.net/images/icons/emoji/1234.png?v5",
    "8ball": "https://github.global.ssl.fastly.net/images/icons/emoji/8ball.png?v5",
    "a": "https://github.global.ssl.fastly.net/images/icons/emoji/a.png?v5",
    "ab": "https://github.global.ssl.fastly.net/images/icons/emoji/ab.png?v5"
  }

  for (var name in mockAjaxResponse) {
    var src = mockAjaxResponse[name];
    (new Emoji(name, src)).appendTo(document.body);
  }
})();