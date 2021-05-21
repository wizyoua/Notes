<?php 
class Conversation {}

$obj = new Conversation();

//using class with dynamic class names
switch ($obj::class) {
    case 'Conversation':
        # code...
        $type = 'started_conversation';
        break;
    case 'Reply':
        $type = 'replied_to_conversation';
        break;
    case 'Comment':
        $type = 'commented_on_lesson';
        break;
}

var_dump($type);