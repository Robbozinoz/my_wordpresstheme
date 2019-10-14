<?php
/*
Template name: Blank Page
*/
get_header(); ?>


<main role="main">
    <?php while (have_posts()) {
        the_post(); ?>
        <article <?php post_class(); ?>>
            <?php
                the_content();
                // $c = get_the_content();
                // echo 'Initial <br />';
                // echo $c;
                // echo '<br><br>';

                // //Automatically wrap content in p tags
                // $c = wpautop($c);
                // echo 'wpautop <br>';
                // echo esc_html($c);
                // echo '<br><br>';

                // //Automatically remove opening/closing ptags from main shortcode
                // $c = shortcode_unautop($c);
                // echo 'shortcode_unautop <br>';
                // echo esc_html($c);
                // echo '<br /><br />';

                // //Show shortcode including ptags remaining after unautop
                // $c = do_shortcode($c);
                // echo 'do_shortcode <br>';
                // echo esc_html($c);
                // echo '<br /><br />';

                // //Remove all unmatched closing ptags and match opening ptags remaining to a closing ptags
                // $c = force_balance_tags($c);
                // echo 'force_balance_tags <br>';
                // echo esc_html($c);
                // echo '<br /><br />';

                // //Remove all empty ptags(including empty lines from editor)
                // $c = preg_replace('#<p>(\s|&nbsp;)*+(<br\s*/*>)*(\s|&nbsp;)*</p>#i', '', ($c));
                // echo 'preg_replace <br>';
                // echo esc_html($c);
                ?>
        </article>
    <?php } ?>
    <?php //get_template_part('loop', 'page'); 
    ?>
</main>


<?php get_footer(); ?>