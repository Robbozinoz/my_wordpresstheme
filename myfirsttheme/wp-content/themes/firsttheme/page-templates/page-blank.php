<?php
/*
Template name: Blank Page
*/
get_header(); ?>


<main role="main">
    <?php while (have_posts()) {
        the_post(); ?>
        <article <?php post_class(); ?>>
            <?php the_content(); ?>
        </article>
    <?php } ?>
    <?php get_template_part('loop', 'page'); ?>
</main>


<?php get_footer(); ?>