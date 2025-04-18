<template>
    <textarea
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="ui-textarea"
      v-bind="$attrs"
      :rows="rows"
    ></textarea>
  </template>
  
  <script setup>
  defineProps({
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    rows: {
      type: Number,
      default: 4
    }
  })
  
  defineEmits(['update:modelValue'])
  </script>
  
  <style scoped>
  .ui-textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    background-color: #f9fafb;
    transition: border-color 0.2s;
    font-size: 0.875rem;
    line-height: 1.25rem;
    min-height: 100px;
    resize: vertical;
  }
  
  .ui-textarea:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  .ui-textarea.dark {
    
    color: #f9fafb;
  }
  </style>