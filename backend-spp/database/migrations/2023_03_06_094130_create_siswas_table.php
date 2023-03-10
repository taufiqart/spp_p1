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
        Schema::create('siswas', function (Blueprint $table) {
            $table->id();
            $table->char('nisn',10)->unique();
            $table->char('nis',8)->unique();
            $table->string('nama');
            $table->foreignId('kelas_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('jurusan_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->text('alamat')->nullable();
            $table->string('no_tlp',13)->nullable();
            $table->foreignId('user_id')->nullable()->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('siswas');
    }
};
