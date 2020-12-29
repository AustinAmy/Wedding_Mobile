var config = {
    style: 'mapbox://styles/vizdr/ckemwrhhv0mka1akef8twdhyn?fresh=true',
    accessToken: 'pk.eyJ1Ijoidml6ZHIiLCJhIjoiY2tlbXg5azJiMDJkdzJ5bGdwamxtNGcxdSJ9.4AOIkZvoODqHwb--4IeG1g',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'The Three Best Museums in Austin for an Indoor Wedding',
    byline: 'By Amy Wu',
    footer: 'Data Sources:</br>The Knot; <a href="https://blantonmuseum.org/2016/01/choosing-the-blanton-museum-for-your-special-day-2/">Blanton Museum of Art</a>.(2020).; <a href="http://thecontemporaryaustin.org/wp-content/uploads/2019/09/Jones_Center_Site_Rentals_2020.pdf">Jones Center - The Contemporary Austin</a></br> <a href="https://www.thestoryoftexas.com/upload/files/Bullock-Museum-Rental-Rates-2020.pdf">Bullock Texas State History Museum</a>; </br> Mapbox. (2020). Storytelling. <a href ="https://github.com/mapbox/storytelling">Mapbox</a>',
   
  chapters: [
      
       {
            id: 'instructions',
            description: 'During the summer, the temperature in Austin commonly tops 100 degrees. One affordable way to host your wedding indoors is to host it in a museum. While shopping for my own wedding venue, I narrowed my search to these three museums, based on their capacity and cost.',

            location: {
                center: [-97.73744, 30.281],
                zoom: 17,
                pitch: 45,
                bearing: -40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
      {
            id: 'instructions2',
            description: 'Scroll down the map to view the venues.',
        

            location: {
                center: [-97.73744, 30.281],
                zoom: 17,
                pitch: 45,
                bearing: -40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
       {
            id: 'first-museum',
            title: 'Blanton Museum of Art',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/University_of_Texas_at_Austin_August_2019_41_%28Jack_S._Blanton_Museum_of_Art%29.jpg/220px-University_of_Texas_at_Austin_August_2019_41_%28Jack_S._Blanton_Museum_of_Art%29.jpg',
            
            alt: 'Photo of the Blanton Museum of Art',  
            description: 'Photo by <a href="https://en.wikipedia.org/wiki/Blanton_Museum_of_Art">Michael Barera</a>. </br></br>TThe Blanton has capacity for 150. Cost starts at $5,000. </br>For more information, call (512) 475-6516.',
         

            location: {
                center: [-97.73744, 30.281],
                zoom: 17,
                pitch: 45,
                bearing: -40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'second-museum',
            title: 'Jones Center - The Contemporary Austin',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/The_Contemporar_yAustin_-_JonesCenter.jpg/220px-The_Contemporar_yAustin_-_JonesCenter.jpg',
            alt: 'Photo of the Jones Center - The Contemporary Austin',
            description: 'Photo by <a href="https://en.wikipedia.org/wiki/The_Contemporary_Austin">Laguna Jones</a>.</br></br>TThe Jones Center has capacity for 250. Cost starts at $2,900. For more information, call (512) 458-8191 ext. 255.',
            location: {
                center: [-97.74269, 30.26958],
                zoom: 17,
                pitch: 45,
                bearing: -100
            },
            onChapterEnter: [],
            onChapterExit: []
          },
          {
              id: 'third-museum',
              title: 'Bullock Texas State History Museum',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/BobBullockMuseumAustinTX.JPG/220px-BobBullockMuseumAustinTX.JPG',
              alt: 'Photo of the Bullock Texas State History Museum',  
            description: 'Photo by <a href="https://en.wikipedia.org/wiki/Bullock_Texas_State_History_Museum">WhisperToMe</a>.</br></br>This is the museum that we chose. The Bullock has several floors available for weddings with a capacity for 300. The cost to reserve the ground floor is $4,500. For more information, call (512) 936-4632.',
              location: {
                  center: [-97.73915, 30.2803],
                  zoom: 17,
                  pitch: 45,
                  bearing: -40
              },
            onChapterEnter: [],
            onChapterExit: []

        }
    ]
};
