<?php 

$cfg['LoginCookieValidity'] = 360000;
$cfg['MaxRows'] = 50;
$cfg['Export']['method'] = 'custom';
$cfg['Export']['compression'] = 'zip';
$cfg['Export']['file_template_table'] = '@DATABASE@-%F-%T';

?>