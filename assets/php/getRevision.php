<?php
function get_revision($filename)
{
    $manifest_path = $_SERVER['DOCUMENT_ROOT'] . '/rev-manifest.json';

    if (file_exists($manifest_path)) {
        $manifest = json_decode(file_get_contents($manifest_path), TRUE);
    } else {
        $manifest = array();
    }

    if (array_key_exists($filename, $manifest)) {
        return $manifest[$filename];
    }

    return $filename;
}

function getMainStylesheet(){
    return get_revision("main.css");
}

function getMainScript(){
    return get_revision("main.js");
}