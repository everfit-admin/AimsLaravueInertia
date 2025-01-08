<script setup>
import NavBar from '../components/NavBar.vue'
import FooterPage from '../components/FooterPage.vue'
</script>

<script>
import { Link } from '@inertiajs/vue3';
</script>
<template>
  <header>
    <NavBar/>
  </header>
  <div class="flex flex-col min-h-screen">
      <div class="">
        <div class="container-bg">
          <img src="../components/images/bg.png" alt="">
          <div class="slicedBox animate-animationslicedBox"></div>
        </div>
        <div>
          <img src="../components/images/newera_logo.png" class="animate-opacityAnimation absolute xl:top-[100px] md:top-[70px] top-[65px] lg:right-[80px] md:right-[70px] right-[30px] xl:w-[480px] lg:w-[420px] md:w-[320px] w-[220px] duration-500 ease-in-out transform" alt="New Era Logo">
        </div>
        <div class="absolute xl:top-[240px] lg:top-[200px] md:top-[160px] top-[130px] lg:right-[80px] md:right-[70px] right-[30px] w-[100%] flex justify-between">
          <p class="animate-animationslicedBox text-white xl:ml-[150px] lg:ml-[160px] md:ml-[80px] ml-[60px] xl:text-3xl lg:text-[20px] md:text-[18px] text-[15px] duration-500 ease-in-out transform">
            Welcome to New Era <br> Authentic Information System, Jeff
          </p>
          <div class="relative animate-opacityAnimation">
            <p class="duration-500 ease-in-out transform">How can I help you today?</p>
            <img src="../components/images/icon-search.png" class="absolute left-2 xl:top-[43px] lg:top-[40px] md:top-[41px] top-[39px] transform -translate-y-1/2 xl:w-[25px] xl:h-[25px] lg:w-[20px] lg:h-[20px] w-[16px] h-[16px]  z-10" alt="search icon">
            <input name="search" id="search" type="text" class="xl:w-[550px] lg:w-[500px] md:w-[350px] w-[250px] xl:text-xl lg:text-md md:text-[15px] text-[10px] py-1 xl:pl-10 lg:pl-8 md:pl-6 sm:pl-6 rounded-md shadow-2xl duration-500 ease-in-out transform border bg-white" placeholder="Search now">
          </div>
        </div>
    </div>
    <div class="flex justify-center">
      <div class="flex xl:gap-10 lg:gap-7 md:gap-4 gap-3 md:py-5 py-2">
        <a href="">
          <div class="flip-card animate-slideInLeft">
            <div class="flip-card-inner">
              <div class="flip-card-front relative xl:w-[300px] xl:h-[300px] lg:w-[230px] lg:h-[230px] md:w-[200px] md:h-[200px] w-[160px] h-[160px] bg-black flex justify-center rounded-md duration-500 ease-in-out transform">
                <h2 class="absolute xl:top-13 lg:top-10 md:top-7 top-[19px] xl:text-xl lg:text-[17px] md:text-[15px] text-xs text-white font-bold duration-500 ease-in-out transform">ASSET INVENTORY</h2>
                <img src="../components/images/asset_inventory.png" class="absolute xl:bottom-12 lg:bottom-10 md:bottom-9 bottom-8 xl:w-[200px] lg:w-[150px] md:w-[130px] w-[100px] duration-500 ease-in-out transform" alt="">
              </div>
              <div class="flip-card-back text-black absolute top-0 rounded-md xl:w-[300px] xl:h-[300px] lg:w-[230px] lg:h-[230px] md:w-[200px] md:h-[200px] w-[160px] h-[160px]">
                <div class="xl:mt-12 lg:mt-8 md:mt-7 mt-3">
                  <button name="" id="" class="bg-white hoverbutton-links text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow w-[66%] xl:text-[15px] lg:text-[10px] md:text-[8px] text-[8px]  my-2">
                    <Link href="/purchase-overview">Purchase Overview</Link>
                    
                  </button>
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow w-[66%] xl:text-[15px] lg:text-[10px] md:text-[8px] text-[8px] my-2">
                    <Link href="/purchase-requests">Purchase Requests</Link>
                  </button>
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow w-[66%] xl:text-[15px] lg:text-[10px] md:text-[8px] text-[8px] my-2">
                    <Link href="/purchase-approval">Purchase Approval</Link>
                  </button>
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow w-[66%] xl:text-[15px] lg:text-[10px] md:text-[8px] text-[8px] my-2">
                    <Link href="/budget-fund">Budget Fund</Link>
                  </button>
                  
                  <button name="" id="" class="relative group bg-white text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow w-[66%] xl:text-[15px] lg:text-[10px] md:text-[8px] text-[8px] my-2 hoverbox-links">
    
                    Asset Management 
                    <svg
                      class="w-[20%] h-[20%] translate-x-[40%] xl:-translate-y-[25px] -translate-y-[20px] transition-transform duration-300 -rotate-90 group-hover:rotate-3 mt-[10px] ml-[3px] cursor-pointer absolute right-3"
                      
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    
                    >
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                    <div class="hoverboxtext-links absolute text-black shadow-lg hoverbox-links">
                      <div>
                        <Link href="asset-management" class="hover:text-white hover:bg-black px-[23%]">
                          Assign Assets
                        </Link>
                      </div>
                      
                      <div>
                          <Link href="moved-assets-in" class="hover:text-white hover:bg-black px-[23%]">
                            Moved Assets
                          </Link>
                      </div>

                      <div>
                        <Link href="scrapped-assets" class="hover:text-white hover:bg-black px-[19%]">
                          Scrapped Assets
                        </Link>
                      </div>
                      
                      <div>
                        <Link href="category" class="hover:text-white hover:bg-black px-[30%]">
                          Category
                        </Link>
                      </div>
                    </div>
                  </button>
                </div>
                
              </div>
            </div>
          </div>
          
        </a> 
        <a href="">
          <div class="flip-card animate-slideInLeft">
            <div class="flip-card-inner">
              <div class="flip-card-front relative xl:w-[300px] xl:h-[300px] lg:w-[230px] lg:h-[230px] md:w-[200px] md:h-[200px] w-[160px] h-[160px] bg-black flex justify-center rounded-md duration-500 ease-in-out transform">
                <h2 class="absolute xl:top-13 lg:top-10 md:top-7 top-[15px] xl:text-xl lg:text-[17px] md:text-[15px] text-xs text-white font-bold duration-500 ease-in-out transform">PORTAL</h2>
                <img src="../components/images/portal.png" class="absolute xl:bottom-[60px] lg:bottom-10 md:bottom-10 bottom-10 xl:w-[200px] lg:w-[150px] md:w-[130px] w-[100px] duration-500 ease-in-out transform" alt="">
              </div>
              <div class="flip-card-back text-black absolute top-0 rounded-md xl:w-[300px] xl:h-[300px] lg:w-[230px] lg:h-[230px] md:w-[200px] md:h-[200px] w-[160px] h-[160px]">
                <div class="xl:mt-12 lg:mt-8 md:mt-7 mt-3">
                  <button name="" id="" class="relative group bg-white text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow w-[66%] xl:text-[15px] lg:text-[10px] md:text-[8px] text-[8px] my-2 hoverbox-links">
    
                    Account Management
                    <svg
                      class="w-[20%] h-[20%] translate-x-[50%] xl:-translate-y-[25px] -translate-y-[20px] transition-transform duration-300 -rotate-90 group-hover:rotate-3 mt-[10px] ml-[3px] cursor-pointer absolute right-3"
                      
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    
                    >
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                    <div class="hoverboxtext-links absolute text-black shadow-lg hoverbox-links">
                      <div>
                        <Link href="/user-management" class="hover:text-white hover:bg-black px-[36%]">
                          User
                        </Link>
                      </div>
                      
                      <div>
                          <Link href="/department-management" class="hover:text-white hover:bg-black px-[23%]">
                            Department
                          </Link>
                      </div>

                      
                    </div>
                  </button>
                  
                  <button name="" id="" class="relative group bg-white text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow w-[66%] xl:text-[15px] lg:text-[10px] md:text-[8px] text-[8px] my-2 hoverbox-links">
    
                    Point of Sale
                    <svg
                      class="w-[20%] h-[20%] translate-x-[50%] xl:-translate-y-[25px] -translate-y-[20px] transition-transform duration-300 -rotate-90 group-hover:rotate-3 mt-[10px] ml-[3px] cursor-pointer absolute right-3"
                      
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    
                    >
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                    <div class="hoverboxtext-links absolute text-black shadow-lg hoverbox-links">
                      <div>
                        <Link href="" class="hover:text-white hover:bg-black px-[23%]">
                          Sample
                        </Link>
                      </div>
                      
                      <div>
                          <Link href="" class="hover:text-white hover:bg-black px-[23%]">
                            Sample
                          </Link>
                      </div>

                      <div>
                        <Link href="" class="hover:text-white hover:bg-black px-[19%]">
                          Sample
                        </Link>
                      </div>
                      
                      <div>
                        <Link href="" class="hover:text-white hover:bg-black px-[30%]">
                          Sample
                        </Link>
                      </div>
                    </div>
                  </button>
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow w-[66%] xl:text-[15px] lg:text-[10px] md:text-[8px] text-[8px] my-2">
                    Knowledge Vault
                  </button>
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow w-[66%] xl:text-[15px] lg:text-[10px] md:text-[8px] text-[8px] my-2">
                    Logs
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        </a> 
        <a href="">
          <div class="flip-card animate-slideInLeft">
            <div class="flip-card-inner">
              <div class="flip-card-front relative xl:w-[300px] xl:h-[300px] lg:w-[230px] lg:h-[230px] md:w-[200px] md:h-[200px] w-[160px] h-[160px] bg-black flex justify-center rounded-md duration-500 ease-in-out transform">
                <h2 class="absolute xl:top-13 lg:top-10 md:top-7 top-[15px] xl:text-xl lg:text-[17px] md:text-[15px] text-xs text-white font-bold duration-500 ease-in-out transform">PROCUREMENT</h2>
                <img src="../components/images/procurement.png" class="absolute xl:bottom-[60px] lg:bottom-10 md:bottom-10 bottom-10 xl:w-[200px] lg:w-[150px] md:w-[130px] w-[100px] duration-500 ease-in-out transform" alt="">
              </div>
              <div class="flip-card-back text-black absolute top-0 rounded-md xl:w-[300px] xl:h-[300px] lg:w-[230px] lg:h-[230px] md:w-[200px] md:h-[200px] w-[160px] h-[160px]">
                <div class="xl:mt-12 lg:mt-8 md:mt-7 mt-3">
                  <button name="" id="" class="relative group bg-white text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow w-[66%] xl:text-[15px] lg:text-[10px] md:text-[8px] text-[8px] my-2 hoverbox-links">
    
                      Request Management
                      <svg
                        class="w-[20%] h-[20%] translate-x-[50%] xl:-translate-y-[25px] -translate-y-[20px] transition-transform duration-300 -rotate-90 group-hover:rotate-3 mt-[10px] ml-[3px] cursor-pointer absolute right-3"
                        
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      
                      >
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                      </svg>
                      <div class="hoverboxtext-links absolute text-black shadow-lg hoverbox-links">
                        <div>
                          <Link href="" class="hover:text-white hover:bg-black px-[23%]">
                            Sample
                          </Link>
                        </div>
                        
                        <div>
                            <Link href="" class="hover:text-white hover:bg-black px-[23%]">
                              Sample
                            </Link>
                        </div>

                        <div>
                          <Link href="" class="hover:text-white hover:bg-black px-[19%]">
                            Sample
                          </Link>
                        </div>
                        
                        <div>
                          <Link href="" class="hover:text-white hover:bg-black px-[30%]">
                            Sample
                          </Link>
                        </div>
                      </div>
                    </button>
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow w-[66%] xl:text-[15px] lg:text-[10px] md:text-[8px] text-[8px] my-2">
                    Supplier Management
                  </button>
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow w-[66%] xl:text-[15px] lg:text-[10px] md:text-[8px] text-[8px] my-2">
                    PO Receipts
                  </button>
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow w-[66%] xl:text-[15px] lg:text-[10px] md:text-[8px] text-[8px] my-2">
                    Approval
                  </button>
                </div>
              </div>
            </div>
            
          </div>
          
        </a> 
        <a href="">
          <div class="flip-card animate-slideInLeft">
            <div class="flip-card-inner">
              <div class="flip-card-front relative xl:w-[300px] xl:h-[300px] lg:w-[230px] lg:h-[230px] md:w-[200px] md:h-[200px] w-[160px] h-[160px] bg-black flex justify-center rounded-md duration-500 ease-in-out transform">
                <h2 class="absolute xl:top-13 lg:top-10 md:top-7 top-[15px] xl:text-xl lg:text-[17px] md:text-[15px] text-xs text-white font-bold duration-500 ease-in-out transform">DIRECTORY</h2>
                <img src="../components/images/directory.png" class="absolute xl:bottom-9 bottom-5 xl:w-[200px] lg:w-[150px] md:w-[130px] w-[100px] duration-500 ease-in-out transform" alt="">
              </div>
              <div class="flip-card-back text-black absolute top-0 rounded-md xl:w-[300px] xl:h-[300px] lg:w-[230px] lg:h-[230px] md:w-[200px] md:h-[200px] w-[160px] h-[160px]">
                <div class="xl:mt-12 lg:mt-8 md:mt-7 mt-3">
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow w-[66%] xl:text-[15px] lg:text-[10px] md:text-[8px] text-[8px] my-2">
                  Button One
                  </button>
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow w-[66%] xl:text-[15px] lg:text-[10px] md:text-[8px] text-[8px] my-2">
                    Button Two
                  </button>
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow w-[66%] xl:text-[15px] lg:text-[10px] md:text-[8px] text-[8px] my-2">
                    Button Three
                  </button>
                </div>
              </div>
            </div>
          </div>
        </a> 
      </div>
    </div>
    <footer class="mt-auto">
        <FooterPage/>
    </footer>
  </div>
  
</template>

