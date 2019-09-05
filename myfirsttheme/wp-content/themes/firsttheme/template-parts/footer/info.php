<?php
$footer_bg = _themename_sanitize_footer_bg(get_theme_mod('_themename_footer_bg', 'dark'));
$site_info = get_theme_mod('_themename_site_info', '');
?>
<!--Only display if has value-->
<?php if ($site_info) { ?>
    <!--To be set in dashboards later-->
    <div class="c-site-info c-site-info--<?php echo $footer_bg; ?>">
        <div class="o-container">
            <div class="o-row">
                <div class="o-row__column o-row__column--span-12 c-site-info__text">
                    <!--Array to allow certain attributes  in footer-->
                    <?php
                        $allowed = array('a' => array(
                            'href' => array(),
                            'title' => array()
                        ));
                        echo wp_kses($site_info, $allowed); ?>
                </div>
            </div>
        </div>
    <?php } ?>