<?php

//---Site wide function for extarcting a variety of post meta
//---Enusre fnuction name is unique for submission to theme markets, avoiding conflicts
//---IMPORTANT-----URL/Htmla and Attributes escaped as standard

if (!function_exists('_themename_post_meta')) {
    function _themename_post_meta()
    {
        /*---Addition of printf function to translate strings in function---*/
        /*translators: %s: Post date*/
        printf(
            esc_html__('Posted on %s', '_themename'),
            '<a href="' . esc_url(get_permalink()) . '">
                <time datetime="' . esc_attr(get_the_date('c')) . '">' . esc_html(get_the_date()) . '</time></a>'
        );
        /*translators: %s: Author name*/
        printf(
            esc_html__(' By %s', '_themename'),
            '<a href="' . esc_url(get_author_posts_url(get_the_author_meta('ID'))) . '">' . esc_html(get_the_author()) .
                '</a>'
        );
    }
}

//Concatenated function for site wide Read more links
function _themename_readmore_link()
{
    echo '<a class="c-post__readmore" href="' . esc_url(get_permalink()) . '" title="' . the_title_attribute(['echo' => false]) . '">';

    /*translators: %s: Post title*/
    printf(
        //Strip the span tags and add them to the array of allowed html alongwith any classes to be used
        wp_kses(
            __('Read More  <span class="u-screen-reader-text">About: %s</span>', '_themename'),
            [
                'span' => [
                    'class' => []
                ]
            ]
        ),
        get_the_title()
    );
    echo '</a>';
}

//Function to add an anchor tag which adds actions to delete post
function _themename_delete_post()
{
    $url = add_query_arg([
        'action' => '_themename_delete_post',
        'post' => get_the_ID()
    ], home_url());

    //if the user has permission to delete display the "Delete" button
    if (current_user_can('delete_post', get_the_ID())) {
        return "<a href='" . esc_url($url) . "'>" . esc_html__('Delete Post', '_themename') . "</a>";
    }
}
