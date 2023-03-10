<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Siswa>
 */
class SiswaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "nisn"=> fake()->unique()->numberBetween(1000000000,9999999999) ,
            "nis"=> fake()->unique()->numberBetween(10000000,99999999),
            "nama"=>fake()->name(),
            "kelas_id"=>random_int(1,3),
            "jurusan_id"=>random_int(1,5),
            "alamat"=>null,
            "no_tlp"=>null,
            "user_id"=>null,
        ];
    }
}
