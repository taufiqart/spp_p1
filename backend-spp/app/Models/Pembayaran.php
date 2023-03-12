<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pembayaran extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $with = ['siswa','petugas','spp'];

    public function siswa(){
        return $this->belongsTo(Siswa::class);
    }

    public function petugas(){
        return $this->belongsTo(User::class,'petugas_id','id');
    }
    public function spp(){
        return $this->belongsTo(Spp::class);
    }
}
