<?php
//Shortcode function addtion- be sure to activate Classic Editor
function _themename_button($atts = [], $content = null, $tag = '')
{
    //Use extract to also enable attributes as php variables - $color, $text
    extract(shortcode_atts([
        'color' => 'red',
        'text' => 'Button'
    ], $atts, $tag));

    return '<button class="_themename_button" style= "background-color:' .  esc_attr($color) . '">' . do_shortcode($content) . '</button>';
}
add_shortcode('_themename_button', '_themename_button');
