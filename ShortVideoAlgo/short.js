

const data = [
    {
        id: 1,
        category: "Music",
    },
    {
        id: 2,
        category: "Funny",
    },
    {
        id: 3,
        category: "Educational",
    },
    {
        id: 4,
        category: "Movie",

    },
    {
        id: 5,
        category: "Dance",
    },
    {
        id: 6,
        category: "Kids"
    },
]

const cat = document.getElementById("cat");
var arr = [];
function showData(a = Number(num)) {
    if (a > 0 && a < 7) {
        arr.push(Number(a));
    }

    data.map((e, i) => {
        if (e.id == a) {
            return cat.innerText = e.category;
        }
    })
    console.log(arr)
    localStorage.setItem("array", JSON.stringify(arr));
}

function fun() {
    let storageArray = localStorage.getItem("array")
    console.log(storageArray)
    let finalArray = JSON.parse(storageArray);
    console.log(typeof (JSON.parse(storageArray)));
    let n = finalArray.length;
    let localnum = toFindMaxFrequency(finalArray, n);
    console.log(localnum);
    data.map((e, i) => {
        if (e.id == localnum) {
            cat.innerText = e.category;
        }
    })

}


function toFindMaxFrequency(arr, n) {
    let maxCount = 0;
    let mostFreqElement;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = i + 1; j < n; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            mostFreqElement = arr[i];
        }
    }
    return mostFreqElement;

}


fun();






