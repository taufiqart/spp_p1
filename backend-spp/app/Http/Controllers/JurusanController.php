<?php

namespace App\Http\Controllers;

use App\Models\Jurusan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class JurusanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $jurusan = Jurusan::paginate(10);
        return Inertia::render('Jurusan/Index',['jurusan'=>$jurusan]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Jurusan/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(),[
            "jurusan"=> "required",
            "kompetensi_keahlian"=> "required",
        ]);

        if($validate->fails()){
            return back()->withErrors($validate->errors());
        }
        $validate = $validate->validate();
        $data = Jurusan::create([
            "jurusan"=> $validate['jurusan'],
            "kompetensi_keahlian"=> $validate['kompetensi_keahlian'],
        ]);
        if($data){
            return back()->with('success','data berhasil di tambahkan');
        }
        return back()->with('error','data gagal di tambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Jurusan $jurusan)
    {
        return Inertia::render('Jurusan/View',['jurusan'=>$jurusan]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Jurusan $jurusan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Jurusan $jurusan)
    {
        $validate = Validator::make($request->all(),[
            "jurusan"=> "required",
            "kompetensi_keahlian"=> "required",
        ]);

        if($validate->fails()){
            return back()->withErrors($validate->errors());
        }
        $validate = $validate->validate();
        $data = $jurusan->update([
            "jurusan"=> $validate['jurusan'],
            "kompetensi_keahlian"=> $validate['kompetensi_keahlian'],
        ]);

        if($data){
            return back()->with('success','data berhasil di perbaruhi');
        }
        return back()->with('error','data gagal di perbaruhi');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Jurusan $jurusan)
    {
        $data = $jurusan->destroy($jurusan->id);
        if($data){
            return back()->with('success',"data berhasil di hapus");
        }
        return back()->with('error',"data gagal di hapus");
    }
}
