/* global $*/
/* eslint-disable indent */
/* eslint-disable strict */
function generateDiv(itemName){
    return `
      <li>
        <span class="shopping-item">${itemName}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
    `;
}


function addItem() {
    $('#js-shopping-list-form').on('submit', function (event) {
       event.preventDefault();
       const addedItem = $(this).find(
           'input[name="shopping-list-entry"]').val();

       $('.shopping-list').append(generateDiv(addedItem));
    // console.log(generateDiv(addedItem));
    });
}

 $(addItem);

 function deleteItem(){
  // $('.shopping-item-delete').on('click', function(event) {
  //   $(this).parents().eq(1).remove();

  
  // });
  $('.shopping-list').on('click', '.shopping-item-delete', function(event){
    $(this).closest('li').remove();
  });
 }
 
 $(deleteItem);

 function checkItem(){
  // $('.shopping-item-toggle').on('click', function(event) {
  //   $(this).parents().eq(1).toggleClass('shopping-item__checked');
  // });
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
}

$(checkItem);