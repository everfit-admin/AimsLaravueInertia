<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Link } from '@inertiajs/vue3'; // Import Inertia's Link component

// Dropdown for ACCOUNT MANAGEMENT
const isDropdownVisible = ref(false);
function toggleDropdown() {
  isDropdownVisible.value = !isDropdownVisible.value;
}
function handleClickOutside(event) {
  const dropdown = document.getElementById("dropdown");
  const button = document.getElementById("dropdownDefaultButton");
  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    isDropdownVisible.value = false;
  }
}

// Dropdown for MAINTENANCE
const isDropdownVisibleMain = ref(false);
function toggleDropdownMain() {
  isDropdownVisibleMain.value = !isDropdownVisibleMain.value;
}
function handleClickOutsideMain(event) {
  const dropdown = document.getElementById("dropdownMain");
  const button = document.getElementById("dropdownDefaultButtonMain");
  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    isDropdownVisibleMain.value = false;
  }
}

// Dropdown for POINT OF SALE
const isDropdownVisiblePos = ref(false);
function toggleDropdownPos() {
  isDropdownVisiblePos.value = !isDropdownVisiblePos.value;
}
function handleClickOutsidePos(event) {
  const dropdown = document.getElementById("dropdownPos");
  const button = document.getElementById("dropdownDefaultButtonPos");
  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    isDropdownVisiblePos.value = false;
  }
}

// Attach and clean up event listeners
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  document.addEventListener("click", handleClickOutsideMain);
  document.addEventListener("click", handleClickOutsidePos);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
  document.removeEventListener("click", handleClickOutsideMain);
  document.removeEventListener("click", handleClickOutsidePos);
});
</script>

<template>
  <div class="flex relative group">
    <!-- Sidebar -->
    <div class="bg-black min-h-[700px] text-white w-[45px] pt-[41px] transition-all duration-500 ease-in-out transform z-20">
      <div class="flex justify-center">
        <div>
          <div class="pt-3">
            <Link href="/procurement-dashboard">
              <img src="./images/icon-dashboard-portal.png" class="w-[30px]" alt="dashboard Icon" />
            </Link>
          </div>
          <div class="py-[7px]">
            <Link href="/department-request">
              <img src="./images/icon-management.png" class="w-[37px]" alt="user management icon" />
            </Link>
          </div>
          <div class="py-[7px]">
            <Link href="/purcha">
              <img src="./images/icon-supplier.png" class="w-[30px]" alt="maintenance icon" />
            </Link>
          </div>
          <div class="py-[4px]">
            <Link href="/purcha">
              <img src="./images/icon-receipt.png" class="w-[30px]" alt="point of sale icon" />
            </Link>
          </div>
          <div class="py-[12px]">
            <Link href="/budge">
              <img src="./images/icon-check.png" class="w-[30px]" alt="knowledge icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>

    <!-- Expanding Sidebar Menu -->
    <div class="bg-gray h-[100%] duration-500 border-r border-black group-hover:w-[220px] w-[290px] -translate-x-[500px] group-hover:translate-x-0 absolute top-0 left-11 z-10">
      <ul class="space-y-4 mt-[53px]">
        <li class="text-lg">
          <Link href="/procurement-dashboard" class="no-hover pl-3" :class="{ 'font-semibold bg-white pl-3 pr-[117px] py-1 shadow-lg no-hover': $page.url === '/procurement-dashboard' }">
            Dashboard
          </Link>
        </li>
        <li class="text-lg">
          <div class="flex hoverbox-sidebar parenthover-arrow relative">
                <Link href="/department-request" :class="{ 'font-semibold bg-white pr-[25px] py-1 shadow-lg no-hover': $page.url === '/department-request' }">
                  <button id="dropdownDefaultButton" class="text-black hover:bg-gray-200 focus:outline-none rounded-lg text-[17px] px-3 py-0 text-center inline-flex items-center">
                        Request Management
                    
                  </button>
                </Link>
                
                <svg
                  class="w-4 h-4 transition-transform duration-300 mt-[10px] ml-[3px] cursor-pointer absolute right-3 hovereffect-arrow"
                  
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                
                >
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
                <!-- Dropdown Menu -->
                <div class="hoverbox-sidebar absolute text-black shadow-lg hoverbox-links-aims">
                    <div>
                      <Link href="/department-request" class="block px-4 py-2 hover-bg rounded-md text-[15px]" :class="{ 'font-semibold bg-zinc-300 pr-[11px] py-1 shadow-lg no-hover': $page.url === '/department-request' }">
                        Department Request
                      </Link>
                    </div>
                    
                    <div>
                      <Link href="/moved" class="block px-4 py-2 hover-bg rounded-md text-[15px]" :class="{ 'font-semibold bg-zinc-300 pr-[11px] py-1 shadow-lg no-hover': $page.url === '/moved' }">
                        Purchase Order
                      </Link>
                    </div>
                    
                  </div>
              </div>
        </li>
        <li class="text-lg">
          <div class="flex hoverbox-sidebar parenthover-arrow relative">
              <Link href="/user" :class="{ 'font-semibold bg-white pr-[23px] py-1 shadow-lg no-hover': $page.url === '/user-management' }">
                <button id="dropdownDefaultButton" class="text-black hover:bg-gray-200 focus:outline-none rounded-lg text-[17px] px-3 py-0 text-center inline-flex items-center">
                      Supplier Management
                  
                </button>
              </Link>
              
              <svg
                class="w-4 h-4 transition-transform duration-300 mt-[10px] ml-[3px] cursor-pointer absolute right-3 hovereffect-arrow"
                
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              
              >
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg>
              <!-- Dropdown Menu -->
              <div class="hoverbox-sidebar absolute text-black shadow-lg hoverbox-links-aims">
                  <div>
                    <Link href="/user-" class="block px-4 py-2 hover-bg rounded-md text-[15px]" :class="{ 'font-semibold bg-zinc-300 pr-[11px] py-1 shadow-lg no-hover': $page.url === '/user-management' }">
                      Sample
                    </Link>
                  </div>
                  
                  <div>
                    <Link href="/department" class="block px-4 py-2 hover-bg rounded-md text-[15px]" :class="{ 'font-semibold bg-zinc-300 pr-[11px] py-1 shadow-lg no-hover': $page.url === '/department-management' }">
                      Sample
                    </Link>
                  </div>
                  
                </div>
            </div>
        </li>
        <li class="text-lg">
          <Link href="/bud" class="no-hover pl-3" :class="{ 'font-semibold bg-white pr-[69px] pl-3 py-1 shadow-lg no-hover': $page.url === '/bud' }">
            PO Receipts
          </Link>
        </li>
        <li class="text-lg">
          <Link href="/bud" class="no-hover pl-3" :class="{ 'font-semibold bg-white pr-[69px] pl-3 py-1 shadow-lg no-hover': $page.url === '/bud' }">
            Approval
          </Link>
        </li>
      </ul>
    </div>
  </div>
</template>
