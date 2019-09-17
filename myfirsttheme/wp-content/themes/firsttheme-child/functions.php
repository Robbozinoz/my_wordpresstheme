<?php

//New stylesheet
add_action('wp_enqueue_scripts', 'firsttheme_child_scripts');

function firsttheme_child_scripts()
{
    wp_enqueue_style(
        'firsttheme-child-styles',
        get_stylesheet_directory_uri() . '/bundle.css',
        array('_themename-stylesheet'),
        '1.0.0',
        'all'
    );
}



//Code after pagination on index.php
function after_pagination()
{
    echo '<br>This is the after pagination text';
}

function after_pagination2()
{
    echo '<br>This is the second after pagination text';
}

//Add mulptiple action to hook arguments for priority can be added
add_action('_themename_after_pagination', 'after_pagination');
add_action('_themename_after_pagination', 'after_pagination2');

//Testing of add and remove action functions from core
add_action('pre_get_posts', 'function_to_add', 10, 1);

function function_to_add($query)
{
    if ($query->is_main_query()) {
        $query->set('posts_per_page', 3);
    }
}

//remove_action('pre_get_posts', 'function_to_add', 10, 1);

function myfirsttheme_no_post_text($text)
{
    //Keeping esc_html_e ------echo $text . ' John has added this!';
    //return $text . ' John has added this!';

    //Identifying where child theme creator should code
    return esc_html__('No Posts', 'thisisa-child');
}

add_filter('_themename_myfirsttheme_no_post_text', 'myfirsttheme_no_post_text');

//Simple filter on core hook
//function filter_title($title)
//{
  //  return 'Filtered ' . $title;
//}

//add_filter('the_title', 'filter_title');
