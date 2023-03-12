<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::paginate(12);
        
        return Inertia::render('User/Index',['user'=>$user]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // $user = User::all();
        // $user = U::all();
        // return dd($kelas);
        return Inertia::render('User/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(),[
            "nama"=> "required",
            "username"=> "required|unique:users",
            "email"=> "required|unique:users",
            "password"=> "required|min:8",
            "level"=> "required",
        ]);

        if($validate->fails()){
            return back()->withErrors($validate->errors());
        }
        $validate = $validate->validate();
        $validate['password'] = bcrypt($validate['password']);
        $data = User::create([
            "nama"=>$validate['nama'],
            "username"=>$validate['username'],
            "email"=>$validate['email'],
            "password"=>$validate['password'],
            "level"=>$validate['level'],
        ]);
        if($data){
            return back()->with('success','data berhasil di tambahkan');
        }
        return back()->with('error','data gagal di tambahkan');
        // return dd(User::all());
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        // $kelas = Kelas::all();
        // $jurusan = Jurusan::all();

        return Inertia::render('User/View',['user'=>$user]);
        // return dd($siswa);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $validate = Validator::make($request->all(),[
            "nama"=> "required",
            "username"=> "required|unique:users,username,".$user->id,
            "email"=> "required|unique:users,email,".$user->id,
            "level"=> "required",
        ]);

        if($validate->fails()){
            return back()->withErrors($validate->errors());
        }
        $validate = $validate->validate();
        $data = $user->update([
            "nama"=>$validate['nama'],
            "username"=>$validate['username'],
            "email"=>$validate['email'],
            "level"=>$validate['level'],
        ]);

        if($data){
            return back()->with('success','data berhasil di perbaruhi');
        }
        return back()->with('error','data gagal di perbaruhi');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $data = $user->destroy($user->id);
        if($data){
            return back()->with('success',"data berhasil di hapus");
        }
        return back()->with('error',"data gagal di hapus");
    }
}
