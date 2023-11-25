<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitae4505a43a25b3d6d39469442fb85707
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Stripe\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Stripe\\' => 
        array (
            0 => __DIR__ . '/..' . '/stripe/stripe-php/lib',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitae4505a43a25b3d6d39469442fb85707::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitae4505a43a25b3d6d39469442fb85707::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
