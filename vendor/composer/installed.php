<?php return array(
    'root' => array(
        'pretty_version' => '1.0.0+no-version-set',
        'version' => '1.0.0.0',
        'type' => 'library',
        'install_path' => __DIR__ . '/../../',
        'aliases' => array(),
        'reference' => NULL,
        'name' => '__root__',
        'dev' => true,
    ),
    'versions' => array(
        '__root__' => array(
            'pretty_version' => '1.0.0+no-version-set',
            'version' => '1.0.0.0',
            'type' => 'library',
            'install_path' => __DIR__ . '/../../',
            'aliases' => array(),
            'reference' => NULL,
            'dev_requirement' => false,
        ),
        'components/jquery' => array(
            'pretty_version' => '3.6.0',
            'version' => '3.6.0.0',
            'type' => 'component',
            'install_path' => __DIR__ . '/../components/jquery',
            'aliases' => array(),
            'reference' => '6cf38ee1fd04b6adf8e7dda161283aa35be818c3',
            'dev_requirement' => false,
        ),
        'datatables/datatables' => array(
            'pretty_version' => '1.10.21',
            'version' => '1.10.21.0',
            'type' => 'library',
            'install_path' => __DIR__ . '/../datatables/datatables',
            'aliases' => array(),
            'reference' => '83e59694a105225ff889ddfa0d723a3ab24fda78',
            'dev_requirement' => false,
        ),
        'twbs/bootstrap' => array(
            'pretty_version' => 'v5.1.3',
            'version' => '5.1.3.0',
            'type' => 'library',
            'install_path' => __DIR__ . '/../twbs/bootstrap',
            'aliases' => array(),
            'reference' => '1a6fdfae6be09b09eaced8f0e442ca6f7680a61e',
            'dev_requirement' => false,
        ),
        'twitter/bootstrap' => array(
            'dev_requirement' => false,
            'replaced' => array(
                0 => 'v5.1.3',
            ),
        ),
    ),
);
