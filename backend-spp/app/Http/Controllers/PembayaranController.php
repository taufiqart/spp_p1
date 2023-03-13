<?php

namespace App\Http\Controllers;

use App\Models\Pembayaran;
use App\Models\Siswa;
use App\Models\Spp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class PembayaranController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pembayaran = Pembayaran::paginate(10);

        if(auth()->user()->level == 'siswa'){
            $pembayaran = Pembayaran::where('siswa_id',auth()->user()->id)->paginate(12);
        }

        $siswa = Siswa::all();
        $spp = Spp::all();
        // return dd($pembayaran);
        return Inertia::render('Pembayaran/Index',compact('pembayaran','siswa','spp'));
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
            "siswa_id"=>"required|exists:App\Models\Siswa,id",
            "spp_id"=>"required|exists:App\Models\Spp,id",
            "jumlah_bayar"=>"required|regex:/^\d+(\.\d{1,2})?$/",
        ],[
            "regex"=>"The :attribute must be double."
        ]);

        if($validate->fails()){
            return back()->withErrors($validate->errors());
        }

        $validate = $validate->validate();

        $validate['tgl_bayar'] = date('Y-m-d');
        $validate['petugas_id'] = auth()->user()->id;
        $validate['status'] = Spp::firstWhere('id',$validate['spp_id'])->nominal <= $validate['jumlah_bayar'];

        // return dd($validate);

        $data = Pembayaran::create([
            "siswa_id"=>$validate["siswa_id"],
            "petugas_id"=>$validate["petugas_id"],
            "tgl_bayar"=>$validate["tgl_bayar"],
            "spp_id"=>$validate["spp_id"],
            "jumlah_bayar"=>$validate["jumlah_bayar"],
            "status"=>$validate["status"],
        ]);

        if($data){
            return back()->with('success','data berhasil di tambahkan');
        }

        return back()->with('error','data gagal di tambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Pembayaran $pembayaran)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pembayaran $pembayaran)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pembayaran $pembayaran)
    {
        $validate = Validator::make($request->all(),[
            "siswa_id"=>"required|exists:App\Models\Siswa,id",
            "spp_id"=>"required|exists:App\Models\Spp,id",
            "jumlah_bayar"=>"required|regex:/^\d+(\.\d{1,2})?$/",
        ],[
            "regex"=>"The :attribute must be double."
        ]);

        if($validate->fails()){
            return back()->withErrors($validate->errors());
        }

        $validate = $validate->validate();

        $validate['tgl_bayar'] = date('Y-m-d');
        $validate['petugas_id'] = auth()->user()->id;
        $validate['status'] = Spp::firstWhere('id',$validate['spp_id'])->nominal <= $validate['jumlah_bayar'];

        // return dd($validate);

        $data = $pembayaran->update([
            "siswa_id"=>$validate["siswa_id"],
            "petugas_id"=>$validate["petugas_id"],
            "tgl_bayar"=>$validate["tgl_bayar"],
            "spp_id"=>$validate["spp_id"],
            "jumlah_bayar"=>$validate["jumlah_bayar"],
            "status"=>$validate["status"],
        ]);

        if($data){
            return back()->with('success','data berhasil di tambahkan');
        }

        return back()->with('error','data gagal di tambahkan');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pembayaran $pembayaran)
    {
        $data = $pembayaran->destroy($pembayaran->id);
        if($data){
            return back()->with('success',"data berhasil di hapus");
        }
        return back()->with('error',"data gagal di hapus");
    }
}
