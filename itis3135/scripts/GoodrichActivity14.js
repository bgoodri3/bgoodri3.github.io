document.addEventListener('DOMContentLoaded', function () {
    const navList = document.getElementById('nav_list');
    const mainContent = document.querySelector('main');

    navList.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const fileName = event.target.getAttribute('title') + '.json';
            loadData(fileName);
        }
    });

    function loadData(fileName) {
        // Clear existing content
        mainContent.innerHTML = '';

        // Make an Ajax request to fetch data from the JSON file
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const speakerData = JSON.parse(xhr.responseText);
                    renderSpeaker(speakerData);
                } else {
                    console.error('Failed to load data. Status:', xhr.status);
                }
            }
        };

        // Specify the file path for the JSON files in the "stuff" folder
        xhr.open('GET', 'stuff/' + fileName, true);
        xhr.send();
    }

    function renderSpeaker(data) {
        // Check if the 'speakers' array exists in the JSON data
        if (data.speakers && data.speakers.length > 0) {
            const speakerContainer = document.createElement('div');
            speakerContainer.classList.add('speaker');
    
            const speakerInfo = data.speakers[0]; // Assuming there's only one speaker in the array
    
            const speakerName = document.createElement('h1');
            speakerName.textContent = speakerInfo.speaker;
    
            const speakerTitle = document.createElement('h2');
            speakerTitle.textContent = speakerInfo.title;
    
            const speakerImage = document.createElement('img');
            speakerImage.src = speakerInfo.image;
            speakerImage.alt = speakerInfo.speaker;
    
            const speakerText = document.createElement('p');
            speakerText.textContent = speakerInfo.text;
    
            // Append elements to the main content
            speakerContainer.appendChild(speakerName);
            speakerContainer.appendChild(speakerTitle);
            speakerContainer.appendChild(speakerImage);
            speakerContainer.appendChild(speakerText);
            mainContent.appendChild(speakerContainer);
        } else {
            console.error('Invalid JSON format. Missing or empty "speakers" array.');
        }
    }
});