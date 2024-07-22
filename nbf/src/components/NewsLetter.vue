<template>
  <div class="flex items-center justify-center min-h-screen bg-green-600">
    <div class="flex flex-col items-start">
      <h2 class="text-slate-200 font-bold text-md mb-4">NEWSLETTER</h2>
      <div class="p-2 rounded-full border-2 border-white flex items-center w-full">
        <input
          v-model="email"
          type="email"
          placeholder="youraddress@email.com"
          class="placeholder-slate-300 text-white rounded-full px-4 py-2 outline-none flex-grow"
        />
        <v-btn
          variant="text"
          @click="subscribe"
          class="text-center text-white font-bold px-4 py-2">
          SUBSCRIBE
        </v-btn>
      </div>
    </div>
  </div>

  <PopupModal
    v-model:dialog="dialog"
    :dialog="dialog"
    :dialogTitle="dialogTitle"
    :dialogMessage="dialogMessage"
    :dialogType="dialogType"
  />

</template>

<script setup>
import { ref } from 'vue';
import PopupModal from './PopupModal.vue';

const email = ref('');
const dialog = ref(false);
const dialogTitle = ref('');
const dialogMessage = ref('');
const dialogType = ref(''); // success, error

const subscribe = () => {
  if (validateEmail(email.value)) {
    dialogTitle.value = 'Success';
    dialogMessage.value = 'You have successfully subscribed!';
    dialogType.value = 'success';
  } else {
    dialogTitle.value = 'Error';
    dialogMessage.value = 'Please enter a valid email address.';
    dialogType.value = 'error';
  }
  dialog.value = true;
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
</script>

<style scoped>

</style>
