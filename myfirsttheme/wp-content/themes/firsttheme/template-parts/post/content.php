<article <?php post_class('c-post u-margin-bottom-20'); ?>>
    <h2 class="c-post__title">
        <a href="<?php the_permalink() ?>" title="<?php the_title_attribute() ?>"><?php the_title() ?></a>
    </h2>
    <div class="c-post__meta">
        <!---See functions.php for setting oof which meta is extracted for the current post--->
        <?php _themename_post_meta() ?>
    </div>
    <div class="c-post__excerpt">
        <?php the_excerpt() ?>
    </div>

    <!--This is to attach the current posts read more link - including span for accessibility-->
    <?php _themename_readmore_link(); ?>
</article>