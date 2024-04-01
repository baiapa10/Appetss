<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomepageController;
use App\Http\Controllers\HomepagesController;
use App\Http\Controllers\PetController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Route::get('/', [PetController::class, 'index'])->name('pets.index');
// Route::get('/create', [PetController::class, 'create'])->name('pets.create');
// Route::post('/', [PetController::class, 'store'])->name('pets.store');
// Route::get('/{pet}', [PetController::class, 'show'])->name('pets.show');
// Route::get('/{pet}/edit', [PetController::class, 'edit'])->name('pets.edit');
// Route::put('/{pet}', [PetController::class, 'update'])->name('pets.update');
// Route::delete('/{pet}', [PetController::class, 'destroy'])->name('pets.destroy');


Route::get('/homepage', [HomepageController::class, 'index'] );
// Route::get('/homepages', [HomepagesController::class, 'index'] );

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/products', function () {
    return Inertia::render('Products');
})->middleware(['auth', 'verified'])->name('products');

Route::get('/homepages', [HomepagesController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('homepages');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
