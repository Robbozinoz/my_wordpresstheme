<?php get_header(); ?>
<?php if (have_posts()) { ?>
    <?php while (have_posts()) { ?>
        <?php the_post(); ?>
        <h2>
            <a href="<?php the_permalink() ?>" title="<?php the_title_attribute() ?>"><?php the_title() ?></a>
        </h2>
        <div>
            <!---See functions.php for setting oof which meta is extracted for the current post--->
            <?php firsttheme_post_meta() ?>
        </div>
        <div>
            <?php the_excerpt() ?>
        </div>

        <!--This is to attach the current posts read more link - including span for accessibility-->
        <?php firsttheme_readmore_link(); ?>

    <?php } ?>
    <?php the_posts_pagination(); ?>
<?php } else { ?>
    <!--Wrap all text strings in translation function-->
    <p><?php esc_html_e('Sorry, no posts matched your criteria', 'myfirsttheme'); ?></p>
<?php } ?>

<?php get_footer(); ?>