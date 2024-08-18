chrome.storage.local.get([
    'coefficient_limiter_from',
    'coefficient_limiter_to',
    'skip_count',
    'play_count',
    'coefficient'
], function(result){
    if(!('coefficient_limiter_from' in result)){
        result.coefficient_limiter_from = 1;
    }

    if(!('coefficient_limiter_to' in result)){
        result.coefficient_limiter_to = 1;
    }

    if(!('skip_count' in result)){
        result.skip_count = 0;
    }

    if(!('play_count' in result)){
        result.play_count = 0;
    }

    if(!('coefficient' in result)){
        result.coefficient = 1;
    }

    document.querySelector('.popup input[name="coefficient_limiter_from"]').value = result.coefficient_limiter_from;
    document.querySelector('.popup input[name="coefficient_limiter_to"]').value = result.coefficient_limiter_to;
    document.querySelector('.popup input[name="skip_count"]').value = result.skip_count;
    document.querySelector('.popup input[name="play_count"]').value = result.play_count;
    document.querySelector('.popup input[name="coefficient"]').value = result.coefficient;
});


document.querySelector('.popup form').onsubmit = function(){
    chrome.storage.local.set({
        coefficient_limiter_from: document.querySelector('.popup input[name="coefficient_limiter_from"]').value,
        coefficient_limiter_to: document.querySelector('.popup input[name="coefficient_limiter_to"]').value,
        skip_count: document.querySelector('.popup input[name="skip_count"]').value,
        play_count: document.querySelector('.popup input[name="play_count"]').value,
        coefficient: document.querySelector('.popup input[name="coefficient"]').value
    });
};