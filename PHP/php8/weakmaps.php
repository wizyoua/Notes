<?php 

$map = new WeakMap();

$obj = new stdClass();

$store = new WeakMap();

$store[$obj] = 'foorbar';

var_dump($store);

unset($obj);

var_dump($store);
