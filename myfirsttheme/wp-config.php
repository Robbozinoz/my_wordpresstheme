<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'myfirsttheme');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '!!(_WGp359WG&b2W=2t%kQRvEV6nYS>(5xpZ| ZPGaZv?u:1RL>^#3t+>?H)?6@#');
define('SECURE_AUTH_KEY',  'KE*/+V.TEgHAVuwvWs>yJ3yDC`L,A_z@E%L}!@y9T2k$~7L9}ttj-*H*bVG+biku');
define('LOGGED_IN_KEY',    'iKDrq_xF0qviJe,ia&gZrOl~N8&=E)Mczuuyq@Ow`s)>:tiw1[rEc4b+2q}([7W@');
define('NONCE_KEY',        'S]a/XxR)!T?hW(LH.@Ny^|1v;J(6m0]Py|ZXih[.};TO?UILSnE6IC&KWO$8&z11');
define('AUTH_SALT',        '~-O c}:76@{P`|aEzov8y~G^DQ8w5_`vpp!f:k<Lh;9c_?fZ8|I5#vso<vm4{RA%');
define('SECURE_AUTH_SALT', '56M# f@-5H#oZ.DY#n-Ta->Ll$S>yd!Zm RMuJX&r5Qg7WGWGxPuyd4;5>]KNutX');
define('LOGGED_IN_SALT',   '3ug^E!(g5 tmwF@TQN?G5:*#Wy#Q4D[$L(x/CHWK,8!xUF?9,,5zejXnt3JaDH+*');
define('NONCE_SALT',       'DmFY>*wPJwl~Q=]:t*`+UKk#x{!fV9Z_`=P=ha1V6sW<0KOw(D_dq-v~dh7=+fvl');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
	define('ABSPATH', dirname(__FILE__) . '/');
}

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
