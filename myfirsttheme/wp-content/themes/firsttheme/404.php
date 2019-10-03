<?php get_header(); ?>

<!--Addition of classes-->
<div class="o-container u-margin-bottom-40">
    <div class="o-row">
        <div class="o-row__column o-row__column--span-12">
            <main role="main">
                <h3><?php esc_html_e('Nothing found here, maybe you can try to search?', '_themename') ?></h3>
            </main>
            <?php get_search_form(); ?>
        </div>
    </div>
</div>
<?php get_footer(); ?>