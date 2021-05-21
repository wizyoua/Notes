<?php 

class Invoice 
{
    private $description;
    private $total; 
    private $date;
    private $paid;


    public function __construct($description, $total, $date, $paid)
    {
        $this->description = $description;
        $this->total = $total;
        $this->date = $date;
        $this->paid = $paid;
    }

}

//Named Parameters, basically looks like key & value, can also be out of order
//unfortunately, this makes it more coupled since your keys rely on correct naming to params and vars above
$invoice = new Invoice(
    description: 'customer install',
    total: 10000,
    date: new DateTime(),
    paid: true
);

var_dump($invoice);