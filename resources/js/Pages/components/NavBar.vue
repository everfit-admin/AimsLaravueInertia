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

    const isActiveItPortal = computed(() =>
      ['/portal-dashboard', '/user-management', '/department-management'].includes(currentUrl.value)
    );

    const isActiveProcurement = computed(() =>
      ['/procurement-dashboard', '/department-request'].includes(currentUrl.value)
    );

    return { isActive, isActiveItPortal, isActiveProcurement, currentUrl };
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
        <Link href="/home" class="no-hover-nav" :class="{ 'bg-silver text-black px-2 py-1 rounded-sm no-hover-nav': currentUrl.value === '/home' }">
          HOME
        </Link>
      </div>
      <div class="hover:scale-110 transform transition duration-300">
        <Link href="/dashboard-aims" class="no-hover-nav" :class="{ 'bg-silver text-black px-2 py-1 rounded-sm no-hover-nav': isActive }">
          AIMS
        </Link>
      </div>
      <div class="hover:scale-110 transform transition duration-300">
        <Link href="/budget-fund" class="no-hover-nav" :class="{ 'bg-silver text-black px-2 py-1 rounded-sm no-hover-nav': currentUrl.value === '/budget-fund' }">
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
    <div class="flex justify-end pr-2">
      <div class="flex justify-center bg-white w-7 h-7 pt-1 rounded-full">
        <font-awesome-icon :icon="['far', 'user']" />
      </div>
    </div>
  </div>
</template>
