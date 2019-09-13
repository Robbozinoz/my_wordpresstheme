<?php

//attach customize setting to variable
$accent_colour = sanitize_hex_color(get_theme_mod('_themename_accent_colour', '#20ddae'));

//INsert css code to be passed inline to enqueue-assets style
$inline_styles = "
    a {
        color: {$accent_colour}
    }

    :focus {
        outline-color: {$accent_colour}
    }

    .c-post.sticky {
        border-left-color: {$accent_colour}
    }

    button, input[type=submit], .header-nav .menu > .menu-item:not(.mega) .sub-menu .menu-item:hover > a {
        background-color: {$accent_colour}
    }

    .header-nav .menu > .menu-item.mega > .sub-menu > .menu-item > a:hover, .header-nav .menu > .menu-item.mega > .sub-menu > .menu-item > .sub-menu a:hover {
        color: {$accent_colour}
    }
";
