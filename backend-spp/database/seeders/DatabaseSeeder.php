<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $kelas = ["X","XI","XII"];
        $jurusan = ["RPL","TKJ","MM","KA","KI","OTKP","BDP"];
        $kompetensi = ["Rekayasa Perangkat Lunak","Teknik Komputer Jaringan","Multimedia","Kimia Analisis","Kimia Industri","OTKP","BDP"];
        foreach($kelas as $k){
            \App\Models\Kelas::factory()->create([
                "kelas" => $k,
            ]);
        }
        for($i=0;$i< count($kompetensi);$i++){
            \App\Models\Jurusan::factory()->create([
                "jurusan" => $jurusan[$i],
                "kompetensi_keahlian" => $kompetensi[$i]
            ]);
        }

        for($k=1;$k<12;$k++){
            \App\Models\Spp::factory()->create([
                "tahun" => '2023',
                "bulan" => strlen($k)<2?'0'.strval($k):$k,
                "nominal" => 400000,
            ]);
        }

        \App\Models\User::factory(4)->create();
        \App\Models\Siswa::factory(4)->create();
        \App\Models\Petugas::factory(4)->create();

    }
}
