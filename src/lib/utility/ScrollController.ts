declare let window : Window

  
export function init () {
    
window.addEventListener('wheel', handleWheel);

const viewPortHeight = window.screen.height

function handleWheel(event: { preventDefault: () => void; deltaY: number; }) {
    event.preventDefault();
    if (event.deltaY > 0) {
      window.scrollBy(0, viewPortHeight);
    } else {
      window.scrollBy(0, -viewPortHeight);
    }
  }
}