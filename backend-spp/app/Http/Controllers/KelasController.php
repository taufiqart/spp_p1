<?php

namespace App\Http\Controllers;

use App\Models\Kelas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class KelasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kelas = Kelas::paginate();
        return Inertia::render('Kelas/Index',['kelas'=>$kelas]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Kelas/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(),[
            "kelas"=> "required",
        ]);

        if($validate->fails()){
            return back()->withErrors($validate->errors());
        }
        $validate = $validate->validate();
        $data = Kelas::create([
            "kelas"=>$validate['kelas'],
        ]);
        if($data){
            return back()->with('success','data berhasil di tambahkan');
        }
        return back()->with('error','data gagal di tambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Kelas $kela)
    {
        $kelas = $kela;
        return Inertia::render('Kelas/View',['kelas'=>$kelas]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Kelas $kela)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Kelas $kela)
    {
        $kelas = $kela;
        $validate = Validator::make($request->all(),[
            "kelas"=> "required",
        ]);

        if($validate->fails()){
            return back()->withErrors($validate->errors());
        }
        $validate = $validate->validate();

        $data = $kelas->update([
            "kelas"=>$validate['kelas'],
        ]);

        if($data){
            return back()->with('success','data berhasil di perbaruhi');
        }
        return back()->with('error','data gagal di perbaruhi');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kelas $kela)
    {
        $kelas = $kela;
        $data = $kelas->destroy($kelas->id);
        if($data){
            return back()->with('success',"data berhasil di hapus");
        }
        return back()->with('error',"data gagal di hapus");
    }
}
