import $ from 'jquery';

//Add open class to menu links to control display property flex or block and close close submenus not in focus
$('.c-navigation').on('mouseenter', '.menu-item-has-children', (e) => {
    if (!$(e.currentTarget).parents('.sub-menu').length) {
        $('.menu >  .menu-item.open').find('> a > .menu-button').trigger('click');
    }
    $(e.currentTarget).addClass('open');
}).on('mouseleave', '.menu-item-has-children', (e) => {
    $(e.currentTarget).removeClass('open');
});


////On clicking an open submenu find show/hide classes and apply aria hidden logic using parent sibling dom control
//On click change aria hidden and aria expanded attributes to opposite to enable screen reader access
$('.c-navigation').on('click', '.menu .menu-button', (e) => {
    e.preventDefault();
    e.stopPropagation();
    let menu_button = $(e.currentTarget);
    let menu_link = menu_button.parent();
    let menu_item = menu_link.parent();
    if (menu_item.hasClass('open')) {
        menu_item.add(menu_item.find('.menu-item.open')).removeClass('open');
        menu_link.add(menu_item.find('a')).attr('aria-expanded', 'false');
        menu_button.find('.menu-button-show').attr('aria-hidden', 'false');
        menu_button.find('.menu-button-hide').attr('aria-hidden', 'true');
    } else {
        menu_item.siblings('.open').find('>a>.menu-button').trigger('click');
        menu_item.addClass('open');
        menu_link.attr('aria-expanded', 'true');
        menu_button.find('.menu-button-show').attr('aria-hidden', 'true');
        menu_button.find('.menu-button-hide').attr('aria-hidden', 'false');
    }
});

//If a user clicks in the page but outside the menu -close open menus
$(document).click((e) => {
    if ($('.menu-item.open').length) {
        $('.menu > .menu-item.open > a > .menu-button').trigger('click');
    }
})