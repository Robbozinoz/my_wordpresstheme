<?php

//Load only the amdin js and css for the admin panel of the plun metaboxes
function _themename__pluginname_scripts()
{
    //Check if page is not a post page and if so stop function
    wp_enqueue_script('_themename-_pluginname-scripts', plugins_url(
        '_themename-shortcodes/dist/assets/js/bundle.js'
    ), array(), '1.0.0', true);
    wp_enqueue_style('_themename-_pluginname-stylesheet', plugins_url(
        '_themename-shortcodes/dist/assets/css/bundle.css'
    ), array(), '1.0.0', 'all');
}
add_action('wp_enqueue_scripts', '_themename__pluginname_scripts');
