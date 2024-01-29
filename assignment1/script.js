const lyricData = [
    { word: "Work it", time: 1, duration: 2},
    { word: "Make it", time: 3, duration: 2},
    { word: "Do it", time: 5, duration: 2},
    { word: "Makes us", time: 7, duration: 2},
    { word: "Harder  ", time: 9, duration: 7, style: "lyr-slide-down"},
    { word: "Better  ", time: 11, duration: 5, style: "lyr-slide-up"},
    { word: "Faster  ", time: 12, duration: 4, style: "lyr-slide-down"},
    { word: "Stronger", time: 14, duration: 2, style: "lyr-slide-up"},
    { word: "More than", time: 16, duration: 2},
    { word: "Hour", time: 18, duration: 2},
    { word: "Hour", time: 20, duration: 2},
    { word: "Never", time: 22, duration: 2},
    { word: "Ever", time: 24, duration: 2},
    { word: "After", time: 26, duration: 2},
    { word: "Work is", time: 28, duration: 2},
    { word: "Over", time: 30, duration: 2},
]

const lyricCon = document.getElementById("lyric-container")

lyricData.forEach((word) => {
    const lyr = document.createElement('span')
    lyr.textContent = word.word
    if (word.style) {
        lyr.classList.add(word.style)
    } else {
        lyr.classList.add('lyric-text')
    }
    
    setTimeout(() =>{
        lyricCon.appendChild(lyr)
    }, word.time * 1000 )

    setTimeout(() => {
        lyricCon.removeChild(lyr)
    }, word.duration * 1000 + word.time * 1000)
})



// { word: "Wake", time: 1, duration: 0.2},
// { word: "Up", time: 1.2, duration: 0.7},
// { word: "Grab a brush and put a little make-up", time: 2, duration: 3},
// { word: "Hide the scars to fade away the shake-up", time: 5, duration: 3},
// { word: "Why'd you leave the keys upon the table?", time: 2, duration: 3},
// { word: "Here you go create another fable", time: 5, duration: 3},
// { word: "you wanted to", time: 2, duration: 3},
// { word: "Grab a brush and put a little make-up", time: 5, duration: 3},


// { word: "Hey", time: 1, duration: 1.5},
// { word: "don't write yourself off yet", time: 2.5, duration: 2},
// { word: "It's only in your head, you feel left out", time: 4.5, duration: 3},
// { word: "Just try your best", time: 7.5, duration: 2},
// { word: "Try everything you can", time: 9.5, duration: 2},
// { word: "And don't you worry what they tell themselves", time: 11.5, duration: 3},
// { word: "When you're away", time: 14.5, duration: 2},
// { word: "It", time: 16.5, duration: 0.15},
// { word: "just", time: 16.65, duration: 0.15},
// { word: "takes", time: 16.8, duration: 0.15},
// { word: "some", time: 16.95, duration: 0.15},
// { word: "time", time: 17.1, duration: 0.15},
// { word: "Little girl, you're in the middle of the ride", time: 17.25, duration: 2},