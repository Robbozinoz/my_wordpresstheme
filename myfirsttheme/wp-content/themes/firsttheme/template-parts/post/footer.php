<footer class="c-post__footer">
    <?php
    //Add category links to single posts
    if (has_category()) {
        echo '<div class="c-post__cats">';
        /* translators: used between categories */
        $cats_list = get_the_category_list(esc_html__(', ', '_themename'));
        /* translators: used between categories list */
        printf(esc_html__('Posted in %s', '_themename'), $cats_list);
        echo '</div>';
    }
    //Add tag links to single posts
    if (has_category()) {
        echo '<div class="c-post__tags">';
        /* translators: used between categories */
        $tags_list = get_the_tag_list('<ul><li>', '</li><li>', '</li></ul>');
        /* translators: used between categories list */
        echo $tags_list;
        echo '</div>';
    }
    ?>
</footer>