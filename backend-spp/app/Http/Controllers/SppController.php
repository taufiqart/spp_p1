<?php

namespace App\Http\Controllers;

use App\Models\Spp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class SppController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $spp = Spp::paginate(10);
        // return dd($spp);
        return Inertia::render('Spp/Index',['spp'=>$spp]);
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
          "tahun" => ["required",Rule::unique('spps')->where(fn ($query) => $query->where('bulan', $request->bulan))],
          "bulan" => ["required",Rule::unique('spps')->where(fn ($query) => $query->where('tahun', $request->tahun))],
          "nominal" => "required|regex:/^\d+(\.\d{1,2})?$/",
        ],[
            "regex"=>"The :attribute must be double."
        ]);

        if($validate->fails()){
            return back()->withErrors($validate->errors());
        }
        $validate = $validate->validate();
        $data = Spp::create([
            "tahun"=> $validate['tahun'],
            "bulan"=> $validate['bulan'],
            "nominal"=> $validate['nominal'],
        ]);
        if($data){
            return back()->with('success','data berhasil di tambahkan');
        }
        return back()->with('error','data gagal di tambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Spp $spp)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Spp $spp)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Spp $spp)
    {
        $validate = Validator::make($request->all(),[
            "tahun" => ["required",Rule::unique('spps')->where(fn ($query) => $query->where('bulan', $request->bulan)->where('id','!=',$spp->id))],
            "bulan" => ["required",Rule::unique('spps')->where(fn ($query) => $query->where('tahun', $request->tahun)->where('id','!=',$spp->id))],
            "nominal" => "required|regex:/^\d+(\.\d{1,2})?$/",
          ],[
              "regex"=>"The :attribute must be double."
          ]);

          if($validate->fails()){
              return back()->withErrors($validate->errors());
          }
          $validate = $validate->validate();
          $data = $spp->update([
              "tahun"=> $validate['tahun'],
              "bulan"=> $validate['bulan'],
              "nominal"=> $validate['nominal'],
          ]);
          if($data){
              return back()->with('success','data berhasil di tambahkan');
          }
          return back()->with('error','data gagal di tambahkan');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Spp $spp)
    {
        $data = $spp->destroy($spp->id);
        if($data){
            return back()->with('success',"data berhasil di hapus");
        }
        return back()->with('error',"data gagal di hapus");
    }
}
