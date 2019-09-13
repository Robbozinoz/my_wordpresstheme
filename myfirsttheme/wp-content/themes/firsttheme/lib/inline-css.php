<?php

//Array to hold all elemenets to be inline styled
$inline_styles_selectors = array(
    'a' => array(
        'color' => '_themename_accent_colour',
    ),
    ':focus' => array(
        'outline-color' => '_themename_accent_colour',
    ),
    '.c-post.sticky' => array(
        'border-left-color' => '_themename_accent_colour',
    ),
    'button, input[type=submit], .header-nav .menu > .menu-item:not(.mega) .sub-menu .menu-item:hover > a' => array(
        'background-color' => '_themename_accent_colour',
    ),
    '.header-nav .menu > .menu-item.mega > .sub-menu > .menu-item > a:hover, .header-nav .menu > .menu-item.mega > .sub-menu > .menu-item > .sub-menu a:hover' => array(
        'color' => '_themename_accent_colour',
    )
);

//Set variable to empty string
$inline_styles = "";

//Loop through the array connecting each element(selector) to its sanitized value from the _theme_accent_colour setting
foreach ($inline_styles_selectors as $selector => $props) {
    $inline_styles .= "{$selector} {";
    foreach ($props as $prop => $value) {
        $inline_styles .= "{$prop}: " . sanitize_hex_color(get_theme_mod($value, '#20ddae')) . ";";
    }
    $inline_styles .= "} ";
}
