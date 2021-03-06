<?php
/*
Plugin Name: _themename _pluginname
Plugin URI:
Description: Adding Metaboxes for _themename
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

//Include the metaboxes and assets code
include_once('includes/metaboxes.php');
include_once('includes/enqueue-assets.php');
