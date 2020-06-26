const whiteBoxes = document.getElementsByClassName('whiteBox');
const imgBox = document.querySelector('.imgBox');

imgBox.addEventListener('dragstart', (e)=>{
    // console.log('DragStart fired');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
});

imgBox.addEventListener('dragend', (e)=>{
    // console.log('DragEnd fired');
    e.target.className = 'imgBox';
});

for(let whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover', (e)=>{
        // console.log('dragover fired');
        e.preventDefault();
    });

    whiteBox.addEventListener('dragenter', (e)=>{
        // console.log('dragenter fired');
        e.target.className += ' dashed';
        // setTimeout(() => {
        //     e.target.className = 'whiteBox';
        // }, 1000);
    });

    whiteBox.addEventListener('dragleave', (e)=>{
        // console.log('dragleave fired');
        e.target.className = 'whiteBox';
    });

    whiteBox.addEventListener('drop', (e)=>{
        // console.log('drop fired');
        e.target.append(imgBox);
        // e.target.append(document.createElement('div'));
        // e.target.firstElementChild.className = 'imgBox';         //tick
        // e.target.firstElementChild.setAttribute('draggable', true);
    });

};