<?php

function _themename_customize_register($wp_customize)
{

    $wp_customize->get_setting('blogname')->transport = 'postMessage';
    //Ajax request to server to update certain parts of the site title customiser

    $wp_customize->selective_refresh->add_partial('blogname', array(
        // 'settings' => array('blogname')
        'selector' => '.c-header__blogname',
        'container_inclusive' => false,
        'render_callback' => function () {
            bloginfo('name');
        }
    ));
    /*--------------------------GENERAL SETTINGS ---------------------------*/
    $wp_customize->add_section('_themename_general_options', array(
        'title' => esc_html__('General Options', '_themename'),
        'description' => esc_html__('You can change general options from here.', '_themename')
    ));

    //Add setting to section and set default value
    $wp_customize->add_setting('_themename_accent_colour', array(
        'default' => '#20ddae',
        'sanitize_callback' => 'sanitize_hex_color'
    ));

    //Use customize api to create new control from WP core, pass arguments
    $wp_customize->add_control(
        new WP_Customize_Color_Control(
            $wp_customize,
            '_themename_accent_colour',
            array(
                'label'      => __('Accent Color', '_themename'),
                'section'    => '_themename_general_options',
            )
        )
    );


    /*------------------------- FOOTER SETTINGS --------------------------*/
    //Ajax request to server to update certain parts of the footer customiser

    $wp_customize->selective_refresh->add_partial('_themename_footer_partial', array(
        'settings' => array('_themename_footer_bg', '_themename_footer_layout'),
        'selector' => '#footer',
        'container_inclusive' => false,
        'render_callback' => function () {
            get_template_part('template-parts/footer/widgets');
            get_template_part('template-parts/footer/info');
        }
    ));

    //Add customisor section for the footer
    $wp_customize->add_section('_themename_footer_options', array(
        'title' => esc_html__('Footer Options', '_themename'),
        'description' => esc_html__('You can change footer options from here.', '_themename')
    ));

    //Connect the javascript for postMessage for the site info section for immediate upadtes
    $wp_customize->add_setting('_themename_site_info', array(
        'default' => '',
        'sanitize_callback' => '_themename_sanitize_site_info',
        'transport' => 'postMessage'
    ));

    //Extend customisor cotrol of Site info to footer section to work with Javascript
    $wp_customize->add_control('_themename_site_info', array(
        'type' => 'text',
        'label' => esc_html__('Site Info', '_themename'),
        'section' => '_themename_footer_options'
    ));

    //Extend customiser control of Footer options
    $wp_customize->add_setting('_themename_footer_bg', array(
        'default' => 'dark',
        'transport' => 'postMessage',
        'sanitize_callback' => '_themename_sanitize_footer_bg'
    ));

    //Add control for the footer otpions setting to provide options for theme
    $wp_customize->add_control('_themename_footer_bg', array(
        'type' => 'select',
        'label' => esc_html__('Footer Background', '_themename'),
        'choices' => array(
            'light' => esc_html__('Light', '_themename'),
            'dark' => esc_html__('Dark', '_themename'),
        ),
        'section' => '_themename_footer_options'
    ));

    //Add settings & control for the footer layout
    $wp_customize->add_setting('_themename_footer_layout', array(
        'default' => '3,3,3,3',
        'transport' => 'postMessage',
        'sanitize_callback' => 'sanitize_text_field',
        'validate_callback' => '_themename_validate_footer_layout'
    ));

    $wp_customize->add_control('_themename_footer_layout', array(
        'type' => 'text',
        'label' => esc_html__('Footer Layout', '_themename'),
        'section' => '_themename_footer_options'
    ));
}

add_action('customize_register', '_themename_customize_register');

//Check user input for footer column layout
function _themename_validate_footer_layout($validity, $value)
{
    if (!preg_match('/^([1-9]|1[012])(,([1-9]|1[012]))*$/', $value)) {
        $validity->add('invalid_footer_layout', esc_html__('Footer layout is invalid', '_themename'));
    }
    return $validity;
}

//Function to be santised by footer options
function _themename_sanitize_footer_bg($input)
{
    //Assign possible values for customiser setting
    $valid = array('light', 'dark');
    //Check which value if in the url
    if (in_array($input, $valid, true)) {
        return $input;
    }
    //If not array valid value return dark theme
    return 'dark';
}

function _themename_sanitize_site_info($input)
{
    $allowed = array('a' => array(
        'href' => array(),
        'title' => array()
    ));
    return wp_kses($input, $allowed);
}
