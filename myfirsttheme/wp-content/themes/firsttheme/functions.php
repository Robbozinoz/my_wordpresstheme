<?php

require_once('lib/customize.php');
require_once('lib/helpers.php');
require_once('lib/enqueue-assets.php');
require_once('lib/sidebars.php');
require_once('lib/theme-support.php');
require_once('lib/navigation.php');
require_once('lib/include-plugins.php');
require_once('lib/comment-callback.php');

//Define php global width variable for content
if (!isset($content_width)) {
    $content_width = 800;
}

//Function to check if the post has a format and template which uses the sidebar and then convert content width to match template
function _themename_content_width()
{
    global $content_width;
    global $post;

    if (is_single() && $post->post_type === 'post') {
        //State variable to contain various post meta for use in conditionals and furtehr singe post layout
        $layout = _themename_meta($post->ID, '__themename_post_layout', 'full');
        $sidebar = is_active_sidebar('primary-sidebar');

        //If condition to apply full scrneeen width tp post if no active widgets in sidebar
        if ($layout === 'sidebar' && !$sidebar) {
            $layout = 'full';
        }
        //Ternary operator to re-adjust content width global variable
        $content_width = $layout === 'full' ? 800 : 738;
    }
}

add_action('template_redirect', '_themename_content_width');


//To check the delete action and complete 
function _themename_handle_delete_post()
{
    if (isset($_GET['action']) && $_GET['action'] === '_themename_delete_post') {
        //INitiate delete only if nonce is verified
        if (!isset($_GET['nonce']) || !wp_verify_nonce($_GET['nonce'], '_themename_delete_post' . $_GET['post'])) {
            return;
        }
        //Check that a post has been retrieved and attach value to $post_id
        $post_id = isset($_GET['post']) ? $_GET['post'] : null;
        //If a post id is returned get the post content
        $post = get_post((int) $post_id);
        //If empty return out of function with no result
        if (empty($post)) {
            return;
        }

        //If the current user cannot delete return out
        if (!current_user_can('delete_post', $post_id)) {
            return;
        }

        //Use wp core delete function to delete post
        wp_trash_post($post_id);
        //Use wp core internal redirect
        wp_safe_redirect(home_url());

        //Exit to ensire no further code is executed
        die;
    }
}
add_action('init', '_themename_handle_delete_post');
