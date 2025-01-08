<script setup>
import NavBar from '../../components/NavBar.vue'
import PortalSidebarPannel from '../../components/PortalSidebarPannel.vue';
import Swal from 'sweetalert2'
import Modal from '../../components/modals/Modal.vue';
import ModalfitSize from '../../components/modals/ModalfitSize.vue';

import { ref } from 'vue';
 
const assetInventory = ref(false);
function toggleAssetInventory() {
    assetInventory.value = !assetInventory.value;
}

const itPortal = ref(false);
function toggleItPortal() {
    itPortal.value = !itPortal.value;
}



//create departmemt
const isModalCreateDepartment = ref(false);

function openDepartmentModal() {
    isModalCreateDepartment.value = true;
}

function closeDepartmentModal() {
    isModalCreateDepartment.value = false;
}

//edit department
const isModalEditDepartment = ref(false);

function openEditDepartmentModal() {
    isModalEditDepartment.value = true;
}

function closeEditDepartmentModal() {
    isModalEditDepartment.value = false;
}

//toggle for SWITCH ACTIVE
const isSwitchActive = ref(false);

function toggleSwitchActive() {
    isSwitchActive.value = !isSwitchActive.value;
}
</script>

<script>


export default {
    data() {
        return {
            search: '',
            headers: [
                { title: '#', value: 'number' },
                { title: 'ID', value: 'id', sortable: false },
                { title: 'FIRST NAME', value: 'first_name' },
                { title: 'LAST NAME', value: 'last_name', sortable: false },
                { title: 'EMAIL', value: 'email', sortable: false },
                { title: 'ROLE', value: 'role', sortable: false },
                { title: 'STATUS', value: 'status', sortable: false },
                { title: 'ACTION', value: 'action', sortable: false },
                


            ],
            items: [
                { number: '1', id: '8756435', first_name: 'Jeff', last_name: 'Orilla', email: 'jefforilla@authenticcaps.com.ph', role: 'Administrator', status: 'active' },
                
            ]
            
        }
    
    },

    methods: {
        editItem(item) {
            // Logic to edit the item
            console.log("Edit item:", item);
            // Here you can open a modal to edit the item, or redirect to another page
        },
        saveChanges(item) {
            // Logic to save changes the item
            console.log("save changes item:", item);
            // show a confirmation
            Swal.fire({
                title: 'Are you sure you want to save changes?',
                text: "",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!',
                customClass: {
                    confirmButton: 'text-white border-0',
                    cancelButton: 'text-white',
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    // Perform delete operation here
                    Swal.fire({
                        title: 'Saved Successfully!',
                        text: '', // Optional, you can add a message here
                        icon: 'success', // This determines the alert type
                        confirmButtonText: 'OK', // Customize the button text
                        confirmButtonColor: '#3085d6', // Customize the button color
                        customClass: {
                            confirmButton: 'text-white border-0',
                            cancelButton: 'text-white',
                        }
                    })
                    
                }
            });
        }
    },  
    
}
</script>

