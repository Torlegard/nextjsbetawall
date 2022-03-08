const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Big Wall Climbing',
      description:
        'This time we take it to Yosemite National Park in Californy.',
      location: 'Yosemite National Park, California, USA',
      date: '2022-05-12',
      image: 'images/climb1.jpg',
      isFeatured: true,
    },
    {
      id: 'e2',
      title: 'Lead-climbing course',
      description:
        "Get your lead-climbing card and learn by the best instructors in Sweden in this 2 day course",
      location: 'Utby, Gothenburg, Sweden',
      date: '2022-06-25' && '2022-06-26',
      image: 'images/climb2.jpg',
      isFeatured: false,
    },
    {
      id: 'e3',
      title: 'Climbing Festival',
      description:
        'Join the yearly climbing festival in Lofoten, Norway. There will be hundreds of climbers showing off and hanging out on the rock. Lots of prices and giveaways promised',
      location: 'Lofoten, Norway',
      date: '2022-07-10' && '2022-07-11',
      image: 'images/climb4.jpg',
      isFeatured: false,
    },
    {
      id: 'e4',
      title: 'Top-rope Course',
      description:
        'In this course we will teach you everything you need to know for top-rope climbing. You will of course get your "Green"-card, which allows you to climb top-rope indoors everywhere in the world.',
      location: 'Klätterdomen, Gothenburg',
      date: '2022-04-10' && '2022-04-11',
      image: 'images/indoortoprope.jpg',
      isFeatured: true,
    },
    {
      id: 'e5',
      title: 'Intermediate Bouldering Course',
      description:
        'Former professional climber Gubb-Jan Åkesson invites you to his bouldering gym to teach you all tips & tricks you can fit into 3 days.',
      location: 'Gubb-Bouldering, Gothenburg',
      date: '2022-08-05' && '2022-08-12' && '2022-08-18',
      image: 'images/indoorboulder.jpg',
      isFeatured: false,
    },
    {
      id: 'e6',
      title: 'Bouldering Weekend',
      description:
        'Backa Boulder invites everyone to their outdoor bouldering-session',
      location: 'Utby, Gothenburg',
      date: '2022-06-12',
      image: 'images/outdoorboulder.jpg',
      isFeatured: false,
    },
    {
      id: 'e7',
      title: 'Traditional Climbing Course',
      description:
        'Smålands Klätterklubb is holding a traditional climbing course where you will learn how to climb - Traditional Style!',
      location: 'Utby, Gothenburg',
      date: '2023-05-12',
      image: 'images/trad.jpg',
      isFeatured: false,
    },
  ];
  DUMMY_EVENTS.sort( (a,b) => a.date.localeCompare(b.date) )
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }