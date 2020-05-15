<?php

namespace App\Http\Controllers;

use App\Services\FizzBuzzNumbersService;

class FizzBuzzController
{
    public function index(FizzBuzzNumbersService $service)
    {
        return $service->getNumbers();
    }
}
