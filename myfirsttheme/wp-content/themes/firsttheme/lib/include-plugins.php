<?php

//Load the class for use
require_once get_template_directory() . '/lib/class-tgm-plugin-activation.php';

add_action('tgmpa_register', '_themename_register_required_plugins');

function _themename_register_required_plugins()
{
    //Array of required pugins
    $plugin = array(
        array(
            'name' => '_themename metaboxes',
            'slug' => '_themename-metaboxes',
            'source' => get_template_directory_uri() . '/lib/plugins/myfirsttheme-metaboxes.zip',
            'required' => true,
            'version' => '1.0.0',
            'force_activation' => false,
            'force_deactivation' => false,
        )
    );

    //Array of configuration arguments for class
    $config = array();

    tgmpa($plugin, $config);
}
