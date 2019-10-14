<?php
$blocks = gutenberg_parse_blocks(get_the_content());
$gallery = false;
foreach ($blocks as $block) {
    if ($block['blockName'] === 'core/gallery') {
        $gallery = $block;
        break;
    }
}
?>
<article <?php post_class('c-post u-margin-bottom-20'); ?>>

    <div class="c-post__inner">

        <!--Check to see if videos if empty-->
        <?php if (get_the_post_thumbnail() !== '' && (!get_post_gallery() || is_single())) { ?>
            <div class="c-post__thumbnail">
                <?php the_post_thumbnail('large'); ?>
            </div>
        <?php } ?>

        <?php if (!is_single() && get_post_gallery()) { ?>
            <div class="c-post__gallery">
                <?php
                    //Extract the id for the image(not thumbnail) and loop through to get image from id
                    $gallery = get_post_gallery(get_the_ID(), false);
                    $gallery = explode(',', $gallery['ids']);
                    foreach ($gallery as $id) {
                        echo wp_get_attachment_image($id, 'large');
                    }
                    ?>
            </div>
        <?php } ?>

        <?php get_template_part('template-parts/post/header'); ?>

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
            <?php get_template_part('template-parts/post/footer'); ?>
        <?php } ?>

        <!--This is to attach the current posts read more link - including span for accessibility-->
        <?php if (!is_single()) { ?>
            <?php _themename_readmore_link(); ?>
        <?php } ?>

    </div>
</article>