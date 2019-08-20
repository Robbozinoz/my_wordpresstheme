<?php

function myfirsttheme_assets()
{
    wp_enqueue_style('myfirsttheme-stylesheet', get_template_directory_uri() . '/dist/assets/css/main.css', array(), '1.0.0', 'all');

    wp_enqueue_script('myfirsttheme-scripts', get_template_directory_uri() . '/dist/assets/js/bundle.js', array(), true);
}

add_action('wp_enqueue_scripts', 'myfirsttheme_assets');

function myfirsttheme_admin_assets()
{
    wp_enqueue_style('myfirsttheme-admin-stylesheet', get_template_directory_uri() . '/dist/assets/css/admin.css', array(), '1.0.0', 'all');
}

add_action('admin_enqueue_scripts', 'myfirsttheme_admin_assets');
