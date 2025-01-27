// plugins/crisp.js
// export default ({ app }) => {
//   if (process.client) {
//     window.$crisp = [];
//     window.CRISP_WEBSITE_ID = "272d5e66-85b9-43e1-9ad3-7b265d7220ca";

//     window.addEventListener("load", () => {
//       const d = document;
//       const s = d.createElement("script");
//       s.src = "https://client.crisp.chat/l.js";
//       s.async = true;
//       d.getElementsByTagName("head")[0].appendChild(s);
//     });
//   }
// };

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "272d5e66-85b9-43e1-9ad3-7b265d7220ca"; // Replace with your Crisp Website ID

    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;
    document.head.appendChild(script);
  }
});
