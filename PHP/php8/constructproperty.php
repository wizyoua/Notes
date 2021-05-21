<?php 
class Plan
{
    public function __construct(protected string $name = 'monthly')
    {
    }
}

class Signup 
{
    protected User $user;

    protected Plan $plan;

    public function __construct(User $user, Plan $plan)
    {
        $this->user = $user;
        $this->plan = $plan;
    }
}