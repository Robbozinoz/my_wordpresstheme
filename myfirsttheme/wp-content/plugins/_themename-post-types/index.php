<?php
/*
Plugin Name: _themename _pluginname
Plugin URI:
Description: Adding Custom Post types for _themename
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

include_once('includes/portfolio-post-type.php');
include_once('includes/project-type-tax.php');
include_once('includes/skills-tax.php');
