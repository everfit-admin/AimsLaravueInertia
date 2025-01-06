<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Link } from '@inertiajs/vue3'; // Import Link from Inertia.js

// Reactive state to track dropdown visibility
const isDropdownVisible = ref(false);

function toggleDropdown() {
  isDropdownVisible.value = !isDropdownVisible.value;
}

// Close dropdown if clicked outside
function handleClickOutside(event) {
  const dropdown = document.getElementById("dropdown");
  const button = document.getElementById("dropdownDefaultButton");

  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    isDropdownVisible.value = false;
  }
}

// Attach event listeners to detect clicks outside the dropdown
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="flex relative group">
    <!-- Sidebar -->
    <div class="bg-black min-h-[700px] text-white w-[45px] pt-[41px] transition-all duration-500 ease-in-out transform z-20">
      <div class="flex justify-center">
        <div>
          <div class="py-[7px]">
            <Link href="/dashboard-aims">
              <font-awesome-icon :icon="['fas', 'gauge']" class="text-[30px] no-hover-side-icon" />
            </Link>
          </div>
          <div class="py-[7px]">
            <Link href="/purchase-overview">
              <font-awesome-icon :icon="['far', 'clock']" class="text-[30px] no-hover-side-icon" />
            </Link>
          </div>
          <div class="py-[7px]">
            <Link href="/purchase-requests">
              <font-awesome-icon :icon="['fas', 'bag-shopping']" class="text-[30px] no-hover-side-icon" />
            </Link>
          </div>
          <div class="py-[4px]">
            <Link href="/purchase-approval">
              <font-awesome-icon :icon="['far', 'circle-check']" class="text-[30px] no-hover-side-icon" />
            </Link>
          </div>
          <div class="py-[7px]">
            <Link href="/budget-fund">
              <font-awesome-icon :icon="['fas', 'money-check-dollar']" class="text-[30px] no-hover-side-icon" />
            </Link>
          </div>
          <div class="py-[7px]">
            <Link href="/asset-management">
              <font-awesome-icon :icon="['fas', 'warehouse']" class="text-[25px] no-hover-side-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>

    <!-- Expanding Sidebar Menu -->
    <div class="bg-gray h-[100%] duration-500 border-r border-black group-hover:w-[200px] w-[200px] -translate-x-[500px] group-hover:translate-x-0 absolute top-0 left-11 z-10">
      <ul class="space-y-4 mt-[53px]">
        <li class="text-lg">
          <Link href="/dashboard-aims" class="no-hover pl-3" :class="{ 'font-semibold bg-white pl-3 pr-[97px] py-1 shadow-lg no-hover': $page.url === '/dashboard-aims' }">
            Dashboard
          </Link>
        </li>
        <li class="text-lg">
          <Link href="/purchase-overview" class="no-hover pl-3" :class="{ 'font-semibold bg-white pl-3 pr-[31px] py-1 shadow-lg no-hover': $page.url === '/purchase-overview' }">
            Purchase Overview
          </Link>
        </li>
        <li class="text-lg">
          <Link href="/purchase-requests" class="no-hover pl-3" :class="{ 'font-semibold bg-white pr-[35px] pl-3 py-1 shadow-lg no-hover': $page.url === '/purchase-requests' }">
            Purchase Requests
          </Link>
        </li>
        <li class="text-lg">
          <Link href="/purchase-approval" class="no-hover pl-3" :class="{ 'font-semibold bg-white pr-[34px] pl-3 py-1 shadow-lg no-hover': $page.url === '/purchase-approval' }">
            Purchase Approval
          </Link>
        </li>
        <li class="text-lg">
          <Link href="/budget-fund" class="no-hover pl-3" :class="{ 'font-semibold bg-white pr-[69px] pl-3 py-1 shadow-lg no-hover': $page.url === '/budget-fund' }">
            Budget / Fund
          </Link>
        </li>
        <li class="text-lg">
          <!-- Dropdown Button -->
          <div class="flex">
            <Link href="/asset-management" :class="{ 'font-semibold bg-white pr-[25px] py-1 shadow-lg no-hover': $page.url === '/asset-management' }">
              <button id="dropdownDefaultButton" class="text-black hover:bg-gray-200 focus:outline-none rounded-lg text-[17px] px-3 py-0 text-center inline-flex items-center">
                Asset Management
              </button>
            </Link>
            <svg
              class="w-4 h-4 transition-transform duration-300 -rotate-90 mt-[10px] ml-[3px] cursor-pointer absolute right-3"
              :class="isDropdownVisible ? 'rotate-3' : ''"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
              @click.stop="toggleDropdown"
            >
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
          </div>

          <!-- Dropdown Menu -->
          <div
            id="dropdown"
            v-show="isDropdownVisible"
            class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ml-[14px] mt-[10px]"
          >
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/asset-management" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white no-hover" :class="{ 'font-semibold bg-zinc-300 pr-[11px] py-1 shadow-lg no-hover': $page.url === '/asset-management' }">
                  Assign Assets
                </Link>
              </li>
              <li>
                <Link href="/moved-assets-in" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white no-hover" :class="{ 'font-semibold bg-zinc-300 pr-[11px] py-1 shadow-lg no-hover': $page.url === '/moved-assets-in' }">
                  Moved Assets
                </Link>
              </li>
              <li>
                <Link href="/scrapped-assets" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white no-hover" :class="{ 'font-semibold bg-zinc-300 pr-[11px] py-1 shadow-lg no-hover': $page.url === '/scrapped-assets' }">
                  Scrapped Assets
                </Link>
              </li>
              <li>
                <Link href="/category" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white no-hover" :class="{ 'font-semibold bg-zinc-300 pr-[11px] py-1 shadow-lg no-hover': $page.url === '/category' }">
                  Category
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
