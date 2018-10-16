//Storage controller

//Item Controller
const ItemCtrl = (function(){
  //Item constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  //Data structure 
  const data = {
    items: [
      {id: 0, name: 'Steak Dinner', calories: 1200},
      {id: 1, name: 'Cookie', calories: 400},
      {id: 2, name: 'Eggs', calories: 300},
    ],
    currentItem: null,
    totalCalories: 0,
  }


  
  //Public methods
  return {
    logData: function (){
      return data;

    }
  }

})();

//UI Controller

const UICtrl = (function(){

  //Public methods
  return {

  }
  
})();

//APP Controller

const App = (function(ItemCtrl, UICtrl){
  //Publlic methods
  return {
    init: function(){
      console.log('Initing app....')
    }
  }

})(ItemCtrl, UICtrl);

//Init app

App.init();
