<template>
<v-dialog v-model="localDialog" width="auto">
<v-card max-width="400">
  <v-card-title class="headline">
    {{ dialogTitle }}
  </v-card-title>
  <v-divider :thickness="2" class="border-opacity-100"></v-divider>
  <v-card-text>
    <v-container>
      <v-row justify="center">
        <v-icon class="items-center" v-if="dialogType === 'success'" color="success" size="64">
          mdi-check-circle-outline
        </v-icon>
        <v-icon v-else color="error" size="64">
          mdi-close-circle-outline
        </v-icon>
        <div class="text-lg">{{ dialogMessage }}</div>
      </v-row>
    </v-container>
  </v-card-text>
  <v-card-actions>
    <v-btn class="ms-auto" @click="closeDialog">Ok</v-btn>
  </v-card-actions>
</v-card>
</v-dialog>
</template>

<script setup>
import { ref, toRefs, watch } from 'vue';

const props = defineProps({
  dialog: {
    type: Boolean,
    required: true
  },
  dialogTitle: {
    type: String,
    required: true
  },
  dialogMessage: {
    type: String,
    required: true
  },
  dialogType: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['update:dialog']);
const { dialog, dialogTitle, dialogMessage, dialogType } = toRefs(props);

const localDialog = ref(dialog.value);

watch(dialog, (newVal) => {
  localDialog.value = newVal;
});

watch(localDialog, (newVal) => {
  emit('update:dialog', newVal);
});

const closeDialog = () => {
  localDialog.value = false;
};
</script>


<style scoped>

</style>
