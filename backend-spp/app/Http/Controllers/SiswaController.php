<?php

namespace App\Http\Controllers;

use App\Models\Jurusan;
use App\Models\Kelas;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class SiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kelas = Kelas::all();
        $jurusan = Jurusan::all();
        $siswa = Siswa::paginate(8);
        // return dd($siswa);
        return Inertia::render('Siswa/Index',['siswa'=>$siswa,'kelas'=>$kelas,'jurusan'=>$jurusan]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $kelas = Kelas::all();
        $jurusan = Jurusan::all();
        // return dd($kelas);
        return Inertia::render('Siswa/Create',['kelas'=>$kelas,'jurusan'=>$jurusan]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(),[
            "nisn"=> "required",
            "nis"=> "required",
            "nama"=> "required",
            "kelas_id"=> "required",
            "jurusan_id"=> "required",
            "alamat"=> "required",
            "no_tlp"=> "required",
            "user_id"=> "nullable",
        ]);

        if($validate->fails()){
            return back()->withErrors($validate->errors());
        }
        $validate = $validate->validate();
        $siswa = Siswa::create([
            "nisn"=>$validate['nisn'],
            "nis"=>$validate['nis'],
            "nama"=>$validate['nama'],
            "alamat"=>$validate['alamat'],
            "kelas_id"=>$validate['kelas_id'],
            "jurusan_id"=>$validate['jurusan_id'],
            "alamat"=>$validate['alamat'],
            "no_tlp"=>$validate['no_tlp'],
            "user_id"=>$validate['user_id'],
        ]);
        return dd(Siswa::all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Siswa $siswa)
    {
        $kelas = Kelas::all();
        $jurusan = Jurusan::all();
        return Inertia::render('Siswa/View',['siswa'=>$siswa,'kelas'=>$kelas,'jurusan'=>$jurusan]);
        return dd($siswa);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Siswa $siswa)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Siswa $siswa)
    {
        $validate = Validator::make($request->all(),[
            "nisn"=> "required",
            "nis"=> "required",
            "nama"=> "required",
            "kelas_id"=> "required",
            "jurusan_id"=> "required",
            "alamat"=> "required",
            "no_tlp"=> "required",
            "user_id"=> "nullable",
        ]);

        if($validate->fails()){
            return back()->withErrors($validate->errors());
        }
        $validate = $validate->validate();
        $siswa->update([
            "nisn"=>$validate['nisn'],
            "nis"=>$validate['nis'],
            "nama"=>$validate['nama'],
            "alamat"=>$validate['alamat'],
            "kelas_id"=>$validate['kelas_id'],
            "jurusan_id"=>$validate['jurusan_id'],
            "alamat"=>$validate['alamat'],
            "no_tlp"=>$validate['no_tlp'],
            "user_id"=>$validate['user_id'],
        ]);

        return back()->with('success','data berhasil di perbarui');
        return dd($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Siswa $siswa)
    {
        
        $siswa->destroy($siswa->id);
        return back()->with('success',"data berhasil di hapus");
    }
}
