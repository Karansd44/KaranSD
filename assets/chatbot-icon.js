// This is a placeholder for the chatbot icon
// In a real application, you would have an actual image file
// For this example, we'll use a data URI that represents a simple chat icon

const chatbotIconSvgBase64 = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle">
  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
</svg>
`;

const dataUriLight = `data:image/svg+xml;base64,${btoa(chatbotIconSvgBase64.replace(/currentColor/g, '#4B5563'))}`;
const dataUriDark = `data:image/svg+xml;base64,${btoa(chatbotIconSvgBase64.replace(/currentColor/g, '#E5E7EB'))}`;

export const chatbotIcon = {
  src: dataUriLight
};

export const chatbotIconDark = {
  src: dataUriDark
};