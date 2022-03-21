angular.module('app', ['jkuri.gallery']).
  controller('Ctrl', function($scope, $document) {
    var self = this;
    self.images = [
      {thumb: 'images/thumbs/1.jpg', img: 'images/1.jpg'},
          {thumb: 'images/thumbs/2.jpg', img: 'images/2.jpg'},
          {thumb: 'images/thumbs/3.jpg', img: 'images/3.jpg'},
          {thumb: 'images/thumbs/4.jpg', img: 'images/4.jpg'},
          {thumb: 'images/thumbs/5.jpg', img: 'images/5.jpg'},
          {thumb: 'images/thumbs/6.jpg', img: 'images/6.jpg'}
    ];
  }
);