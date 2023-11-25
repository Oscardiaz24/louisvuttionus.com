<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit73ffa0ac986dd7a9285b457e2f7ba5e0
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit73ffa0ac986dd7a9285b457e2f7ba5e0::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit73ffa0ac986dd7a9285b457e2f7ba5e0::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit73ffa0ac986dd7a9285b457e2f7ba5e0::$classMap;

        }, null, ClassLoader::class);
    }
}