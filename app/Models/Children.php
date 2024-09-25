<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Children extends Model
{
    use HasFactory;

    protected $table = 'childrens';
    protected $fillable = [
        'user_id',
        'nama',
        'tanggal_lahir',
        'jenis_kelamin',
        'berat_badan',
        'tinggi_badan',
    ];
}
