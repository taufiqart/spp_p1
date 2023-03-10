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
            $table->foreignId('user_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('petugas_id')->constrained('users')->onUpdate('cascade')->onDelete('cascade');
            $table->date('tgl_bayar');
            $table->string('bulan_dibayar',8);
            $table->string('tahun_dibayar',4);
            $table->foreignId('spp_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->double('jumlah_bayar');

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
