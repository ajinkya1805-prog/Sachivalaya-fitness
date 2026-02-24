console.log("JS LOADED");

document.addEventListener("DOMContentLoaded", () => {

  const viewPlansBtn = document.getElementById("viewPlansBtn");
  const pricingModal = document.getElementById("pricingModal");
  const closeBtn = document.querySelector(".close-btn");

  if (!viewPlansBtn || !pricingModal || !closeBtn) {
    console.error("Pricing elements missing");
    return;
  }

  viewPlansBtn.addEventListener("click", () => {
    pricingModal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    pricingModal.style.display = "none";
  });

  pricingModal.addEventListener("click", (e) => {
    if (e.target === pricingModal) {
      pricingModal.style.display = "none";
    }
  });

});

// const scriptURL = 'https://script.google.com/macros/s/AKfycbx5ptz6pcpXpEjaSDegOJbSMj3_hdd6bgKQ9FhaWkVnlScSZkj5KtOFr9uxu6_2XrPT/exec';
// const form = document.getElementById('gymInquiryForm');
// const btn = document.getElementById('submitBtn');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     btn.disabled = true;
//     btn.innerText = "Processing...";

//     fetch(scriptURL, { 
//         method: 'POST', 
//         mode: 'no-cors', // THIS PREVENTS THE NETWORK ERROR
//         body: new FormData(form) 
//     })
//     .then(() => {
//         // Since 'no-cors' is used, we assume success if no crash occurs
//         const name = form.name.value;
//         const service = form.service.value;
//         const whatsappMsg = `Hi Sachivalay Fitness, I'm ${name} and I'm interested in ${service}.`;
        
//         // Open WhatsApp
//         window.open(`https://wa.me/919867226715?text=${encodeURIComponent(whatsappMsg)}`, '_blank');

//         alert("Details Saved! Opening WhatsApp...");
//         form.reset();
//         btn.disabled = false;
//         btn.innerText = "Request Callback";
//     })
//     .catch(error => {
//         console.error('Error!', error.message);
//         alert("Something went wrong. Please check your internet.");
//         btn.disabled = false;
//         btn.innerText = "Request Callback";
//     });
// });

// USE THE NEW URL FROM YOUR LATEST DEPLOYMENT HERE
const scriptURL = 'https://script.google.com/macros/s/AKfycbyx48_ALhlkQ8CXJIY4G-ETHrCYtkHtVzqRGxgvhmEddtdOuvmQIEu1sNVsNFmyXnHc/exec'; 

const form = document.getElementById('gymInquiryForm');
const btn = document.getElementById('submitBtn');
const msg = document.getElementById('thankYouMsg');

form.addEventListener('submit', e => {
    e.preventDefault();
    btn.disabled = true;
    btn.innerText = "Saving...";

    fetch(scriptURL, { 
        method: 'POST', 
        mode: 'no-cors', 
        body: new FormData(form) 
    })
    .then(() => {
        // Show success message on site
        form.style.display = "none";
        msg.style.display = "block";

        // Get values for WhatsApp
        const userName = form.querySelector('[name="name"]').value;
        const selectedService = form.querySelector('[name="service"]').value;
        const whatsappMsg = `Hi Sachivalay Fitness, I am ${userName}. I'm interested in ${selectedService}.`;
        const waLink = `https://wa.me/919867226715?text=${encodeURIComponent(whatsappMsg)}`;

        setTimeout(() => {
            window.open(waLink, '_blank');
            form.reset();
            form.style.display = "flex"; 
            btn.disabled = false;
            btn.innerText = "Request Callback";
            msg.style.display = "none";
        }, 2000);
    })
    .catch(error => {
        console.error('Error!', error.message);
        btn.disabled = false;
        btn.innerText = "Try Again";
    });
});

