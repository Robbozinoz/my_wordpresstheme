<?php
/*
Plugin Name: _themename _pluginname
Plugin URI:
Description: Adding Shortcodes for _themename
Version: 1.0.0
Author: John Robertson
Author: https://www.myjamjar.com.au
License: GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: _themename-_pluginname
Domain Path: /languages
*/

//This stops unauthorised access to index.php using session authentication

if (!defined('WPINC')) {
    die;
}

//Function prioritised to run last to remove any empty p tags from the browser
function _themename__pluginname_clean_p_tags($content)
{
    return preg_replace('#<p>(\s|&nbsp;)*+(<br\s*/*>)*(\s|&nbsp;)*</p>#i', '', force_balance_tags($content));
}

add_filter('the_content', '_themename__pluginname_clean_p_tags', 20, 1);

function _themename__pluginname_init()
{
    //Include the button shortcode function
    include_once('includes/shortcodes/button/button.php');
    //Include the slider shortcode function
    include_once('includes/shortcodes/slider/slider.php');
}

add_action('init', '_themename__pluginname_init');
//Include the assets code
include_once('includes/enqueue-assets.php');
