<?php

namespace App\Http\Controllers;

use App\Models\Children;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function profile()
    {
        return view('user.profile');
    }


    // Data Anak
    public function dataAnak()
    {
        return view('user.data-anak');
    }

    // Kata Sandi
    public function kataSandi()
    {
        return view('user.kata-sandi');
    }

    // Data Anak
    public function addDataAnak(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama' => 'required',
            'tanggal_lahir' => 'required',
            'jenis_kelamin' => 'required',
            'berat_badan' => 'required',
            'tinggi_badan' => 'required',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $user_id = Auth::user()->id;
        $data = new Children();
        $data->user_id = $user_id;
        $data->nama = $request->nama;
        $data->tanggal_lahir = $request->tanggal_lahir;
        $data->jenis_kelamin = $request->jenis_kelamin;
        $data->berat_badan = $request->berat_badan;
        $data->tinggi_badan = $request->tinggi_badan;
        $data->save();

        return redirect()->back()->with('success', 'Data anak berhasil ditambahkan');
    }
}
