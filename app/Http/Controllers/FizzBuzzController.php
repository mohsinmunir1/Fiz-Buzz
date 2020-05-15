<?php

namespace App\Http\Controllers;

class FizzBuzzController
{
    public function index()
    {
        return array_map(function ($num) {
            $prefix = '';
            if ($num % 3 === 0) {
                $prefix .= 'Fizz';
            }
            if ($num % 5 === 0) {
                $prefix .= 'Buzz';
            }

            return $prefix ?: $num;
        }, range(1, 100));
    }
}
