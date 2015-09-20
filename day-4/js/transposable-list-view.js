// <div class="box" style="background: blue;"></div>

var TransposableListView = function( $el, tlist, options ){
  return Object.create({
    render: function(){
     var htmlResult = '';

     tlist.list.forEach( function( colorValue, index){
     	htmlResult += '<div class="box" style="background:' +colorValue + ';"></div>'
     });

      $el.html(htmlResult);
      return this;
    }

  , initEvents: function(){
      
    }
  });
};