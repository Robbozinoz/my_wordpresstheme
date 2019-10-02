<?php get_header(); ?>
<?php
//State variable to contain various post meta for use in conditionals and furtehr singe post layout
$layout = _themename_meta(get_the_ID(), '__themename_post_layout', 'full');
$sidebar = is_active_sidebar('primary-sidebar');

//If condition to apply full scrneeen width tp post if no active widgets in sidebar
//if ($layout === 'sidebar' && !$sidebar) {
// $layout = 'full';
//}
?>
<!--Addition of classes-->
<div class="o-container u-margin-bottom-40 o-single-post-<?php echo $layout; ?>">
    <div class="o-row">
        <div class="o-row__column o-row__column--span-12 o-row__column--span-<?php echo $layout === 'sidebar' ? '8' : '12' ?>@medium">
            <main role="main">
                <?php get_template_part('loop', 'single'); ?>
            </main>
        </div>
        <?php if ($layout === 'sidebar') { ?>
            <div class="o-row__column o-row__column--span-12 o-row__column--span-4@medium">
                <?php get_sidebar(); ?>
            </div>
        <?php } ?>
    </div>
</div>
<?php get_footer(); ?>