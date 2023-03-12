<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pembayarans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('siswa_id')->constrained()->onUpdate('cascade');
            $table->foreignId('petugas_id')->constrained('users')->onUpdate('cascade');
            $table->date('tgl_bayar');
            $table->foreignId('spp_id')->constrained()->onUpdate('cascade');
            $table->double('jumlah_bayar');
            $table->boolean('status');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pembayarans');
    }
};
