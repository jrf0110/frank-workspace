var TransposableList = module.exports = function( list ){
  return Object.create({
    list: list

  , transposeLeft: function(){
		var elementOne = this.list.shift();
		this.list.push(elementOne);
      return this;
    }

  , transposeRight: function(){
      	var elementOne = this.list.pop();
		this.list.unshift(elementOne);
      return this;
    }
  });
};