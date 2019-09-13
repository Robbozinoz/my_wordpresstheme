import $ from 'jquery';
import strip_tags from './helpers/strip-tags';

//Bind customisor api to html selected by class name
wp.customize('blogname', (value) => {
    value.bind((to) => {
        $('.c-header__blogname').html(to);
    })
})

//Bind customisor api to html selected by id name for inline style
wp.customize('_themename_accent_colour', (value) => {
    value.bind((to) => {
        //JavaScript version of the array loop in inline-css.fa-php
        //Define the variables
        let inline_css = ``;
        let inline_css_obj = _themename['inline-css'];

        //Loop through each element/selector listed in inline-css
        for (let selector in inline_css_obj) {
            //Append selector to variable for inner loop
            inline_css += `${selector} {`
            for (let prop in inline_css_obj[selector]) {
                //Assign value of key to $val
                let val = inline_css_obj[selector][prop];
                //Use wp function in customize to get the value of $val and append to create css style line
                inline_css += `${prop}: ${wp.customize(val).get()}`;
            }
            inline_css += `}`;
        }

        //Bind output of loop to the inline style element id
        $('#_themename-stylesheet-inline-css').html(inline_css);
    })
})

//Bind customisor api to html selected by class name
wp.customize('_themename_site_info', (value) => {
    value.bind((to) => {
        $('.c-site-info__text').html(strip_tags(to, '<a>'));
    })
})