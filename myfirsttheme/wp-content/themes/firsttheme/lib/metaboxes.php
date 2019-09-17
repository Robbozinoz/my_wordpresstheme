<?php

//Function to create the metabox scaffold
function _themename_add_meta_box()
{
    add_meta_box('_themename_post_metabox', esc_html__('Post Settings'), '_themename_post_metabox_html', 'post', 'normal', 'default');
}

add_action('add_meta_boxes', '_themename_add_meta_box');

//Function to control the html output of the metabox
function _themename_post_metabox_html($post)
{
    //Variable for the Post setting subtitle value
    $subtitle = get_post_meta($post->ID, '__themename_post_subtitle', true);

    //Variable for the drop down menu field value
    $layout = get_post_meta($post->ID, ' __themename_post_layout', true);

    //Add a nonce to the save post mneta function
    wp_nonce_field('_themename_update_post_metabox', '_themename_update_post_nonce');
    ?>
    <p>
        <label for="">
            <?php esc_html_e('Post Subtitle', '_themename'); ?>
        </label>
        <br />
        <!--Add value of the Post Subtitle field to the input and escape-->
        <input class="widefat" type="text" name="_themename_post_subtitle_field" id="_themename_post_metabox_html" value="<?php echo esc_attr($subtitle); ?>" />
    </p>
    <p>
        <label for="_themename_post_layout_field"><?php esc_html_e('Layout', '_themename'); ?></label>
        <select name="_themename_post_layout_field" id="_themename_post_layout_field" class="widefat">
            <option <?php selected($layout, 'full'); ?> value="full"><?php esc_html_e('Full Width', '_themename'); ?></option>
            <option <?php selected($layout, 'sidebar'); ?> value="sidebar"><?php esc_html_e('Post with Sidebar', '_themename'); ?></option>
        </select>
    </p>
<?php
}

//Function to save the post content in the database - wp does not do this automatically
function _themename_save_post_metabox($post_id, $post)
{
    //Check dynamically for the post type and reuse in the $edit-cap variable
    $edit_cap = get_post_type_object($post->post_type)->cap->edit_post;
    if (!current_user_can($edit_cap, $post_id)) {
        return;
    }
    //Check if the nonce in _themename_post_metabox_html exists and is valid
    if (!isset($_POST['_themename_update_post_nonce']) || '_themename_update_post_metabox') {
        return;
    }

    //Check that the meta key exists in the global post variable
    if (array_key_exists('_themename_post_subtitle_field', $_POST)) {
        update_post_meta(
            $post_id,
            '__themename_post_subtitle',
            //Clean the value place in the databse for use in the $sibtitle variable
            sanitize_text_field($_POST['_themename_post_subtitle_field'])
        );
    }

    //Check that the meta key for post layout dropdownexists in the global post variable
    if (array_key_exists('_themename_post_layout_field', $_POST)) {
        update_post_meta(
            $post_id,
            '__themename_post_layout',
            //Clean the value place in the databse for use in the $sibtitle variable
            sanitize_text_field($_POST['_themename_post_layout_field'])
        );
    }
}

add_action('save_post', '_themename_save_post_metabox', 10, 2);
