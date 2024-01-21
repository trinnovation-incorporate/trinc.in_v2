document.addEventListener('DOMContentLoaded', () => {
 
  		let block = document.querySelector('.rich_txt_squares');
  
  		if(block && isLarger())
          setSquareOverflow(block);
  		
  		function isLarger() {
          let mq = window.matchMedia('(min-width: 991px)');
          return mq.matches;
        }
  	
  const mqxl = window.matchMedia('(min-width: 1200px)');
  const mql = window.matchMedia('(min-width: 991px) and (max-width: 1200px)');

  mql.onchange = (e) => {
      if (e.matches) {
      /* the viewport is 600 pixels wide or less */
        setSquareOverflow(block);
      }
  }
  mqxl.onchange = (e) => {
      if (e.matches) {
      /* the viewport is 600 pixels wide or less */
        setSquareOverflow(block);
      }
  }
  
});

function setSquareOverflow(block) {
        let squares = block.querySelector('.d-sm-block .squares');
  		let textContainer;
  		if (block.querySelector('.vertical-header') ) {
          textContainer = block.querySelector('.vertical-header');
        }
  		else {
          textContainer = block.querySelector('.text-container');
        }
          
		let	squaresHeight = squares.getBoundingClientRect().height,
            textHeight = textContainer.getBoundingClientRect().height;
		
  		console.log(squaresHeight);
		//console.log(squares.getBoundingClientRect());
  		console.log(textHeight);
  console.log(textContainer);

		if(textHeight > squaresHeight) {
			textContainer.style.maxHeight = `${squaresHeight}px`;
			textContainer.style.overflowY = 'scroll';
          	textContainer.classList.add('scrollbar-ripe-malinka');
          	textContainer.classList.contains('text-container') ? textContainer.style.marginTop = '2rem' : '';
		}
  		else {
          textContainer.style.maxHeight = 'unset';
          textContainer.style.overflowY = 'unset';
          textContainer.classList.remove('scrollbar-ripe-malinka');
        }
}