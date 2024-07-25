<template>
  <div class="flex items-center justify-center min-h-screen bg-green-600">
    <div class="flex flex-col items-start">
      <h2 class="text-slate-200 font-bold text-md mb-4">NEWSLETTER</h2>
      <div :class="['p-2 rounded-full border-2 flex items-center w-full', emailError ? 'border-red-500' : 'border-white']">
        <input
          v-model="email"
          type="email"
          placeholder="youraddress@email.com"
          :class="['placeholder-slate-300 text-white rounded-full px-4 py-2 outline-none flex-grow', emailError ? 'text-red-500' : '']"
        />
        <v-btn
          variant="text"
          @click="subscribe"
          class="text-center text-white font-bold px-4 py-2">
          SUBSCRIBE
        </v-btn>
      </div>
      <p v-if="emailError" class="text-red-500 mt-2">{{ emailError }}</p>
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
const emailError = ref('');

const subscribe = () => {
  const validationResult = validateEmail(email.value);
  if (validationResult.isValid) {
    dialogTitle.value = 'Success';
    dialogMessage.value = `You have successfully subscribed ${email.value}!`;
    dialogType.value = 'success';
    emailError.value = '';
  } else {
    dialogTitle.value = 'Error';
    dialogMessage.value = 'Please enter a valid email address.';
    dialogType.value = 'error';
    emailError.value = validationResult.errorMessage;
  }
  dialog.value = true;
};

const validateEmail = (email) => {
  if (email.length < 6) {
    return { isValid: false, errorMessage: 'Email is too short.' };
  }
  if (!email.includes('@')) {
    return { isValid: false, errorMessage: 'Email must contain "@" symbol.' };
  }
  const invalidChars = /[!#$%^&*(),?":{}|<>]/;
  if (invalidChars.test(email)) {
    return { isValid: false, errorMessage: 'Email contains invalid characters.' };
  }
  return { isValid: true, errorMessage: '' };
};
</script>

<style scoped>

</style>
