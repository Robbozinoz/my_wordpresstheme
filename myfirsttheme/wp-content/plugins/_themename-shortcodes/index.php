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


function _themename__pluginname_init()
{
    //Include the button shortcode function
    include_once('includes/shortcodes/button/button.php');
}

add_action('init', '_themename__pluginname_init');
//Include the assets code
include_once('includes/enqueue-assets.php');
