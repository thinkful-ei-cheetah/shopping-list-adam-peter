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
    $('#shopping-list-entry').on('submit', function (event) {
       event.preventDefault();
       const addedItem = $('#shopping-list-entry').val().text();
       $('u1').append(generateDiv(addedItem));
       console.log(generateDiv(addedItem));
    });
}

$(addItem);

