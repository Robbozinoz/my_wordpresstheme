<?php

function _themename_assets()
{
    wp_enqueue_style('_themename-stylesheet', get_template_directory_uri() . '/dist/assets/css/main.css', array(), '1.0.0', 'all');

    //include absolute path to inline style for variable access
    include(get_template_directory() . '/lib/inline-css.php');

    //Add inline style to access accent colour customiser
    wp_add_inline_style('_themename-stylesheet', $inline_styles);

    //wp_enqueue_script('jquery');

    wp_enqueue_script('_themename-scripts', get_template_directory_uri() . '/dist/assets/js/bundle.js', array('jquery'), '1.0.0', true);
}

add_action('wp_enqueue_scripts', '_themename_assets');

function _themename_admin_assets()
{
    wp_enqueue_style('_themename-admin-stylesheet', get_template_directory_uri() . '/dist/assets/css/admin.css', array(), '1.0.0', 'all');

    wp_enqueue_script('_themename-admin-scripts', get_template_directory_uri() . '/dist/assets/js/admin.js', array(), '1.0.0', true);
}

add_action('admin_enqueue_scripts', '_themename_admin_assets');

//Activation of immediate js update of iframe in customizer
function _themename_customize_preview_js()
{
    wp_enqueue_script('_themename-cutomize-preview', get_template_directory_uri() . '/dist/assets/js/customize-preview.js', array('customize-preview', 'jquery'), '1.0.0', true);

    //Make inline styles avriable available to the localize script
    include(get_template_directory() . '/lib/inline-css.php');

    //Use core wp function which makes php variables available to Javascript
    wp_localize_script('_themename-cutomize-preview', '_themename', array('inline-css' => $inline_styles_selectors));
}

add_action('customize_preview_init', '_themename_customize_preview_js');
