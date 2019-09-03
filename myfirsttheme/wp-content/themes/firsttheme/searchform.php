<form action="<?php echo esc_url(home_url('/')); ?>" method="get" role="search" class="c-search-form">
    <label for="" class="c-search-form__label">
        <span class="screen-reader-text"><?php echo esc_attr_x('Search for:', 'label', '_themename') ?></span>
        <input class="c-search-form_field" type="search" name="s" placeholder="<?php echo esc_attr_x('Search & Help', 'placeholder', '_themename') ?>" value="<?php echo esc_attr(get_search_query()); ?>" />
    </label>
    <button type="submit" class="c-search-form__button">
        <span class="u-screen-reader-text"><?php echo esc_attr_x('Search', 'submit button', '_themename'); ?></span>
        <i class="fas fa-search" aria-hidden="true"></i>
    </button>
</form>