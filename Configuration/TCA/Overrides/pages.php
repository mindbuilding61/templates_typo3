<?php
defined('TYPO3') or die('Access denied.');
call_user_func(function()
{
    /**
     * Temporary variables
     */
    $extensionKey = 'genf';

    /**
     * Default PageTS for Genf
     */

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    $extensionKey,
    'Configuration/TSconfig/Page/Mod/WebLayout/BackendLayouts/default.tsconfig',
    'Backend Layout'
);
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    $extensionKey,
    'Configuration/TSconfig/Page/Mod/WebLayout/BackendLayouts/FooterBackendLayout.tsconfig',
    'Backend Layout Footer'
    );
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    $extensionKey,
    'Configuration/TSconfig/Page/Page.tsconfig',
    'Page TsConfig'
);
}
);
