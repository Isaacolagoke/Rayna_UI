// responsivenes

function sidebar() {
  const breakpoint = 1280
  return {
    open: {
      above: true,
      below: false,
    },
    isAboveBreakpoint: window.innerWidth > breakpoint,

    handleResize() {
      this.isAboveBreakpoint = window.innerWidth > breakpoint
    },

    isOpen() {
      console.log(this.isAboveBreakpoint)
      if (this.isAboveBreakpoint) {
        return this.open.above
      }
      return this.open.below
    },
    handleOpen() {
      if (this.isAboveBreakpoint) {
        this.open.above = true
      }
      this.open.below = true
    },
    handleClose() {
      if (this.isAboveBreakpoint) {
        this.open.above = false
      }
      this.open.below = false
    },
    handleAway() {
      if (!this.isAboveBreakpoint) {
        this.open.below = false
      }
    },
  }
}

// search sidebar
const searchInput = document.getElementById('searchInput');
const sidebarList = document.getElementById('sidebarList').getElementsByTagName('li');

searchInput.addEventListener('input', function() {
  const searchText = this.value.toLowerCase();
  for (let i = 0; i < sidebarList.length; i++) {
    const listItem = sidebarList[i];
    const linkText = listItem.textContent.toLowerCase();
    if (linkText.includes(searchText)) {
      listItem.style.display = 'block';
    } else {
      listItem.style.display = 'none';
    }
  }
});

// copy content

// const copyButton = document.getElementById('copyButton');
//   const copyContent = document.getElementById('copyContent');
//   const icon = document.getElementById('icon');
//   const buttonText = document.getElementById('buttonText');

//   copyButton.addEventListener('click', () => {
//     const content = copyContent.innerText;
//     navigator.clipboard.writeText(content)
//       .then(() => {
//         icon.classList.remove('fa-clipboard');
//         icon.classList.add('fa-check');
//         buttonText.textContent = 'Copied';
//         setTimeout(() => {
//           icon.classList.remove('fa-check');
//           icon.classList.add('fa-clipboard');
//           buttonText.textContent = 'Copy';
//         }, 3000);
//       })
//       .catch(err => {
//         console.error('Failed to copy content: ', err);
//       });
//   });


// colors page copy code
  // Get all copy buttons
  const copyButtons = document.querySelectorAll('.copyButton');

  // Loop through each copy button
  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Find the corresponding copy content within the same parent element
      const content = button.parentElement.nextElementSibling.querySelector('.copyContent');
      // Check if content exists before copying
      if (content) {
        // Create a temporary textarea to copy the content
        const textarea = document.createElement('textarea');
        textarea.value = content.textContent;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        // Change button text to indicate copying
        button.querySelector('span').textContent = 'Copied';
        // Change button icon to indicate success
        button.innerHTML = '<i class="mr-1 fas fa-check"></i><span>Copied</span>';
        // Apply transition to button text
        button.querySelector('span').style.transition = 'opacity 0.3s ease';
        // Reset button text and icon after 3 seconds
        setTimeout(() => {
          button.querySelector('span').textContent = 'Copy';
          button.innerHTML = '<i class="mr-1 fas fa-clipboard"></i><span>Copy</span>';
          button.querySelector('span').style.transition = 'opacity 0.3s ease';
        }, 1000);
      } else {
        console.error('Copy content not found.');
      }
    });
  });


// function copyCode() {
//     const code = document.querySelector('code').textContent.trim();

//     navigator.clipboard.writeText(code)
//         .then(() => {
//             const copyIcon = document.getElementById('copyIcon');
//             copyIcon.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M17.3535 6.14375C17.755 5.76453 17.773 5.13162 17.3938 4.73011C17.0146 4.3286 16.3817 4.31053 15.9802 4.68975L6.96132 13.2079L4.02014 10.43C3.61863 10.0508 2.98572 10.0688 2.6065 10.4704C2.22728 10.8719 2.24535 11.5048 2.64686 11.884L6.27468 15.3104C6.66008 15.6744 7.26256 15.6744 7.64796 15.3104L17.3535 6.14375Z" fill="#344054"/>`;

//             const buttonText = document.getElementById('buttonText');
//             buttonText.textContent = 'Copied';

