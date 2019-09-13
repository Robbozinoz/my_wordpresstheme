import $ from 'jquery';
import strip_tags from './helpers/strip-tags';

//Bind customisor api to html selected by class name
wp.customize('blogname', (value) => {
    value.bind((to) => {
        $('.c-header__blogname').html(to);
    })
})

//Bind customisor api to html selected by class name
wp.customize('_themename_site_info', (value) => {
    value.bind((to) => {
        $('.c-site-info__text').html(strip_tags(to, '<a>'));
    })
})