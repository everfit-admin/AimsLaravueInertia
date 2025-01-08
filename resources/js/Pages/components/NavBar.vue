<script>
import { computed } from 'vue';
import { usePage, Link } from '@inertiajs/vue3';

export default {
  components: {
    Link, // Register the Inertia Link component
  },
  setup() {
    const page = usePage();

    // Safely retrieve the current URL
    const currentUrl = computed(() => page?.url || '');

    // Check if the current route matches any of the desired paths
    const isActive = computed(() =>
      ['/dashboard-aims', '/purchase-overview', '/purchase-approval', '/purchase-requests', '/asset-management', '/moved-assets-in', '/moved-assets-out', '/scrapped-assets', '/category'].includes(currentUrl.value)
    );
    const isActiveHome = computed(() =>
      ['/home'].includes(currentUrl.value)
    );
    const isActiveBudget = computed(() =>
      ['/budget-fund'].includes(currentUrl.value)
    );
    const isActiveItPortal = computed(() =>
      ['/portal-dashboard', '/user-management', '/department-management'].includes(currentUrl.value)
    );

    const isActiveProcurement = computed(() =>
      ['/procurement-dashboard', '/department-request'].includes(currentUrl.value)
    );

    return { isActive, isActiveItPortal, isActiveProcurement, currentUrl, isActiveBudget, isActiveHome };
  },
};
</script>

<template>
  <div class="grid grid-cols-5 h-10 pt-1.5 bg-black">
    <!-- Logo Section -->
    <div>
      <img src="./images/newera_logo_white.png" class="w-[100px] pl-2" alt="New Era Logo">
    </div>

    <!-- Navigation Links -->
    <div class="flex justify-center gap-8 col-span-3 font-bold text-white lg:text-md md:text-sm sm:text-xs text-[10px] xl:pt-1 pt-1">
      <div class="hover:scale-110 transform transition duration-300">
        <Link href="/home" class="no-hover-nav" :class="{ 'bg-silver text-black px-2 py-1 rounded-sm no-hover-nav': isActiveHome }">
          HOME
        </Link>
      </div>
      <div class="hover:scale-110 transform transition duration-300">
        <Link href="/dashboard-aims" class="no-hover-nav" :class="{ 'bg-silver text-black px-2 py-1 rounded-sm no-hover-nav': isActive }">
          AIMS
        </Link>
      </div>
      <div class="hover:scale-110 transform transition duration-300">
        <Link href="/budget-fund" class="no-hover-nav" :class="{ 'bg-silver text-black px-2 py-1 rounded-sm no-hover-nav': isActiveBudget }">
          BUDGET
        </Link>
      </div>
      <div class="hover:scale-110 transform transition duration-300">
        <Link href="/procurement-dashboard" class="no-hover-nav" :class="{ 'bg-silver text-black px-2 py-1 rounded-sm no-hover-nav': isActiveProcurement }">
          PROCUREMENT
        </Link>
      </div>
      <div class="hover:scale-110 transform transition duration-300">
        <Link href="/portal-dashboard" class="no-hover-nav" :class="{ 'bg-silver text-black px-2 py-1 rounded-sm no-hover-nav': isActiveItPortal }">
          PORTAL
        </Link>
      </div>
      <div class="hover:scale-110 transform transition duration-300">
        <Link href="/directory" class="no-hover-nav" :class="{ 'bg-silver text-black px-2 py-1 rounded-sm no-hover-nav': currentUrl.value === '/directory' }">
          DIRECTORY
        </Link>
      </div>
    </div>

    <!-- User Icon Section -->
    <div class="flex justify-end pr-2 relative">
      <div class="group">
        <div class="flex justify-center bg-white w-7 h-7 pt-1 rounded-full group-hover:opacity-50">
          <font-awesome-icon :icon="['far', 'user']"  class=""/>
        </div>
        <div class="z-50 absolute group-hover:-translate-x-[270px] translate-x-[50px] translate-y-[2px] duration-500">
            <div class="w-[300px] h-[750px] bg-white shadow-lg rounded-lg py-5 px-2 overflow-y-auto">
              <div class="flex justify-center">
                <div class="flex justify-center bg-slate-200 w-[120px] h-[120px] pt-1 rounded-full group-hover:opacity-50 shadow-lg">
                    <font-awesome-icon :icon="['far', 'user']"  class="w-[70px] h-[70px] py-[15px]"/>
                </div>
              </div>
              
              <div class="text-center">
                <h4 class="font-bold py-2 text-[20px]">Jeff Orilla</h4>
                <p>emailsample@gmail.com</p>
                <button class="bg-black font-bold text-white px-6 rounded-full py-1 my-3 hover:scale-110 duration-500">
                  Sign Out
                </button>
              </div>
              <div class="flex justify-center">
                <div class="grid grid-cols-2 gap-2">
                  <div class="w-[100px] h-[100px] bg-gray rounded-lg"></div>
                  <div class="w-[100px] h-[100px] bg-gray rounded-lg"></div>
                  <div class="w-[100px] h-[100px] bg-gray rounded-lg"></div>
                  <div class="w-[100px] h-[100px] bg-gray rounded-lg"></div>
                  <div class="w-[100px] h-[100px] bg-gray rounded-lg"></div>
                  <div class="w-[100px] h-[100px] bg-gray rounded-lg"></div>
                  <div class="w-[100px] h-[100px] bg-gray rounded-lg"></div>
                  <div class="w-[100px] h-[100px] bg-gray rounded-lg"></div>
                  <div class="w-[100px] h-[100px] bg-gray rounded-lg"></div>
                  <div class="w-[100px] h-[100px] bg-gray rounded-lg"></div>
                  <div class="w-[100px] h-[100px] bg-gray rounded-lg"></div>
                  <div class="w-[100px] h-[100px] bg-gray rounded-lg"></div>
                </div>
              </div>
              
              
            </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
