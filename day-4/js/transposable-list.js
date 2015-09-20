var TransposableList = function( list ){
  return Object.create({
    list: list

  , transposeLeft: function(){
      return this;
    }

  , transposeRight: function(){
      return this;
    }
  });
};