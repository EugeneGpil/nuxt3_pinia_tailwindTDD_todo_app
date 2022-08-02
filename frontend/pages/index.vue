<template>
  <div class="w-full min-h-screen bg-grey-100">
    <section class="text-center pt-7">
      <h1 class="text-4xl text-gray-800">Todo:</h1>
    </section>
    <section class="w-9/12 max-w-lg mx-auto flex items-center justify-center
                    mg-7 bg-white shadow p-5 rounded">
      <form @submin.prevent>
        <input type="text"
               class="py-2 px-4 border border-blue-200 focus:outline-blue-300 rounded"
               placeholder="Add a todo">
        <button class=" border border-blue-200 py-2 px-3 ml-3 hover:bg-blue-200
                        transition-all duration-500 rounded">
          Add Todo
        </button>
      </form>
    </section>
  </div>
</template>
