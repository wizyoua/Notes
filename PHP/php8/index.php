<?php 

class User {
    public function profile() 
    {
        //uncomment return null to trigger Nullsafe operator below
        return null;

        //uncomment this to have profile and pass normally.
        //return new Profile;
    }
}

class Profile 
{
    public function employment()
    {
        return 'web dev';
    }
}

$user = new User;

//Null safe operator, new in php 8.0
echo $user->profile()?->employment() ?? 'Not Provided';

