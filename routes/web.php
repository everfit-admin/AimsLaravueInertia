<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('views/LoginPage');
});

Route::get('/home', function () {
    return Inertia::render('views/HomeView');
});

Route::get('/dashboard-aims', function () {
    return Inertia::render('views/aims/DashboardAims');
});

Route::get('/purchase-overview', function () {
    return Inertia::render('views/aims/PurchaseOverview');
});

Route::get('/purchase-requests', function () {
    return Inertia::render('views/aims/PurchaseRequests');
});

Route::get('/purchase-approval', function () {
    return Inertia::render('views/aims/PurchaseApproval');
});

Route::get('/budget-fund', function () {
    return Inertia::render('views/aims/BudgetFund');
});

Route::get('/asset-management', function () {
    return Inertia::render('views/aims/AssetManagement');
});

Route::get('/moved-assets-in', function () {
    return Inertia::render('views/aims/MovedAssetsIn');
});

Route::get('/moved-assets-out', function () {
    return Inertia::render('views/aims/MovedAssetsOut');
});

Route::get('/scrapped-assets', function () {
    return Inertia::render('views/aims/ScrappedAssets');
});

Route::get('/category', function () {
    return Inertia::render('views/aims/Category');
});

// IT Portal Routes
Route::get('/portal-dashboard', function () {
    return Inertia::render('views/itportal/PortalDashboard');
});

Route::get('/user-management', function () {
    return Inertia::render('views/itportal/UserManagement');
});

Route::get('/department-management', function () {
    return Inertia::render('views/itportal/DepartmentManagement');
});

// Procurement Routes
Route::get('/procurement-dashboard', function () {
    return Inertia::render('views/procurement/ProcurementDashboard');
});

Route::get('/department-request', function () {
    return Inertia::render('views/procurement/DepartmentRequest');
});



