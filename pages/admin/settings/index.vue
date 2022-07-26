<template>
    <div class="mt-5 mb-10">
        <!-- new task modal -->
        <NewAlarmModal :show="showAddTruckModal"  @close="showAddTruckModal=false"></NewAlarmModal>

        <div class="w-full mb-5">
          <RealtimeAlert/>
        </div>

        <div class="flex flex-wrap items-center justify-between mb-5 space-y-2">
            <!-- title -->
            <div class="w-full md:w-1/2">
                <h1 class="text-3xl text-center md:text-left font-blod">ตั้งค่าการแจ้งเตือน</h1>
            </div>
            <div class="w-full md:block md:w-1/2">
                <button @click="toggleAddTruckModal()" class="float-right w-full px-2 py-1 text-white bg-blue-500 border-2 border-blue-400 shadow-md md:w-auto rounded-3xl text-md">+ การแจ้งเตือน</button>
            </div>
        </div>
        
        <!-- search form -->
        <div class="flex items-center justify-between">
            <!-- search form -->
             <div class="relative hidden md:flex md:w-1/2">
                <div class="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400">
                    <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input id="search" type="search" name="search" class="w-full h-10 pl-10 pr-4 text-sm placeholder-gray-500 border border-gray-300 rounded-lg sm:text-base focus:outline-none focus:border-indigo-400" placeholder="Search..."/>
            </div>
        </div>

        <!-- table -->
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
              <div class="w-full overflow-x-auto">
                <table class="w-full whitespace-no-wrap">
                  <thead>
                    <tr class="text-sm font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-blue-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">
                      <th class="px-4 py-3">รหัส</th>
                      <th class="hidden px-4 py-3 lg:table-cell">ชื่อ</th>
                      <th class="px-4 py-3">เงื่อนไข</th>                                         
                      <th class="px-4 py-3">เตือนจาก</th>               
                      <th class="hidden px-4 py-3 md:table-cell">ระดับ</th>               
                      <th class="px-4 py-3">สถานะ</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                    <tr class="text-gray-700 dark:text-gray-400">
                      <td class="px-4 py-3">
                        <NuxtLink to="/admin/settings/info">
                          <p class="font-semibold text-blue-500 hover:underline">ALI-0001</p>
                        </NuxtLink>
                      </td>
                      <td class="hidden px-4 py-3 lg:table-cell">
                          <p class="">การเปิด/ปิดตู้คอนเทนเนอร์</p>
                      </td>
                      <td class="px-4 py-3">
                          <p class="flex items-center">อุณหภูมิ
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>70°C
                          </p>
                          <p class="flex items-center">อุณหภูมิ 
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>25°C
                          </p>
                          <p class="flex items-center">ความชื้น
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>80%
                          </p>
                      </td>
                      <td class="px-4 py-3">
                        <NuxtLink to="/admin/containers/info">
                          <p class="font-semibold text-blue-500 hover:underline">JBI-0001</p>
                        </NuxtLink>
                      </td>
                      <td class="hidden px-4 py-3 md:table-cell">
                          <span class="px-2 py-1 text-sm font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-green-100">
                            อันตราย
                          </span>
                      </td>
                      <td class="px-4 py-3">
                          <span class="px-2 py-1 text-sm font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            เปิด
                          </span>
                      </td>
                    </tr>

                    <tr class="text-gray-700 dark:text-gray-400">
                      <td class="px-4 py-3">
                        <NuxtLink to="/admin/settings/info">
                          <p class="font-semibold text-blue-500 hover:underline">ALI-0001</p>
                        </NuxtLink>
                      </td>
                      <td class="hidden px-4 py-3 lg:table-cell">
                          <p class="">การเปิด/ปิดตู้คอนเทนเนอร์</p>
                      </td>
                      <td class="px-4 py-3">
                          <p class="flex items-center">อุณหภูมิ
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>70°C
                          </p>
                          <p class="flex items-center">อุณหภูมิ 
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>25°C
                          </p>
                          <p class="flex items-center">ความชื้น
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>80%
                          </p>
                      </td>
                      <td class="px-4 py-3">
                        <NuxtLink to="/admin/containers/info">
                          <p class="font-semibold text-blue-500 hover:underline">JBI-0001</p>
                        </NuxtLink>
                      </td>
                      <td class="hidden px-4 py-3 md:table-cell">
                          <span class="px-2 py-1 text-sm font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-green-100">
                            อันตราย
                          </span>
                      </td>
                      <td class="px-4 py-3">
                          <span class="px-2 py-1 text-sm font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            เปิด
                          </span>
                      </td>
                    </tr>

                    <tr class="text-gray-700 dark:text-gray-400">
                      <td class="px-4 py-3">
                        <NuxtLink to="/admin/settings/info">
                          <p class="font-semibold text-blue-500 hover:underline">ALI-0001</p>
                        </NuxtLink>
                      </td>
                      <td class="hidden px-4 py-3 lg:table-cell">
                          <p class="">การเปิด/ปิดตู้คอนเทนเนอร์</p>
                      </td>
                      <td class="px-4 py-3">
                          <p class="flex items-center">อุณหภูมิ
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>70°C
                          </p>
                          <p class="flex items-center">อุณหภูมิ 
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>25°C
                          </p>
                          <p class="flex items-center">ความชื้น
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>80%
                          </p>
                      </td>
                      <td class="px-4 py-3">
                        <NuxtLink to="/admin/containers/info">
                          <p class="font-semibold text-blue-500 hover:underline">JBI-0001</p>
                        </NuxtLink>
                      </td>
                      <td class="hidden px-4 py-3 md:table-cell">
                          <span class="px-2 py-1 text-sm font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-green-100">
                            อันตราย
                          </span>
                      </td>
                      <td class="px-4 py-3">
                          <span class="px-2 py-1 text-sm font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            เปิด
                          </span>
                      </td>
                    </tr>

                    <tr class="text-gray-700 dark:text-gray-400">
                      <td class="px-4 py-3">
                        <NuxtLink to="/admin/settings/info">
                          <p class="font-semibold text-blue-500 hover:underline">ALI-0001</p>
                        </NuxtLink>
                      </td>
                      <td class="hidden px-4 py-3 lg:table-cell">
                          <p class="">การเปิด/ปิดตู้คอนเทนเนอร์</p>
                      </td>
                      <td class="px-4 py-3">
                          <p class="flex items-center">อุณหภูมิ
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>70°C
                          </p>
                          <p class="flex items-center">อุณหภูมิ 
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>25°C
                          </p>
                          <p class="flex items-center">ความชื้น
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>80%
                          </p>
                      </td>
                      <td class="px-4 py-3">
                        <NuxtLink to="/admin/containers/info">
                          <p class="font-semibold text-blue-500 hover:underline">JBI-0001</p>
                        </NuxtLink>
                      </td>
                      <td class="hidden px-4 py-3 md:table-cell">
                          <span class="px-2 py-1 text-sm font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-green-100">
                            อันตราย
                          </span>
                      </td>
                      <td class="px-4 py-3">
                          <span class="px-2 py-1 text-sm font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            เปิด
                          </span>
                      </td>
                    </tr>

                    <tr class="text-gray-700 dark:text-gray-400">
                      <td class="px-4 py-3">
                        <NuxtLink to="/admin/settings/info">
                          <p class="font-semibold text-blue-500 hover:underline">ALI-0001</p>
                        </NuxtLink>
                      </td>
                      <td class="hidden px-4 py-3 lg:table-cell">
                          <p class="">การเปิด/ปิดตู้คอนเทนเนอร์</p>
                      </td>
                      <td class="px-4 py-3">
                          <p class="flex items-center">อุณหภูมิ
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>70°C
                          </p>
                          <p class="flex items-center">อุณหภูมิ 
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>25°C
                          </p>
                          <p class="flex items-center">ความชื้น
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>80%
                          </p>
                      </td>
                      <td class="px-4 py-3">
                        <NuxtLink to="/admin/containers/info">
                          <p class="font-semibold text-blue-500 hover:underline">JBI-0001</p>
                        </NuxtLink>
                      </td>
                      <td class="hidden px-4 py-3 md:table-cell">
                          <span class="px-2 py-1 text-sm font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-green-100">
                            อันตราย
                          </span>
                      </td>
                      <td class="px-4 py-3">
                          <span class="px-2 py-1 text-sm font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            เปิด
                          </span>
                      </td>
                    </tr>

                    <tr class="text-gray-700 dark:text-gray-400">
                      <td class="px-4 py-3">
                        <NuxtLink to="/admin/settings/info">
                          <p class="font-semibold text-blue-500 hover:underline">ALI-0001</p>
                        </NuxtLink>
                      </td>
                      <td class="hidden px-4 py-3 lg:table-cell">
                          <p class="">การเปิด/ปิดตู้คอนเทนเนอร์</p>
                      </td>
                      <td class="px-4 py-3">
                          <p class="flex items-center">อุณหภูมิ
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>70°C
                          </p>
                          <p class="flex items-center">อุณหภูมิ 
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>25°C
                          </p>
                          <p class="flex items-center">ความชื้น
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>80%
                          </p>
                      </td>
                      <td class="px-4 py-3">
                        <NuxtLink to="/admin/containers/info">
                          <p class="font-semibold text-blue-500 hover:underline">JBI-0001</p>
                        </NuxtLink>
                      </td>
                      <td class="hidden px-4 py-3 md:table-cell">
                          <span class="px-2 py-1 text-sm font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-green-100">
                            อันตราย
                          </span>
                      </td>
                      <td class="px-4 py-3">
                          <span class="px-2 py-1 text-sm font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            เปิด
                          </span>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
              
              <!-- navigator -->
              <div
                class="grid px-4 py-3 text-sm font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
              >
                <span class="flex items-center col-span-3">
                  Showing 21-30 of 100
                </span>
                <span class="col-span-2"></span>
                <!-- Pagination -->
                <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                  <nav aria-label="Table navigation">
                    <ul class="inline-flex items-center">
                      <li>
                        <button
                          class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                          aria-label="Previous"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-4 h-4 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </li>
                      <li>
                        <button
                          class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          1
                        </button>
                      </li>
                      <li>
                        <button
                          class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          2
                        </button>
                      </li>
                      <li>
                        <button
                          class="px-3 py-1 text-white transition-colors duration-150 bg-blue-500 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          3
                        </button>
                      </li>
                      <li>
                        <button
                          class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          4
                        </button>
                      </li>
                      <li>
                        <span class="px-3 py-1">...</span>
                      </li>
                      <li>
                        <button
                          class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          8
                        </button>
                      </li>
                      <li>
                        <button
                          class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          9
                        </button>
                      </li>
                      <li>
                        <button
                          class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                          aria-label="Next"
                        >
                          <svg
                            class="w-4 h-4 fill-current"
                            aria-hidden="true"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </span>
              </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showAddTruckModal: false
        }
    },
    methods: {
        toggleAddTruckModal(){
            this.showAddTruckModal = !this.showAddTruckModal
        }
    },
}
</script>