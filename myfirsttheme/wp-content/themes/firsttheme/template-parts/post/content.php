<article <?php post_class('c-post u-margin-bottom-20'); ?>>

    <div class="c-post__inner">

        <?php if (get_the_post_thumbnail() !== "") { ?>
            <div class="c-post__thumbnail">
                <?php the_post_thumbnail('large'); ?>
            </div>
        <?php } ?>

        <header class="c-post__header">
            <?php if (is_single()) { ?>
                <h1 class="c-post__single-title">
                    <a href="<?php the_permalink() ?>" title="<?php the_title_attribute() ?>"><?php the_title() ?></a>
                </h1>
            <?php } else { ?>
                <h2 class="c-post__title">
                    <a href="<?php the_permalink() ?>" title="<?php the_title_attribute() ?>"><?php the_title() ?></a>
                </h2>
            <?php } ?>
            <div class="c-post__meta">
                <!--See functions.php for setting oof which meta is extracted for the current post-->
                <?php _themename_post_meta() ?>
            </div>
        </header>

        <?php if (is_single()) { ?>
            <div class="c-post__content">
                <?php the_content() ?>
            </div>
        <?php } else { ?>
            <div class="c-post__excerpt">
                <?php the_excerpt() ?>
            </div>
        <?php } ?>

        <?php if (is_single()) { ?>
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
        <?php } ?>

        <!--This is to attach the current posts read more link - including span for accessibility-->
        <?php if (!is_single()) { ?>
            <?php _themename_readmore_link(); ?>
        <?php } ?>

    </div>
</article>