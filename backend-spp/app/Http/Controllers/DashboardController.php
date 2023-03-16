<?php

namespace App\Http\Controllers;

use App\Models\Jurusan;
use App\Models\Kelas;
use App\Models\Pembayaran;
use App\Models\Siswa;
use App\Models\Spp;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(){
        $pembayaran = Pembayaran::count();
        $kelas = Kelas::count();
        $jurusan = Jurusan::count();
        $siswa = Siswa::count();
        $spp = Spp::count();
        $user = User::count();
        // return dd("halo");
        return Inertia::render('Dashboard',compact('pembayaran','kelas','jurusan','siswa','spp'));
    }
}
