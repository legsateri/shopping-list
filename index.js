/*INSTRUCTIONS*/

//modify this shopping list app so users can do the following:
    //enter items they need to purchase by entering text and hittin "return" or clicking the "add item" button
    //check and uncheck items on the list by clicking the "check" button
    //permanently remove items from the list

$(function(){
    //set up event listener
    $('#js-shopping-list-form').submit(event => {
        //stop default form submissions
        event.preventDefault();
        //use .val to grab current value of form input
        const newItem = $('#shopping-list-entry').val();
        //clear text from form input so you can do another one
        $('#shopping-list-entry').val('');
        //add new list item as a new <li>
        $('.shopping-list').append(
            `<li>
            <span class="shopping-item">${newItem}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>`
        );
    });

    //listen for click event, delete button edition
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        //listening to parent element, so this will find the closest <li> and remove it
        $(this).closest('li').remove();
    });

    //listen for click event, check button edition
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        //finds the closest <li> and toggles it so it's crossed out. 
        //question: i did this exact thing but as ".shopping-item__checked" initially because it's a class in the html but it didn't work until after I removed the ".", not sure why. is it something to do with it being the second class for the element?
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
})