//             setTimeout(() => {
//                 copyIcon.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6665 1.66675C9.82556 1.66675 8.33317 3.15913 8.33317 5.00008V6.66675H4.99984C3.15889 6.66675 1.6665 8.15913 1.6665 10.0001V15.0001C1.6665 16.841 3.15889 18.3334 4.99984 18.3334H8.33317C10.1741 18.3334 11.6665 16.841 11.6665 15.0001V13.3334H14.9998C16.8408 13.3334 18.3332 11.841 18.3332 10.0001V5.00008C18.3332 3.15913 16.8408 1.66675 14.9998 1.66675H11.6665ZM11.6665 11.6667H14.9998C15.9203 11.6667 16.6665 10.9206 16.6665 10.0001V5.00008C16.6665 4.07961 15.9203 3.33341 14.9998 3.33341H11.6665C10.746 3.33341 9.99984 4.07961 9.99984 5.00008V7.11269C10.9962 7.68904 11.6665 8.76628 11.6665 10.0001V11.6667ZM3.33317 10.0001C3.33317 9.07961 4.07936 8.33342 4.99984 8.33342H8.33317C9.25365 8.33342 9.99984 9.07961 9.99984 10.0001V15.0001C9.99984 15.9206 9.25365 16.6667 8.33317 16.6667H4.99984C4.07936 16.6667 3.33317 15.9206 3.33317 15.0001V10.0001Z" fill="#344054"/>`;
//                 buttonText.textContent = 'Copy';
//             }, 3000);
//         })
//         .catch(err => {
//             console.error('Failed to copy content: ', err);
//         });
// }


function copyCode(containerId) {
  const codeContainer = document.getElementById(containerId);
  const codeElement = codeContainer.querySelector('code');
  const copyIcon = codeContainer.querySelector('.copyIcon');
  const buttonText = codeContainer.querySelector('.buttonText');

  const code = codeElement.textContent.trim();

  navigator.clipboard.writeText(code)
      .then(() => {
          // Update copy icon for success
          copyIcon.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M17.3535 6.14375C17.755 5.76453 17.773 5.13162 17.3938 4.73011C17.0146 4.3286 16.3817 4.31053 15.9802 4.68975L6.96132 13.2079L4.02014 10.43C3.61863 10.0508 2.98572 10.0688 2.6065 10.4704C2.22728 10.8719 2.24535 11.5048 2.64686 11.884L6.27468 15.3104C6.66008 15.6744 7.26256 15.6744 7.64796 15.3104L17.3535 6.14375Z" fill="#344054"/>`;

          // Update button text for success
          buttonText.textContent = 'Copied';

          // Reset copy icon and button text after 3 seconds
          setTimeout(() => {
              copyIcon.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6665 1.66675C9.82556 1.66675 8.33317 3.15913 8.33317 5.00008V6.66675H4.99984C3.15889 6.66675 1.6665 8.15913 1.6665 10.0001V15.0001C1.6665 16.841 3.15889 18.3334 4.99984 18.3334H8.33317C10.1741 18.3334 11.6665 16.841 11.6665 15.0001V13.3334H14.9998C16.8408 13.3334 18.3332 11.841 18.3332 10.0001V5.00008C18.3332 3.15913 16.8408 1.66675 14.9998 1.66675H11.6665ZM11.6665 11.6667H14.9998C15.9203 11.6667 16.6665 10.9206 16.6665 10.0001V5.00008C16.6665 4.07961 15.9203 3.33341 14.9998 3.33341H11.6665C10.746 3.33341 9.99984 4.07961 9.99984 5.00008V7.11269C10.9962 7.68904 11.6665 8.76628 11.6665 10.0001V11.6667ZM3.33317 10.0001C3.33317 9.07961 4.07936 8.33342 4.99984 8.33342H8.33317C9.25365 8.33342 9.99984 9.07961 9.99984 10.0001V15.0001C9.99984 15.9206 9.25365 16.6667 8.33317 16.6667H4.99984C4.07936 16.6667 3.33317 15.9206 3.33317 15.0001V10.0001Z" fill="#344054"/>`;
              buttonText.textContent = 'Copy';
          }, 3000);
      })
      .catch(err => {
          console.error('Failed to copy content: ', err);
      });
}


// <!-- Date cells -->
// <!-- Generate buttons for days 1 to 31 dynamically -->
    // Get the container for the date cells
const calendarContainer = document.getElementById('calendarDate');

// Generate buttons for days 1 to 31
for (let day = 1; day <= 31; day++) {
    // Create a button element
    const button = document.createElement('button');
    // Set the button's class and styles
    button.className = "p-[9.52px] paragraph-Xsmall-regular border border-Neutral-100 text-black bg-white flex justify-center items-center rounded-[10px] w-[40px] h-[40px]";
    // Set the button's text content to the day number
    button.textContent = day;
    // Append the button to the calendar container
    calendarContainer.appendChild(button);
}







