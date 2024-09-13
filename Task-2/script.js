document.addEventListener('DOMContentLoaded', () => {
    const moreInfoButton = document.getElementById('more-info');
    const extraInfo1 = document.getElementById('extra-info1');
    const extraInfo2 = document.getElementById('extra-info2');
    const extraInfo3 = document.getElementById('extra-info3');
    const extraInfo4 = document.getElementById('extra-info4');
    const extraInfo5 = document.getElementById('extra-info5');

    moreInfoButton.addEventListener('click', () => {
        if (extraInfo1.classList.contains('hidden') &&
        extraInfo2.classList.contains('hidden')
    && extraInfo3.classList.contains('hidden')
&& extraInfo4.classList.contains('hidden')
&& extraInfo5.classList.contains('hidden')) {
            extraInfo1.classList.remove('hidden');
            extraInfo2.classList.remove('hidden');
            extraInfo3.classList.remove('hidden');
            extraInfo4.classList.remove('hidden');
            extraInfo5.classList.remove('hidden');
            
            moreInfoButton.textContent = 'Show Less';
        } else {
            extraInfo1.classList.add('hidden');
            extraInfo2.classList.add('hidden');
            extraInfo3.classList.add('hidden');
            extraInfo4.classList.add('hidden');
            extraInfo5.classList.add('hidden');
            
            moreInfoButton.textContent = 'More About Kalam';
        }
    });
});
