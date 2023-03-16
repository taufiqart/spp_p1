<?php

namespace App\Http\Controllers;

use App\Models\Petugas;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class PetugasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $petugas = Petugas::paginate(10);
        // $user = [''];
        $user = User::where('level','!=','siswa')->get();
        // return dd($siswa);
        return Inertia::render('Petugas/Index',compact('petugas','user'));

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(),[
            "nama"=> "required",
            "user_id"=> "nullable|unique:petugas,user_id",
        ]);

        if($validate->fails()){
            return back()->withErrors($validate->errors());
        }
        $validate = $validate->validate();
        $data = Petugas::create([
            "nama"=>$validate['nama'],
            "user_id"=>$validate['user_id'],
        ]);
        if($data){
            return back()->with('success','data berhasil di tambahkan');
        }
        return back()->with('error','data gagal di tambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Petugas $petugas)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Petugas $petugas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Petugas $petuga)
    {
        $validate = Validator::make($request->all(),[
            "nama"=> "required",
            "user_id"=> "nullable|unique:petugas,user_id",
        ]);

        if($validate->fails()){
            return back()->withErrors($validate->errors());
        }

        $validate = $validate->validate();
        $data = $petuga->update([
            "nama"=>$validate['nama'],
            "user_id"=>$validate['user_id'],
        ]);

        // return dd($validate);

        if($data){
            return back()->with('success','data berhasil di perbaruhi');
        }
        return back()->with('error','data gagal di perbaruhi');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Petugas $petuga)
    {
        $data = $petuga->destroy($petuga->id);
        if($data){
            return back()->with('success',"data berhasil di hapus");
        }
        return back()->with('error',"data gagal di hapus");
    }
}
