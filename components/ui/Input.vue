<template>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="ui-input"
      v-bind="$attrs"
    />
  </template>
  
  <script setup>
  defineProps({
    modelValue: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  })
  
  defineEmits(['update:modelValue'])
  </script>
  
  <style scoped>
  .ui-input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    background-color: #f9fafb;
    transition: border-color 0.2s;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  
  .ui-input:focus {
    outline: none;
    border-color: #3b82f6;
    
  }
  
  .ui-input.dark {
  
    border-color: #374151;
    color: #f9fafb;
  }
  </style>