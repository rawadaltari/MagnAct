import { ref } from 'vue';

export function useContactForm() {
  const name = ref('');
  const email = ref('');
  const phone = ref('');
  const message = ref('');

  const success = ref(false);
  const errors = ref({});

  const validateForm = () => {
    errors.value = {};

    if (!name.value.trim()) errors.value.name = 'الاسم مطلوب';
    if (!email.value.trim()) errors.value.email = 'البريد الإلكتروني مطلوب';
    if (!phone.value.trim()) errors.value.phone = 'رقم الهاتف مطلوب';
    if (!message.value.trim()) errors.value.message = 'الرسالة مطلوبة';

    return Object.keys(errors.value).length === 0;
  };

  const resetForm = () => {
    name.value = '';
    email.value = '';
    phone.value = '';
    message.value = '';
  };

  const sendMessage = () => {
    if (validateForm()) {
      success.value = true;
      resetForm();

      setTimeout(() => {
        success.value = false;
      }, 3000);
    }
  };

  return {
    name,
    email,
    phone,
    message,
    success,
    errors,
    sendMessage,
  };
}