<template>
    <header>
        <NavBar />
    </header>
      <!--Create/add Department-->
      <ModalfitSize :isVisible="isModalCreateDepartment" @close="closeDepartmentModal">
        <div class="px-2 py-2">
            <div class="flex justify-between">
                <div class="flex items-center">
                    <h4 class="font-semibold text-[20px]">Create Department</h4>
                </div>
                <div>
                    <img src="../../components/images/icon-check-1.png" class="w-[40px] cursor-pointer hover:scale-105 duration-500" @click="saveChanges" alt="">
                </div>
            </div>
            
            <div class="flex justify-center">
                <div class="w-[100%] h-0.5 bg-gray mt-[10px] mb-[20px] rounded-full duration-500 ease-in-out transform"></div>
            </div>
            <div class="">
                <div>
                    <div class="flex justify-between">
                        <label for="" class="pt-2">ID#:</label>
                        <input type="text" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                    </div>
                    <div class="flex justify-between">
                        <label for="" class="pt-2">Department:</label>
                        <input type="text" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                    </div>
                    <div class="flex justify-between">
                        <label for="" class="pt-2">Department Code:</label>
                        <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                    </div>
                    <div class="flex justify-between">
                        <label for="" class="pt-2">Description:</label>
                        <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                    </div>
                
                    <div class="flex justify-between">
                        <label for="" class="pt-2">Location:</label>
                        <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                    </div>
                    <div class="flex justify-between">
                        <label for="" class="pt-2">Employee Count:</label>
                        <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                    </div>
                    <div class="flex justify-between">
                        <label for="" class="pt-2">Department Head:</label>
                        <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                    </div>
                    <div class="flex justify-between">
                        <label for="" class="pt-2">Date Creation:</label>
                        <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                    </div>
                    <div class="flex justify-between">
                        <label for="" class="pt-2">Created By:</label>
                        <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                    </div>
                    <div class="flex justify-between">
                        <label for="" class="pt-2">Modified By:</label>
                        <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                    </div>
                    <div class="flex justify-between">
                        <label for="" class="pt-2">Date Modified:</label>
                        <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                    </div>
                    <div class="flex justify-between">
                        <label for="" class="pt-2">Remarks:</label>
                        <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                    </div>
                    <div class="flex gap-[155px]">
                        <label for="" class="pt-2">Status:</label>
                        <div class="flex justify-center my-1 tooltip-activedepartment">
                            <label class="switch">
                                <input type="checkbox" @click="toggleSwitchActive">
                                <span class="slider round"></span>
                                <span v-if="isSwitchActive === true" class="tooltiptext-activedepartment">Active</span>
                                <span v-if="isSwitchActive === false" class="tooltiptext-activedepartment">Inactive</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </ModalfitSize>
      <!--Edit Department-->
      <ModalfitSize :isVisible="isModalEditDepartment" @close="closeEditDepartmentModal">
        <div class="px-2 py-2">
            <div class="flex justify-between">
                <div class="flex items-center">
                    <h4 class="font-semibold text-[20px]">Edit Department</h4>
                </div>
                <div>
                    <img src="../../components/images/icon-check-1.png" class="w-[40px] cursor-pointer hover:scale-105 duration-500" @click="saveChanges" alt="">
                </div>
            </div>
            
            <div class="flex justify-center">
                <div class="w-[100%] h-0.5 bg-gray mt-[10px] mb-[20px] rounded-full duration-500 ease-in-out transform"></div>
            </div>
            <div class="">
                <div>
                    <div class="flex justify-between">
                        <label for="" class="pt-2">ID#:</label>
                        <input type="text" disabled class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                    </div>
                    <div class="flex justify-between">
                        <label for="" class="pt-2">Department:</label>
                        <input type="text" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                        <img src="../../components/images/icon-edit-2.png" class="w-[18px] h-[18px] opacity-40 absolute right-4" alt="Edit Icon">
                    </div>
                    <div class="flex justify-between">
                        <label for="" class="pt-2">Department Code:</label>
                        <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                        <img src="../../components/images/icon-edit-2.png" class="w-[18px] h-[18px] opacity-40 absolute right-4" alt="Edit Icon">
                    </div>
                    <div class="flex justify-between">
                        <label for="" class="pt-2">Description:</label>
                        <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                        <img src="../../components/images/icon-edit-2.png" class="w-[18px] h-[18px] opacity-40 absolute right-4" alt="Edit Icon">
                    </div>
                
                    <div class="flex justify-between">
                        <label for="" class="pt-2">Location:</label>
                        <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                        <img src="../../components/images/icon-edit-2.png" class="w-[18px] h-[18px] opacity-40 absolute right-4" alt="Edit Icon">
                    </div>
                    <div class="flex justify-between">
                        <label for="" class="pt-2">Employee Count:</label>
                        <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                        <img src="../../components/images/icon-edit-2.png" class="w-[18px] h-[18px] opacity-40 absolute right-4" alt="Edit Icon">
                    </div>
                    <div class="flex justify-between">
                        <label for="" class="pt-2">Department Head:</label>
                        <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                        <img src="../../components/images/icon-edit-2.png" class="w-[18px] h-[18px] opacity-40 absolute right-4" alt="Edit Icon">
                    </div>
                    <div class="flex justify-between">
                        <label for="" class="pt-2">Date Creation:</label>
                        <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                        <img src="../../components/images/icon-edit-2.png" class="w-[18px] h-[18px] opacity-40 absolute right-4" alt="Edit Icon">
                    </div>
                    <div class="flex justify-between">
                        <label for="" class="pt-2">Created By:</label>
                        <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                        <img src="../../components/images/icon-edit-2.png" class="w-[18px] h-[18px] opacity-40 absolute right-4" alt="Edit Icon">
                    </div>
                    <div class="flex justify-between">
                        <label for="" class="pt-2">Modified By:</label>
                        <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                        <img src="../../components/images/icon-edit-2.png" class="w-[18px] h-[18px] opacity-40 absolute right-4" alt="Edit Icon">
                    </div>
                    <div class="flex justify-between">
                        <label for="" class="pt-2">Date Modified:</label>
                        <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                        <img src="../../components/images/icon-edit-2.png" class="w-[18px] h-[18px] opacity-40 absolute right-4" alt="Edit Icon">
                    </div>
                    <div class="flex justify-between">
                        <label for="" class="pt-2">Remarks:</label>
                        <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
                        <img src="../../components/images/icon-edit-2.png" class="w-[18px] h-[18px] opacity-40 absolute right-4" alt="Edit Icon">
                    </div>
                    <div class="flex gap-[155px]">
                        <label for="" class="pt-2">Status:</label>
                        <div class="flex justify-center my-1 tooltip-activedepartment">
                            <label class="switch">
                                <input type="checkbox" @click="toggleSwitchActive">
                                <span class="slider round"></span>
                                <span v-if="isSwitchActive === true" class="tooltiptext-activedepartment">Active</span>
                                <span v-if="isSwitchActive === false" class="tooltiptext-activedepartment">Inactive</span>
                            </label>
                        </div>
                        <img src="../../components/images/icon-edit-2.png" class="w-[18px] h-[18px] opacity-40 absolute right-4" alt="Edit Icon">
                    </div>
                </div>
            </div>
        </div>
      </ModalfitSize>
    <div class="flex flex-col min-h-screen">
        <div class="mt-4">
            <div class="text-white bg-black h-[40px] pt-1">
                <div class="flex ml-[10px]">
                    <img src="../../components/images/icon_aims.png" class="w-[30px] mt-1" alt="Aims Icon">
                    <h2 class="text-white text-[20px] font-bold ml-[20px]">AIMS</h2>
                </div>
            </div>
            <div class="flex">
                <PortalSidebarPannel />
                <div class="h-screen animate-opacityAnimation">
                    <div class="absolute w-[100%] h-[100%] min-h-[700px] bg-black z-40 opacity-35" :class="isModalCreateDepartment || isModalEditDepartment ? 'block' : 'hidden'"></div>
                        <div class="flex-grow">
                            <div class="mt-5">
                                <h1 class="text-[23px] font-semibold ml-[40px]">Department</h1>
                            </div>
                            <div class="flex">
                                <div class="flex mt-[20px] ml-[35px] relative">
                                    <font-awesome-icon :icon="['fas', 'square-plus']" class="text-[27px] px-2 cursor-pointer hover:scale-110 duration-500" @click="openDepartmentModal"/>
                                    <h3 class="text-[20px] font-semibold">Add Departmant</h3> 
                                </div>
                            </div>
                            <div class="flex justify-center">
                                <div
                                    class="xl:w-[90%] lg:w-[85%] w-[75%] h-0.5 bg-gray mt-[20px] mb-[20px] mr-[99px] rounded-full duration-500 ease-in-out transform">
                                </div>
                            </div>
                            <div class="">
                                <v-container fluid class="pa-5">
                                    <div class="xl:w-[93%] w-[90%]">
                                        <v-card class="elevation-3">
                                            <v-card-title class="d-flex align-center">
                                                <v-icon class="mr-2">mdi-monitor-dashboard</v-icon>
                                                <span class="text-h6 font-weight-bold"></span>
                                                <v-spacer></v-spacer>
                                                <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                                                    hide-details dense class="mr-4 search-bar"><img src="../../components/images/icon-search.png" class="w-[30px] h-[30px] absolute right-2" alt="">
                                                </v-text-field>
                                            </v-card-title>

                                            <v-data-table :headers="headers" :items="items" :search="search"
                                                class="elevation-1 table-style w-screen" dense :items-per-page="5" @click:row="openApprovalModal">
                                                
                                                <template #item.action="{ item }">
                                                    <img src="../../components/images/icon-edit.png" @click.stop="openEditDepartmentModal" class="w-[25px] h-[25px] cursor-pointer z-50 ml-5" alt="Edit Icon">
                                                </template>
                                            </v-data-table>
                                        </v-card>
                                    </div>
                                </v-container>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div class="bg-black text-center text-white p-1 mt-auto">
            Authentic Holding Company Inc: All rights reserved . 2024 &copy;
        </div>
    </div>
</template>


<style scoped></style>