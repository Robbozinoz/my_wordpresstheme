<?php get_header(); ?>
<?php if (have_posts()) { ?>
<?php while (have_posts()) { ?>
<?php the_post(); ?>
<h2>
    <a href="<?php the_permalink() ?>" title="<?php the_title_attribute() ?>"><?php the_title() ?></a>
</h2>
<div>
    <!---See functions.php for setting oof which meta is extracted for the current post--->
    <?php _themename_post_meta() ?>
</div>
<div>
    <?php the_excerpt() ?>
</div>

<!--This is to attach the current posts read more link - including span for accessibility-->
<?php _themename_readmore_link(); ?>

<?php } ?>
<?php the_posts_pagination(); ?>

<!--Action example-->
<?php do_action('_themename_after_pagination'); ?>

<?php } else { ?>
<!--Wrap all text strings in translation function-->
<p><?php echo apply_filters('_themename_myfirsttheme_no_post_text', esc_html__('Sorry, no posts matched your criteria', '_themename')); ?></p>
<?php } ?>

<?php get_footer(); ?>